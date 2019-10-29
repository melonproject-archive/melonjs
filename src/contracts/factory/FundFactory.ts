import { Contract as EthContract } from 'web3-eth-contract';
import { Contract } from '../../Contract';
import { Environment } from '../../Environment';
import { Address } from '../../Address';
import { FundFactoryAbi } from '../../abis/FundFactory.abi';
import { Deployment } from '../../Transaction';
import { Factory } from './Factory';
import { applyMixins } from '../../utils/applyMixins';

export interface FundFactoryDeployArguments {
  accountingFactory: Address;
  feeManagerFactory: Address;
  participationFactory: Address;
  sharesFactory: Address;
  tradingFactory: Address;
  vaultFactory: Address;
  policyManagerFactory: Address;
  version: Address;
}

export class FundFactory extends Contract {
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(
      environment,
      typeof address === 'string' ? new environment.client.Contract(FundFactoryAbi, address) : address,
    );
  }

  public static deploy(environment: Environment, data: string, from: Address, args: FundFactoryDeployArguments) {
    const contract = new environment.client.Contract(FundFactoryAbi);
    const transaction = contract.deploy({
      data,
      arguments: [
        args.accountingFactory,
        args.feeManagerFactory,
        args.participationFactory,
        args.sharesFactory,
        args.tradingFactory,
        args.vaultFactory,
        args.policyManagerFactory,
        args.version,
      ],
    });

    return new Deployment(transaction, from, contract => new this(environment, contract));
  }
}

export interface FundFactory extends Factory {}
applyMixins(FundFactory, [Factory]);
