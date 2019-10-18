import BigNumber from 'bignumber.js';
import { fromWei } from 'web3-utils';
import { Address, TokenDefinition } from '..';
import { sameAddress } from '../utils/sameAddress';
import { Contract } from './Contract';
import { Environment } from './Environment';

export class Token extends Contract {
  public static forSymbol(environment: Environment, symbol: string) {
    const tokens = environment.deployment.thirdPartyContracts.tokens;
    const token = tokens.find(token => {
      if (token.symbol === symbol) {
        return true;
      }

      if (symbol.startsWith('0x') && sameAddress(symbol, token.address)) {
        return true;
      }

      return false;
    });

    if (!token) {
      throw new Error(`Unknown token ${token}.`);
    }

    return new Token(environment, token.address, token);
  }

  constructor(environment: Environment, address: string, definition?: TokenDefinition) {
    super(environment, '!ERC20', address);
  }

  public async balanceOf(who: Address, block?: BigNumber) {
    const result = await this.makeCall('balanceOf', [who], block);
    return new BigNumber(fromWei(`${result}`));
  }
}
