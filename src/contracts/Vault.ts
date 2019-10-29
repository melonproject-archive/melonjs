import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Contract as EthContract } from 'web3-eth-contract';
import { Address } from '../Address';
import { Spoke } from './Spoke';
import { applyMixins } from '../utils/applyMixins';
import { VaultAbi } from '../abis/Vault.abi';
import { Deployment } from '../Transaction';

export interface VaultDeployArguments {
  hub: Address;
}

export class Vault extends Contract {
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(environment, typeof address === 'string' ? new environment.client.Contract(VaultAbi, address) : address);
  }

  public static deploy(environment: Environment, data: string, from: Address, args: VaultDeployArguments) {
    const contract = new environment.client.Contract(VaultAbi);
    const transaction = contract.deploy({
      data,
      arguments: [args.hub],
    });

    return new Deployment(transaction, from, contract => new this(environment, contract));
  }
}

export interface Vault extends Spoke {}
applyMixins(Vault, [Spoke]);
