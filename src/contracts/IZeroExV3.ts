import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IZeroExV3 extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IZeroExV3` contract call for the `cancelled` function.
   *
   * @contract IZeroExV3
   * @signature function cancelled(bytes32) view returns (bool)
   */
  cancelled: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IZeroExV3` contract call for the `filled` function.
   *
   * @contract IZeroExV3
   * @signature function filled(bytes32) view returns (uint256)
   */
  filled: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IZeroExV3` contract call for the `getAssetProxy` function.
   *
   * @contract IZeroExV3
   * @signature function getAssetProxy(bytes4) view returns (address)
   */
  getAssetProxy: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IZeroExV3` contract call for the `getOrderInfo` function.
   *
   * @contract IZeroExV3
   * @signature function getOrderInfo(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)) view returns (tuple(uint8,bytes32,uint256))
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
      makerFeeAssetData: string | ethers.utils.BytesLike;
      takerFeeAssetData: string | ethers.utils.BytesLike;
    },
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ orderStatus: number; orderHash: string; orderTakerAssetFilledAmount: ethers.BigNumber }>;

  /**
   * `IZeroExV3` contract call for the `isValidOrderSignature` function.
   *
   * @contract IZeroExV3
   * @signature function isValidOrderSignature(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes) view returns (bool)
   */
  isValidOrderSignature: (
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
      makerFeeAssetData: string | ethers.utils.BytesLike;
      takerFeeAssetData: string | ethers.utils.BytesLike;
    },
    $$1: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;

  /**
   * `IZeroExV3` contract call for the `protocolFeeCollector` function.
   *
   * @contract IZeroExV3
   * @signature function protocolFeeCollector() view returns (address)
   */
  protocolFeeCollector: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IZeroExV3` contract call for the `protocolFeeMultiplier` function.
   *
   * @contract IZeroExV3
   * @signature function protocolFeeMultiplier() view returns (uint256)
   */
  protocolFeeMultiplier: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IZeroExV3` contract transaction for `cancelOrder` function.
   *
   * @contract IZeroExV3
   * @signature function cancelOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))
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
    makerFeeAssetData: string | ethers.utils.BytesLike;
    takerFeeAssetData: string | ethers.utils.BytesLike;
  }) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IZeroExV3` contract transaction for `fillOrder` function.
   *
   * @contract IZeroExV3
   * @signature function fillOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes) payable returns (tuple(uint256,uint256,uint256,uint256,uint256))
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
      makerFeeAssetData: string | ethers.utils.BytesLike;
      takerFeeAssetData: string | ethers.utils.BytesLike;
    },
    $$1: ethers.BigNumberish,
    $$2: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `IZeroExV3` contract transaction for `preSign` function.
   *
   * @contract IZeroExV3
   * @signature function preSign(bytes32)
   */
  preSign: ($$0: string | ethers.utils.BytesLike) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function cancelOrder(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData))',
    'function cancelled(bytes32) view returns (bool)',
    'function fillOrder(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData), uint256, bytes) payable returns (tuple(uint256 makerAssetFilledAmount, uint256 takerAssetFilledAmount, uint256 makerFeePaid, uint256 takerFeePaid, uint256 protocolFeePaid))',
    'function filled(bytes32) view returns (uint256)',
    'function getAssetProxy(bytes4) view returns (address)',
    'function getOrderInfo(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData)) view returns (tuple(uint8 orderStatus, bytes32 orderHash, uint256 orderTakerAssetFilledAmount))',
    'function isValidOrderSignature(tuple(address makerAddress, address takerAddress, address feeRecipientAddress, address senderAddress, uint256 makerAssetAmount, uint256 takerAssetAmount, uint256 makerFee, uint256 takerFee, uint256 expirationTimeSeconds, uint256 salt, bytes makerAssetData, bytes takerAssetData, bytes makerFeeAssetData, bytes takerFeeAssetData), bytes) view returns (bool)',
    'function preSign(bytes32)',
    'function protocolFeeCollector() view returns (address)',
    'function protocolFeeMultiplier() view returns (uint256)',
  ];
}
