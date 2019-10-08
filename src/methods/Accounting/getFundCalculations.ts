import BigNumber from 'bignumber.js';
import { makeCall, BasicCallConfig } from '../../utils/makeCall';
import { fromWei } from 'web3-utils';

export interface FundCalculations {
  sharePrice: BigNumber;
  gav: BigNumber;
  nav: BigNumber;
  feesInDenominationAsset: BigNumber;
  feesInShares: BigNumber;
  gavPerShareNetManagementFee: BigNumber;
}

export const getFundCalculations = async (config: BasicCallConfig, accountingAddress: string) => {
  const result = await makeCall<FundCalculations>({
    ...config,
    address: accountingAddress,
    contract: 'Accounting',
    method: 'performCalculations',
  });

  return {
    sharePrice: new BigNumber(fromWei(`${result.sharePrice}`)),
    gav: new BigNumber(fromWei(`${result.gav}`)),
    nav: new BigNumber(fromWei(`${result.nav}`)),
    feesInDenominationAsset: new BigNumber(fromWei(`${result.feesInDenominationAsset}`)),
    feesInShares: new BigNumber(fromWei(`${result.feesInShares}`)),
    gavPerShareNetManagementFee: new BigNumber(fromWei(`${result.gavPerShareNetManagementFee}`)),
  } as FundCalculations;
};
