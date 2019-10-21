import BigNumber from 'bignumber.js';
import { fromWei } from 'web3-utils';
import abi from '../contracts/Accounting.abi.json';
import { Contract } from './Contract';
import { Environment } from './Environment';

export interface FundCalculations {
  sharePrice: BigNumber;
  gav: BigNumber;
  nav: BigNumber;
  feesInDenominationAsset: BigNumber;
  feesInShares: BigNumber;
  gavPerShareNetManagementFee: BigNumber;
}

export class Accounting extends Contract {
  constructor(environment: Environment, address: string) {
    super(environment, new environment.client.Contract(abi as any, address));
  }

  public async performCalculations(block?: BigNumber) {
    const result = await this.makeCall('performCalculations', undefined, block);

    return {
      sharePrice: new BigNumber(fromWei(`${result.sharePrice}`)),
      gav: new BigNumber(fromWei(`${result.gav}`)),
      nav: new BigNumber(fromWei(`${result.nav}`)),
      feesInDenominationAsset: new BigNumber(fromWei(`${result.feesInDenominationAsset}`)),
      feesInShares: new BigNumber(fromWei(`${result.feesInShares}`)),
      gavPerShareNetManagementFee: new BigNumber(fromWei(`${result.gavPerShareNetManagementFee}`)),
    } as FundCalculations;
  }
}
