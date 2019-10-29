import { Address } from '../Address';
import { Contract } from '../Contract';
import { toBigNumber } from '../utils/toBigNumber';

export abstract class AbstractToken extends Contract {
  public async getBalanceOf(who: Address, block?: number) {
    const result = await this.makeCall<string>('balanceOf', [who], block);
    return toBigNumber(result);
  }
}
