import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { applyMixins } from '../../../utils/applyMixins';
import { Factory } from '../../factory/Factory';
import { SharesFactoryAbi } from '../../../abis/SharesFactory.abi';

export class SharesFactory extends Contract {
  public static readonly abi = SharesFactoryAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<SharesFactory>(environment, bytecode, from);
  }

  /**
   * Creates a Shares instance.
   *
   * @param from The sender address.
   * @param hub The hub address.
   */
  public createInstance(from: Address, hub: Address) {
    return this.createTransaction('createInstance', from, [hub]);
  }
}

export interface SharesFactory extends Factory {}
applyMixins(SharesFactory, [Factory]);
