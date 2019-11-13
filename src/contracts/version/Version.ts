import { VersionAbi } from '../../abis/Version.abi';
import { Contract } from '../../Contract';
import { FundFactory, FundFactoryDeployArguments } from '../factory/FundFactory';
import { applyMixins } from '../../utils/applyMixins';
import { Address } from '../../Address';
import { Environment } from '../../Environment';

export interface VersionDeployArgumtents extends FundFactoryDeployArguments {
  postDeployOwner: Address;
}

export class Version extends Contract {
  public static readonly abi = VersionAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, args: VersionDeployArgumtents) {
    return super.createDeployment<Version>(environment, bytecode, from, [
      args.accountingFactory,
      args.feeManagerFactory,
      args.participationFactory,
      args.sharesFactory,
      args.tradingFactory,
      args.vaultFactory,
      args.policyManagerFactory,
      args.version,
      args.postDeployOwner,
    ]);
  }

  /**
   * Shut down a fund
   *
   * @param block The block number to execute the call on.
   */
  public shutDownFund(from: Address, hub: Address) {
    return this.createTransaction({ from, method: 'shutDownFund', methodArgs: [hub] });
  }
}

export interface Version extends FundFactory {}
applyMixins(Version, [FundFactory]);
