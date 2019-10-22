import BigNumber from 'bignumber.js';
import { fromWei } from 'web3-utils';
import { ERC20Abi } from '../abis/ERC20';
import { sameAddress } from '../utils/sameAddress';
import { Address } from '../Address';
import { TokenDefinition } from '../Deployment';
import { Contract } from '../Contract';
import { Environment } from '../Environment';

export class Token extends Contract {
  public static forDeployment(environment: Environment, which: string) {
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

    return new this(environment, token);
  }

  constructor(environment: Environment, public readonly token: TokenDefinition) {
    super(environment, new environment.client.Contract(ERC20Abi as any, token.address));
  }

  public async balanceOf(who: Address, block?: number) {
    const result = await this.makeCall('balanceOf', [who], block);
    return new BigNumber(fromWei(`${result}`));
  }
}
