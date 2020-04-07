import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class MockInfrastructure extends Contract {
  public readonly ethers: MockInfrastructureEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `MockInfrastructure` contract call for the `amguPrice` function.
   *
   * @contract MockInfrastructure
   * @signature amguPrice()
   * @method function amguPrice() view returns (uint256)
   */
  amguPrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockInfrastructure` contract call for the `getAmguPrice` function.
   *
   * @contract MockInfrastructure
   * @signature getAmguPrice()
   * @method function getAmguPrice() view returns (uint256)
   */
  getAmguPrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockInfrastructure` contract call for the `getShutDownStatus` function.
   *
   * @contract MockInfrastructure
   * @signature getShutDownStatus()
   * @method function getShutDownStatus() view returns (bool)
   */
  getShutDownStatus: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockInfrastructure` contract call for the `isShutDown` function.
   *
   * @contract MockInfrastructure
   * @signature isShutDown()
   * @method function isShutDown() view returns (bool)
   */
  isShutDown: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockInfrastructure` contract transaction for `securityShutDown` function.
   *
   * @contract MockInfrastructure
   * @signature securityShutDown()
   * @method function securityShutDown()
   */
  securityShutDown: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockInfrastructure` contract transaction for `setAmguPrice` function.
   *
   * @contract MockInfrastructure
   * @signature setAmguPrice(uint256)
   * @method function setAmguPrice(uint256)
   */
  setAmguPrice: (_price: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockInfrastructure` contract transaction for `shutDownFund` function.
   *
   * @contract MockInfrastructure
   * @signature shutDownFund(address)
   * @method function shutDownFund(address)
   */
  shutDownFund: (_hub: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function amguPrice() view returns (uint256)',
    'function getAmguPrice() view returns (uint256)',
    'function getShutDownStatus() view returns (bool)',
    'function isShutDown() view returns (bool)',
    'function securityShutDown()',
    'function setAmguPrice(uint256 _price)',
    'function shutDownFund(address _hub)',
  ];
}

export interface MockInfrastructureEthersContract extends ethers.Contract {
  'amguPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getAmguPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getShutDownStatus()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'isShutDown()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'securityShutDown()': ($$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'setAmguPrice(uint256)': (
    _price: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'shutDownFund(address)': (_hub: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;

  callStatic: {
    'amguPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getAmguPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getShutDownStatus()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'isShutDown()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'securityShutDown()': ($$overrides?: ethers.Overrides) => Promise<void>;
    'setAmguPrice(uint256)': (_price: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
    'shutDownFund(address)': (_hub: string, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'securityShutDown()': ($$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setAmguPrice(uint256)': (_price: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'shutDownFund(address)': (_hub: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'securityShutDown()': ($$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'setAmguPrice(uint256)': (
      _price: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'shutDownFund(address)': (_hub: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
