import { Environment } from '../../Environment';
import { Address } from '../../Address';
import { Contract } from '../../Contract';
import { DSGuardAbi } from '../../abis/DSGuard.abi';
import { applyMixins } from '../../utils/applyMixins';
import { DSAuth } from './DSAuth';
import { DSAuthority } from './DSAuthority';

export class DSGuard extends Contract {
  public static readonly abi = DSGuardAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<DSGuard>(environment, bytecode, from);
  }
}

export interface DSGuard extends DSAuth, DSAuthority {}
applyMixins(DSGuard, [DSAuth, DSAuthority]);
