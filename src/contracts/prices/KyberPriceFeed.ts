import { Contract } from '../../Contract';
import { KyberPriceFeedAbi } from '../../abis/KyberPriceFeed.abi';
import { applyMixins } from '../../utils/applyMixins';
import { IPriceSource } from './IPriceSource';
import { Address } from '../../Address';
import { Registry } from '../version/Registry';
import { sameAddress } from '../../utils/sameAddress';
import { ValidationError } from '../../errors/ValidationError';

export class OnlyRegistryOwnerOrUpdaterCanCallError extends ValidationError {
  public readonly name = 'OnlyRegistryOwnerOrUpdaterCanCallError';

  constructor(message: string = 'Only registry owner or updater can call') {
    super(message);
  }
}

export class KyberPriceFeed extends Contract {
  public static readonly abi = KyberPriceFeedAbi;

  /**
   * Update the price feed.
   *
   * @param from The address of the sender.
   */
  public update(from: Address) {
    const validate = async () => {
      const registry = new Registry(this.environment, await this.getRegistry());

      if (!(sameAddress(from, await registry.getOwner()) || sameAddress(from, await this.getUpdater()))) {
        throw new OnlyRegistryOwnerOrUpdaterCanCallError();
      }
    };

    return this.createTransaction({ from, method: 'update', validate });
  }

  /**
   * Gets the address of the kyber network proxy contract.
   *
   * @param block The block number to execute the call on.
   */
  public getKyberNetworkProxy(block?: number) {
    return this.makeCall<Address>('KYBER_NETWORK_PROXY', undefined, block);
  }

  /**
   * Gets the max spread value.
   *
   * @param block The block number to execute the call on.
   */
  public getMaxSpread(block?: number) {
    return this.makeCall<Address>('MAX_SPREAD', undefined, block);
  }

  /**
   * Gets the address of the registry contract.
   *
   * @param block The block number to execute the call on.
   */
  public getRegistry(block?: number) {
    return this.makeCall<Address>('REGISTRY', undefined, block);
  }

  /**
   * Gets the address of the updater.
   *
   * @param block The block number to execute the call on.
   */
  public getUpdater(block?: number) {
    return this.makeCall<Address>('UPDATER', undefined, block);
  }
}

export interface KyberPriceFeed extends IPriceSource {}
applyMixins(KyberPriceFeed, [IPriceSource]);
