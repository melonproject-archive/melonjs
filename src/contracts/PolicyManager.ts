import { Contract as EthContract } from 'web3-eth-contract';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { PolicyManagerAbi } from '../abis/PolicyManager.abi';
import { Spoke } from './Spoke';
import { applyMixins } from '../utils/applyMixins';
import { Deployment } from '../Transaction';

export type Policies = {
  pre: Address[];
  post: Address[];
};

export class PolicyManager extends Contract {
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(
      environment,
      typeof address === 'string' ? new environment.client.Contract(PolicyManagerAbi, address) : address,
    );
  }

  public static deploy(environment: Environment, data: string, from: Address, hub: Address) {
    const contract = new environment.client.Contract(PolicyManagerAbi);
    const transaction = contract.deploy({
      data,
      arguments: [hub],
    });

    return new Deployment(transaction, from, contract => new this(environment, contract));
  }

  /**
   * Gets the policies by their signature.
   *
   * @param block The block number to execute the call on.
   */
  public async getPoliciesBySignature(signature: string, block?: number) {
    const result = await this.makeCall<{ '0': string[]; '1': string[] }>('getPoliciesBySig', [signature], block);
    const policies = {
      pre: result['0'],
      post: result['1'],
    };
    return policies as Policies;
  }
}

export interface PolicyManager extends Spoke {}
applyMixins(PolicyManager, [Spoke]);
