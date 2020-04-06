import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class AmguConsumer extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `AmguConsumer` contract call for the `engine` function.
   *
   * @contract AmguConsumer
   * @signature function engine() view returns (address)
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `AmguConsumer` contract call for the `mlnToken` function.
   *
   * @contract AmguConsumer
   * @signature function mlnToken() view returns (address)
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `AmguConsumer` contract call for the `priceSource` function.
   *
   * @contract AmguConsumer
   * @signature function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `AmguConsumer` contract call for the `registry` function.
   *
   * @contract AmguConsumer
   * @signature function registry() view returns (address)
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  static abi: string[] = [
    'event AmguPaid(address indexed payer, uint256 totalAmguPaidInEth, uint256 amguChargableGas, uint256 incentivePaid)',
    'function engine() view returns (address)',
    'function mlnToken() view returns (address)',
    'function priceSource() view returns (address)',
    'function registry() view returns (address)',
  ];
}
