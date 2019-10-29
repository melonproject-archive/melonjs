import { Contract as EthContract } from 'web3-eth-contract';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { toBigNumber } from '../utils/toBigNumber';
import { Deployment } from '../Transaction';
import { FeeAbi } from '../abis/Fee.abi';

export class Fee extends Contract {
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(environment, typeof address === 'string' ? new environment.client.Contract(FeeAbi, address) : address);
  }

  public static deploy(environment: Environment, bytecode: string, from: Address) {
    const contract = new environment.client.Contract(FeeAbi);
    const transaction = contract.deploy({
      data: bytecode,
    });

    return new Deployment(transaction, from, contract => new this(environment, contract));
  }

  /**
   * Gets the management fee rate.
   *
   * @param block The block number to execute the call on.
   */
  public async identifier(block?: number) {
    const result = await this.makeCall<number>('identifier', undefined, block);
    return toBigNumber(result);
  }
}
