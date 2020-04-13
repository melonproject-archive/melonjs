import BigNumber from 'bignumber.js';
import ethers from 'ethers';
import { TransactionWrapper, Contract } from '../Contract';
import { KyberPriceFeedContract, EngineContract } from '../contracts';

export interface AmguConsumer extends Contract {
  engine: (overrides?: ethers.CallOverrides) => Promise<string>;
  mlnToken: (overrides?: ethers.CallOverrides) => Promise<string>;
  priceSource: (overrides?: ethers.CallOverrides) => Promise<string>;
}

export function isAmguConsumer(contract: Contract): contract is AmguConsumer {
  const contrakt = (contract as any) as AmguConsumer;
  if (typeof contrakt.engine !== 'function') {
    return false;
  }

  if (typeof contrakt.mlnToken !== 'function') {
    return false;
  }

  if (typeof contrakt.priceSource !== 'function') {
    return false;
  }

  return true;
}

/**
 * Calculates the required amgu value for a transaction.
 *
 * @param transaction The transaction to calculate the amgu value for.
 * @param estimation The gas estimation for the transaction.
 * @param overrides Optional overrides to pass to the calls.
 */
export async function calculateAmgu(
  transaction: TransactionWrapper,
  estimation: ethers.BigNumber | BigNumber,
  overrides?: ethers.CallOverrides,
) {
  if (!isAmguConsumer(transaction.contract)) {
    throw new Error(`The given transaction\'s contract does support amgu calculation.`);
  }

  const [engineAddress, mlnTokenAddress, priceSourceAddress] = await Promise.all([
    transaction.contract.engine(overrides),
    transaction.contract.mlnToken(overrides),
    transaction.contract.priceSource(overrides),
  ]);

  const provider = transaction.contract.$$ethers.signer || transaction.contract.$$ethers.provider;
  const prices = new KyberPriceFeedContract(priceSourceAddress, provider);
  const engine = new EngineContract(engineAddress, provider);
  const [mlnPerAmgu, ethPerMln] = await Promise.all([
    engine.amguPrice(overrides),
    prices.getPrice(mlnTokenAddress, overrides),
  ]);

  const result = new BigNumber(1)
    .multipliedBy(mlnPerAmgu.toString())
    .multipliedBy(ethPerMln.price_.toString())
    .multipliedBy(BigNumber.isBigNumber(estimation) ? estimation : estimation.toString())
    // We can assume this to always be 18 decimals because the amgu token is always mln.
    .dividedBy('1e18');

  return ethers.BigNumber.from(result.toFixed(0, BigNumber.ROUND_CEIL));
}
