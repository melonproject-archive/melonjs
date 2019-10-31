import { Contract } from '../../Contract';
import { Address } from '../../Address';
import { Environment } from '../../Environment';
import { ExchangeAdapterAbi } from '../../abis/ExchangeAdapter.abi';

export class ExchangeAdapter extends Contract {
  public static readonly abi = ExchangeAdapterAbi;

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    return super.createDeployment<ExchangeAdapter>(environment, bytecode, from);
  }
}
