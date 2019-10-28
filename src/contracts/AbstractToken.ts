import BigNumber from 'bignumber.js';
import { fromWei } from 'web3-utils';
import { Address } from '../Address';
import { Contract } from '../Contract';

export abstract class AbstractToken extends Contract {
  public async getBalanceOf(who: Address, block?: number) {
    const result = await this.makeCall<string>('balanceOf', [who], block);
    return new BigNumber(fromWei(`${result}`));
  }
}
