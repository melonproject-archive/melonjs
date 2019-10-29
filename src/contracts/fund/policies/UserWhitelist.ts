import { Contract as EthContract } from 'web3-eth-contract';

import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { UserWhitelistAbi } from '../../../abis/UserWhitelist.abi';
import { applyMixins } from '../../../utils/applyMixins';
import { Policy } from './Policy';
import { Deployment } from '../../../Transaction';

export class UserWhitelist extends Contract {
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(
      environment,
      typeof address === 'string' ? new environment.client.Contract(UserWhitelistAbi, address) : address,
    );
  }

  public static deploy(environment: Environment, data: string, from: Address, preApproved: Address[]) {
    const contract = new environment.client.Contract(UserWhitelistAbi);
    const transaction = contract.deploy({
      data,
      arguments: [preApproved],
    });

    return new Deployment(transaction, from, contract => new this(environment, contract));
  }
  /**
   * Checks if an address is whitelisted
   *
   * @param address The address to check
   * @param block The block number to execute the call on.
   */
  public async isWhitelisted(address: Address, block?: number) {
    return await this.makeCall<boolean>('whitelisted', [address], block);
  }
}

export interface UserWhitelist extends Policy {}
applyMixins(UserWhitelist, [Policy]);
