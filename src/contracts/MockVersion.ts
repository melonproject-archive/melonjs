import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class MockVersion extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `MockVersion` contract call for the `amguPrice` function.
   *
   * @contract MockVersion
   * @signature function amguPrice() view returns (uint256)
   */
  amguPrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockVersion` contract call for the `getAmguPrice` function.
   *
   * @contract MockVersion
   * @signature function getAmguPrice() view returns (uint256)
   */
  getAmguPrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockVersion` contract call for the `getShutDownStatus` function.
   *
   * @contract MockVersion
   * @signature function getShutDownStatus() view returns (bool)
   */
  getShutDownStatus: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockVersion` contract call for the `isShutDown` function.
   *
   * @contract MockVersion
   * @signature function isShutDown() view returns (bool)
   */
  isShutDown: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockVersion` contract transaction for `securityShutDown` function.
   *
   * @contract MockVersion
   * @signature function securityShutDown()
   */
  securityShutDown: () => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockVersion` contract transaction for `setAmguPrice` function.
   *
   * @contract MockVersion
   * @signature function setAmguPrice(uint256)
   */
  setAmguPrice: (_price: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockVersion` contract transaction for `shutDownFund` function.
   *
   * @contract MockVersion
   * @signature function shutDownFund(address)
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
