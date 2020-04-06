import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class KyberNetworkProxyInterface extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `KyberNetworkProxyInterface` contract call for the `enabled` function.
   *
   * @contract KyberNetworkProxyInterface
   * @signature function enabled() view returns (bool)
   */
  enabled: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `KyberNetworkProxyInterface` contract call for the `maxGasPrice` function.
   *
   * @contract KyberNetworkProxyInterface
   * @signature function maxGasPrice() view returns (uint256)
   */
  maxGasPrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberNetworkProxyInterface` contract call for the `getUserCapInWei` function.
   *
   * @contract KyberNetworkProxyInterface
   * @signature function getUserCapInWei(address) view returns (uint256)
   */
  getUserCapInWei: (user: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberNetworkProxyInterface` contract call for the `getExpectedRate` function.
   *
   * @contract KyberNetworkProxyInterface
   * @signature function getExpectedRate(address,address,uint256) view returns (uint256, uint256)
   */
  getExpectedRate: (
    src: string,
    dest: string,
    srcQty: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ expectedRate: ethers.BigNumber; slippageRate: ethers.BigNumber }>;

  /**
   * `KyberNetworkProxyInterface` contract call for the `getUserCapInTokenWei` function.
   *
   * @contract KyberNetworkProxyInterface
   * @signature function getUserCapInTokenWei(address,address) view returns (uint256)
   */
  getUserCapInTokenWei: (user: string, token: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberNetworkProxyInterface` contract call for the `info` function.
   *
   * @contract KyberNetworkProxyInterface
   * @signature function info(bytes32) view returns (uint256)
   */
  info: (id: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `KyberNetworkProxyInterface` contract transaction for `tradeWithHint` function.
   *
   * @contract KyberNetworkProxyInterface
   * @signature function tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes) payable returns (uint256)
   */
  tradeWithHint: (
    src: string,
    srcAmount: ethers.BigNumberish,
    dest: string,
    destAddress: string,
    maxDestAmount: ethers.BigNumberish,
    minConversionRate: ethers.BigNumberish,
    walletId: string,
    hint: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  static abi: string[] = [
    'function enabled() view returns (bool)',
    'function tradeWithHint(address src, uint256 srcAmount, address dest, address destAddress, uint256 maxDestAmount, uint256 minConversionRate, address walletId, bytes hint) payable returns (uint256)',
    'function maxGasPrice() view returns (uint256)',
    'function getUserCapInWei(address user) view returns (uint256)',
    'function getExpectedRate(address src, address dest, uint256 srcQty) view returns (uint256 expectedRate, uint256 slippageRate)',
    'function getUserCapInTokenWei(address user, address token) view returns (uint256)',
    'function info(bytes32 id) view returns (uint256)',
  ];
}
