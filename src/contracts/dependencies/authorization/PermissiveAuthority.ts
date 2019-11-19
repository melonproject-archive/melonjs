import { Environment } from '../../../Environment';
import { Address } from '../../../Address';
import { Contract } from '../../../Contract';
import { PermissiveAuthorityAbi } from '../../../abis/PermissiveAuthority.abi';
import { applyMixins } from '../../../utils/applyMixins';
import { DSAuthority } from './DSAuthority';

export class PermissiveAuthority extends Contract {
  public static readonly abi = PermissiveAuthorityAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<PermissiveAuthority>(environment, bytecode, from);
  }
}

export interface PermissiveAuthority extends DSAuthority {}
applyMixins(PermissiveAuthority, [DSAuthority]);
