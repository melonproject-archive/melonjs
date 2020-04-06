import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IZeroExV2 extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IZeroExV2` contract call for the `ZRX_ASSET_DATA` function.
   *
   * @contract IZeroExV2
   * @signature function ZRX_ASSET_DATA() view returns (bytes)
   */
  ZRX_ASSET_DATA: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IZeroExV2` contract call for the `cancelled` function.
   *
   * @contract IZeroExV2
   * @signature function cancelled(bytes32) view returns (bool)
   */
  cancelled: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IZeroExV2` contract call for the `filled` function.
   *
   * @contract IZeroExV2
   * @signature function filled(bytes32) view returns (uint256)
   */
  filled: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IZeroExV2` contract call for the `getAssetProxy` function.
   *
   * @contract IZeroExV2
   * @signature function getAssetProxy(bytes4) view returns (address)
   */
  getAssetProxy: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IZeroExV2` contract call for the `getOrderInfo` function.
   *
   * @contract IZeroExV2
   * @signature function getOrderInfo(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes)) view returns (tuple(uint8,bytes32,uint256))
   */
  getOrderInfo: (
    $$0: {
      makerAddress: string;
      takerAddress: string;
      feeRecipientAddress: string;
      senderAddress: string;
      makerAssetAmount: ethers.BigNumberish;
      takerAssetAmount: ethers.BigNumberish;
      makerFee: ethers.BigNumberish;
      takerFee: ethers.BigNumberish;
      expirationTimeSeconds: ethers.BigNumberish;
      salt: ethers.BigNumberish;
      makerAssetData: string | ethers.utils.BytesLike;
      takerAssetData: string | ethers.utils.BytesLike;
    },
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ orderStatus: number; orderHash: string; orderTakerAssetFilledAmount: ethers.BigNumber }>;

  /**
   * `IZeroExV2` contract call for the `isValidSignature` function.
   *
   * @contract IZeroExV2
   * @signature function isValidSignature(bytes32,address,bytes) view returns (bool)
   */
  isValidSignature: (
    $$0: string | ethers.utils.BytesLike,
    $$1: string,
    $$2: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `IZeroExV2` contract transaction for `cancelOrder` function.
   *
   * @contract IZeroExV2
   * @signature function cancelOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes))
   */
  cancelOrder: ($$0: {
    makerAddress: string;
    takerAddress: string;
    feeRecipientAddress: string;
    senderAddress: string;
    makerAssetAmount: ethers.BigNumberish;
    takerAssetAmount: ethers.BigNumberish;
    makerFee: ethers.BigNumberish;
    takerFee: ethers.BigNumberish;
    expirationTimeSeconds: ethers.BigNumberish;
    salt: ethers.BigNumberish;
    makerAssetData: string | ethers.utils.BytesLike;
    takerAssetData: string | ethers.utils.BytesLike;
  }) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IZeroExV2` contract transaction for `fillOrder` function.
   *
   * @contract IZeroExV2
   * @signature function fillOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes),uint256,bytes) returns (tuple(uint256,uint256,uint256,uint256))
   */
  fillOrder: (
    $$0: {
      makerAddress: string;
      takerAddress: string;
      feeRecipientAddress: string;
      senderAddress: string;
      makerAssetAmount: ethers.BigNumberish;
      takerAssetAmount: ethers.BigNumberish;
      makerFee: ethers.BigNumberish;
      takerFee: ethers.BigNumberish;
      expirationTimeSeconds: ethers.BigNumberish;
      salt: ethers.BigNumberish;
      makerAssetData: string | ethers.utils.BytesLike;
      takerAssetData: string | ethers.utils.BytesLike;
    },
    $$1: ethers.BigNumberish,
    $$2: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IZeroExV2` contract transaction for `preSign` function.
   *
   * @contract IZeroExV2
   * @signature function preSign(bytes32,address,bytes)
   */
  preSign: (
    $$0: string | ethers.utils.BytesLike,
    $$1: string,
    $$2: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function ZRX_ASSET_DATA() view returns (bytes)',
    'function cancelOrder(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData))',
    'function cancelled(bytes32) view returns (bool)',
    'function fillOrder(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData), uint256, bytes) returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid))',
    'function filled(bytes32) view returns (uint256)',
    'function getAssetProxy(bytes4) view returns (address)',
    'function getOrderInfo(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData)) view returns (tuple(uint8 orderStatus, bytes32 orderHash, uint256 orderTakerAssetFilledAmount))',
    'function isValidSignature(bytes32, address, bytes) view returns (bool)',
    'function preSign(bytes32, address, bytes)',
  ];
}
