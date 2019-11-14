import { VersionAbi } from '../../abis/Version.abi';
import { Contract } from '../../Contract';
import { FundFactory, FundFactoryDeployArguments } from '../factory/FundFactory';
import { applyMixins } from '../../utils/applyMixins';
import { Address } from '../../Address';
import { Environment } from '../../Environment';
import { sameAddress } from '../../utils/sameAddress';
import { ValidationError } from '../../errors/ValidationError';

export interface VersionDeployArguments extends Omit<FundFactoryDeployArguments, 'version'> {
  registry: Address;
  postDeployOwner: Address;
}

export class OnlyManagerCanShutDownFundError extends ValidationError {
  public name = 'OnlyManagerCanShutDownFundError';

  constructor(message: string = 'Only the manager can shutdown their fund.') {
    super(message);
  }
}

export class Version extends Contract {
  public static readonly abi = VersionAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address, args: VersionDeployArguments) {
    return super.createDeployment<Version>(environment, bytecode, from, [
      args.accountingFactory,
      args.feeManagerFactory,
      args.participationFactory,
      args.sharesFactory,
      args.tradingFactory,
      args.vaultFactory,
      args.policyManagerFactory,
      args.registry,
      args.postDeployOwner,
    ]);
  }

  /**
   * Shut down a fund
   *
   * @param from The address of the sender
   * @param hub The address of the fund hub
   * @param block The block number to execute the call on.
   */
  public shutDownFund(from: Address, hub: Address) {
    const validate = async () => {
      const managersToHubs = await this.getManagersToHubs(from);
      if (!sameAddress(managersToHubs, hub)) {
        throw new OnlyManagerCanShutDownFundError();
      }
    };

    return this.createTransaction({ from, method: 'shutDownFund', methodArgs: [hub], validate });
  }
}

export interface Version extends FundFactory {}
applyMixins(Version, [FundFactory]);
