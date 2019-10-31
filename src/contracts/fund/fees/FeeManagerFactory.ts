import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { applyMixins } from '../../../utils/applyMixins';
import { Factory } from '../../factory/Factory';
import { FeeManagerFactoryAbi } from '../../../abis/FeeManagerFactory.abi';
import { FeeManagerDeployArguments } from './FeeManager';

export class FeeManagerFactory extends Contract {
  public static readonly abi = FeeManagerFactoryAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<FeeManagerFactory>(environment, bytecode, from);
  }

  /**
   * Creates a FeeManager instance.
   *
   * @param from The sender address.
   * @param args The FeeManager deploy arguments as [[FeeManagerDeployArguments]].
   */
  public createInstance(from: Address, args: FeeManagerDeployArguments) {
    return this.createTransaction('createInstance', from, [
      args.hub,
      args.denominationAsset,
      args.fees,
      args.rates.map(fee => fee.toString()),
      args.periods,
      args.registry,
    ]);
  }
}

export interface FeeManagerFactory extends Factory {}
applyMixins(FeeManagerFactory, [Factory]);
