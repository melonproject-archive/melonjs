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
  public createInstance(from: Address, deployArgs: FeeManagerDeployArguments) {
    const args = [
      deployArgs.hub,
      deployArgs.denominationAsset,
      deployArgs.fees,
      deployArgs.rates.map(fee => fee.toFixed(0)),
      deployArgs.periods,
      deployArgs.registry,
    ];

    return this.createTransaction({ from, method: 'createInstance', args });
  }
}

export interface FeeManagerFactory extends Factory {}
applyMixins(FeeManagerFactory, [Factory]);
