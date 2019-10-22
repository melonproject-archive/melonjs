import BigNumber from 'bignumber.js';
import { fromWei } from 'web3-utils';
import { WETHAbi } from '../abis/WETH';
import { Address } from '../Address';
import { TokenDefinition } from '../Deployment';
import { Environment } from '../Environment';
import { AbstractToken } from './AbstractToken';

export class Weth extends AbstractToken {
  public static forDeployment(environment: Environment) {
    return new this(environment, this.findDefinition(environment, 'WETH'));
  }

  constructor(environment: Environment, public readonly token: TokenDefinition) {
    super(environment, new environment.client.Contract(WETHAbi, token.address));
  }

  public async balanceOf(who: Address, block?: number) {
    const result = await this.makeCall('balanceOf', [who], block);
    return new BigNumber(fromWei(`${result}`));
  }
}
