import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class AmguConsumer extends Contract {
  public readonly ethers: AmguConsumerEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `AmguConsumer` contract call for the `REGISTRY` function.
   *
   * @contract AmguConsumer
   * @signature REGISTRY()
   * @method function REGISTRY() view returns (address)
   */
  REGISTRY: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  static abi: string[] = [
    'constructor(address _registry)',
    'event AmguPaid(address indexed payer, uint256 totalAmguPaidInEth, uint256 amguChargableGas)',
    'event IncentivePaid(address indexed payer, uint256 incentiveAmount)',
    'function REGISTRY() view returns (address)',
  ];
}

export interface AmguConsumerEthersContract extends ethers.Contract {
  'REGISTRY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;

  functions: {
    'REGISTRY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  };

  callStatic: {
    'REGISTRY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  };

  estimateGas: {};

  populateTransaction: {};
}
