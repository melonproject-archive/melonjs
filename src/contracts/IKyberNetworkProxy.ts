import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IKyberNetworkProxy extends Contract {
  public readonly ethers: IKyberNetworkProxyEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IKyberNetworkProxy` contract call for the `enabled` function.
   *
   * @contract IKyberNetworkProxy
   * @signature enabled()
   * @method function enabled() view returns (bool)
   */
  enabled: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IKyberNetworkProxy` contract call for the `getExpectedRate` function.
   *
   * @contract IKyberNetworkProxy
   * @signature getExpectedRate(address,address,uint256)
   * @method function getExpectedRate(address,address,uint256) view returns (uint256, uint256)
   */
  getExpectedRate: (
    $$0: string,
    $$1: string,
    $$2: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<any[]>;

  /**
   * `IKyberNetworkProxy` contract call for the `getUserCapInTokenWei` function.
   *
   * @contract IKyberNetworkProxy
   * @signature getUserCapInTokenWei(address,address)
   * @method function getUserCapInTokenWei(address,address) view returns (uint256)
   */
  getUserCapInTokenWei: ($$0: string, $$1: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IKyberNetworkProxy` contract call for the `getUserCapInWei` function.
   *
   * @contract IKyberNetworkProxy
   * @signature getUserCapInWei(address)
   * @method function getUserCapInWei(address) view returns (uint256)
   */
  getUserCapInWei: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IKyberNetworkProxy` contract call for the `info` function.
   *
   * @contract IKyberNetworkProxy
   * @signature info(bytes32)
   * @method function info(bytes32) view returns (uint256)
   */
  info: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IKyberNetworkProxy` contract call for the `maxGasPrice` function.
   *
   * @contract IKyberNetworkProxy
   * @signature maxGasPrice()
   * @method function maxGasPrice() view returns (uint256)
   */
  maxGasPrice: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IKyberNetworkProxy` contract transaction for `swapEtherToToken` function.
   *
   * @contract IKyberNetworkProxy
   * @signature swapEtherToToken(address,uint256)
   * @method function swapEtherToToken(address,uint256) payable returns (uint256)
   */
  swapEtherToToken: ($$0: string, $$1: ethers.BigNumberish) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `IKyberNetworkProxy` contract transaction for `swapTokenToEther` function.
   *
   * @contract IKyberNetworkProxy
   * @signature swapTokenToEther(address,uint256,uint256)
   * @method function swapTokenToEther(address,uint256,uint256) returns (uint256)
   */
  swapTokenToEther: (
    $$0: string,
    $$1: ethers.BigNumberish,
    $$2: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IKyberNetworkProxy` contract transaction for `swapTokenToToken` function.
   *
   * @contract IKyberNetworkProxy
   * @signature swapTokenToToken(address,uint256,address,uint256)
   * @method function swapTokenToToken(address,uint256,address,uint256) returns (uint256)
   */
  swapTokenToToken: (
    $$0: string,
    $$1: ethers.BigNumberish,
    $$2: string,
    $$3: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IKyberNetworkProxy` contract transaction for `tradeWithHint` function.
   *
   * @contract IKyberNetworkProxy
   * @signature tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes)
   * @method function tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes) payable returns (uint256)
   */
  tradeWithHint: (
    $$0: string,
    $$1: ethers.BigNumberish,
    $$2: string,
    $$3: string,
    $$4: ethers.BigNumberish,
    $$5: ethers.BigNumberish,
    $$6: string,
    $$7: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  static abi: string[] = [
    'function enabled() view returns (bool)',
    'function getExpectedRate(address, address, uint256) view returns (uint256, uint256)',
    'function getUserCapInTokenWei(address, address) view returns (uint256)',
    'function getUserCapInWei(address) view returns (uint256)',
    'function info(bytes32) view returns (uint256)',
    'function maxGasPrice() view returns (uint256)',
    'function swapEtherToToken(address, uint256) payable returns (uint256)',
    'function swapTokenToEther(address, uint256, uint256) returns (uint256)',
    'function swapTokenToToken(address, uint256, address, uint256) returns (uint256)',
    'function tradeWithHint(address, uint256, address, address, uint256, uint256, address, bytes) payable returns (uint256)',
  ];
}

export interface IKyberNetworkProxyEthersContract extends ethers.Contract {
  'enabled()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'getExpectedRate(address,address,uint256)': (
    $$0: string,
    $$1: string,
    $$2: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<any[]>;
  'getUserCapInTokenWei(address,address)': (
    $$0: string,
    $$1: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getUserCapInWei(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'info(bytes32)': (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'maxGasPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'swapEtherToToken(address,uint256)': (
    $$0: string,
    $$1: ethers.BigNumberish,
    $$overrides?: ethers.PayableOverrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'swapTokenToEther(address,uint256,uint256)': (
    $$0: string,
    $$1: ethers.BigNumberish,
    $$2: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'swapTokenToToken(address,uint256,address,uint256)': (
    $$0: string,
    $$1: ethers.BigNumberish,
    $$2: string,
    $$3: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes)': (
    $$0: string,
    $$1: ethers.BigNumberish,
    $$2: string,
    $$3: string,
    $$4: ethers.BigNumberish,
    $$5: ethers.BigNumberish,
    $$6: string,
    $$7: string | ethers.utils.BytesLike,
    $$overrides?: ethers.PayableOverrides,
  ) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'enabled()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'getExpectedRate(address,address,uint256)': (
      $$0: string,
      $$1: string,
      $$2: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<any[]>;
    'getUserCapInTokenWei(address,address)': (
      $$0: string,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getUserCapInWei(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'info(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'maxGasPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'swapEtherToToken(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'swapTokenToEther(address,uint256,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$2: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'swapTokenToToken(address,uint256,address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$2: string,
      $$3: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$2: string,
      $$3: string,
      $$4: ethers.BigNumberish,
      $$5: ethers.BigNumberish,
      $$6: string,
      $$7: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'enabled()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'getExpectedRate(address,address,uint256)': (
      $$0: string,
      $$1: string,
      $$2: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<any[]>;
    'getUserCapInTokenWei(address,address)': (
      $$0: string,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getUserCapInWei(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'info(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'maxGasPrice()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'swapEtherToToken(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'swapTokenToEther(address,uint256,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$2: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'swapTokenToToken(address,uint256,address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$2: string,
      $$3: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$2: string,
      $$3: string,
      $$4: ethers.BigNumberish,
      $$5: ethers.BigNumberish,
      $$6: string,
      $$7: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
  };

  estimateGas: {
    'swapEtherToToken(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'swapTokenToEther(address,uint256,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$2: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'swapTokenToToken(address,uint256,address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$2: string,
      $$3: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$2: string,
      $$3: string,
      $$4: ethers.BigNumberish,
      $$5: ethers.BigNumberish,
      $$6: string,
      $$7: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'swapEtherToToken(address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'swapTokenToEther(address,uint256,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$2: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'swapTokenToToken(address,uint256,address,uint256)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$2: string,
      $$3: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'tradeWithHint(address,uint256,address,address,uint256,uint256,address,bytes)': (
      $$0: string,
      $$1: ethers.BigNumberish,
      $$2: string,
      $$3: string,
      $$4: ethers.BigNumberish,
      $$5: ethers.BigNumberish,
      $$6: string,
      $$7: string | ethers.utils.BytesLike,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
