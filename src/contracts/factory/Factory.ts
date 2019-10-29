import { Contract as EthContract } from 'web3-eth-contract';
import { Contract } from '../../Contract';
import { Environment } from '../../Environment';
import { Address } from '../../Address';
import { FactoryAbi } from '../../abis/Factory.abi';

export class Factory extends Contract {
  constructor(environment: Environment, contract: EthContract);
  constructor(environment: Environment, address: Address);
  constructor(environment: Environment, address: any) {
    super(environment, typeof address === 'string' ? new environment.client.Contract(FactoryAbi, address) : address);
  }

  /**
   * Checks if an address is an instance of the factory
   *
   * @param address The address of the contract to check
   * @param block The block number to execute the call on.
   */
  public async isInstance(address: Address, block?: number) {
    const result = await this.makeCall<boolean>('isInstance', [address], block);
    return result;
  }
}
