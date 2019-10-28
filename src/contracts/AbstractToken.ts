import BigNumber from 'bignumber.js';
import { sameAddress } from '../utils/sameAddress';
import { Address } from '../Address';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { fromWei } from 'web3-utils';

export interface TokenInfo {
  readonly address: Address;
  readonly name?: string;
  readonly symbol: string;
  readonly decimals: number;
  readonly reserveMin?: number;
}

export abstract class AbstractToken extends Contract {
  public static findDefinition(environment: Environment, which: Address | string) {
    const deployment = environment.deployment.thirdPartyContracts.tokens;
    const address = which.startsWith('0x');
    const token = deployment.find(token => {
      if (token.symbol === which) {
        return true;
      }

      if (address && sameAddress(which, token.address)) {
        return true;
      }

      return false;
    });

    if (!token) {
      throw new Error(`Could not instantiate token class for unknown token ${token}.`);
    }

    return token as TokenInfo;
  }

  public async getBalanceOf(who: Address, block?: number) {
    const result = await this.makeCall<string>('balanceOf', [who], block);
    return new BigNumber(fromWei(`${result}`));
  }
}
