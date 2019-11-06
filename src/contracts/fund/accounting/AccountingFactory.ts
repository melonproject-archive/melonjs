import { Contract } from '../../../Contract';
import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { applyMixins } from '../../../utils/applyMixins';
import { AccountingFactoryAbi } from '../../../abis/AccountingFactory.abi';
import { Factory } from '../../factory/Factory';
import { AccountingDeployArguments } from './Accounting';

export class AccountingFactory extends Contract {
  public static readonly abi = AccountingFactoryAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<AccountingFactory>(environment, bytecode, from);
  }

  /**
   * Creates an Accounting instance.
   *
   * @param from The sender address.
   * @param args The accounting deploy arguments as [[AccountingDeployArguments]].
   */
  public createInstance(from: Address, args: AccountingDeployArguments) {
    const methodArgs = [args.hub, args.denominationAsset, args.nativeAsset, args.defaultAssets];
    return this.createTransaction({ from, method: 'createInstance', methodArgs });
  }
}

export interface AccountingFactory extends Factory {}
applyMixins(AccountingFactory, [Factory]);
