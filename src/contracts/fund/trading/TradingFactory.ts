import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { applyMixins } from '../../../utils/applyMixins';
import { Factory } from '../../factory/Factory';
import { TradingFactoryAbi } from '../../../abis/TradingFactory.abi';
import { TradingDeployArguments } from './Trading';

export class TradingFactory extends Contract {
  public static readonly abi = TradingFactoryAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<TradingFactory>(environment, bytecode, from);
  }

  /**
   * Creates a Trading instance.
   *
   * @param from The sender address.
   * @param args The trading deploy arguments as [[TradingDeployArguments]].
   */
  public createInstance(from: Address, args: TradingDeployArguments) {
    return this.createTransaction('createInstance', from, [args.hub, args.exchanges, args.adapters, args.registry]);
  }
}

export interface TradingFactory extends Factory {}
applyMixins(TradingFactory, [Factory]);
