import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IZeroExV3 extends Contract {
  public readonly ethers: IZeroExV3EthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IZeroExV3` contract call for the `cancelled` function.
   *
   * @contract IZeroExV3
   * @signature cancelled(bytes32)
   * @method function cancelled(bytes32) view returns (bool)
   */
  cancelled: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `IZeroExV3` contract call for the `filled` function.
   *
   * @contract IZeroExV3
   * @signature filled(bytes32)
   * @method function filled(bytes32) view returns (uint256)
   */
  filled: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IZeroExV3` contract call for the `getAssetProxy` function.
   *
   * @contract IZeroExV3
   * @signature getAssetProxy(bytes4)
   * @method function getAssetProxy(bytes4) view returns (address)
   */
  getAssetProxy: ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IZeroExV3` contract call for the `getOrderInfo` function.
   *
   * @contract IZeroExV3
   * @signature getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))
   * @method function getOrderInfo(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes)) view returns (tuple(uint8,bytes32,uint256))
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
   * @signature isValidOrderSignature((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes)
   * @method function isValidOrderSignature(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes) view returns (bool)
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
   * @signature protocolFeeCollector()
   * @method function protocolFeeCollector() view returns (address)
   */
  protocolFeeCollector: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `IZeroExV3` contract call for the `protocolFeeMultiplier` function.
   *
   * @contract IZeroExV3
   * @signature protocolFeeMultiplier()
   * @method function protocolFeeMultiplier() view returns (uint256)
   */
  protocolFeeMultiplier: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `IZeroExV3` contract transaction for `cancelOrder` function.
   *
   * @contract IZeroExV3
   * @signature cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))
   * @method function cancelOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))
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
   * @signature fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes)
   * @method function fillOrder(tuple(address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes) payable returns (tuple(uint256,uint256,uint256,uint256,uint256))
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
   * @signature preSign(bytes32)
   * @method function preSign(bytes32)
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

export interface IZeroExV3EthersContract extends ethers.Contract {
  'cancelled(bytes32)': ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'filled(bytes32)': (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'getAssetProxy(bytes4)': (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<string>;
  'getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))': (
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
  'isValidOrderSignature((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes)': (
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
  'protocolFeeCollector()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'protocolFeeMultiplier()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))': (
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
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes)': (
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
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'preSign(bytes32)': (
    $$0: string | ethers.utils.BytesLike,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;

  functions: {
    'cancelled(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'filled(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getAssetProxy(bytes4)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<string>;
    'getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))': (
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
    'isValidOrderSignature((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes)': (
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
    'protocolFeeCollector()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'protocolFeeMultiplier()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))': (
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
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes)': (
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
      $$overrides?: ethers.PayableOverrides,
    ) => ethers.providers.TransactionResponse;
    'preSign(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'cancelled(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'filled(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'getAssetProxy(bytes4)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<string>;
    'getOrderInfo((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))': (
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
    'isValidOrderSignature((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),bytes)': (
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
    'protocolFeeCollector()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'protocolFeeMultiplier()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes)': (
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
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<{
      makerAssetFilledAmount: ethers.BigNumber;
      takerAssetFilledAmount: ethers.BigNumber;
      makerFeePaid: ethers.BigNumber;
      takerFeePaid: ethers.BigNumber;
      protocolFeePaid: ethers.BigNumber;
    }>;
    'preSign(bytes32)': ($$0: string | ethers.utils.BytesLike, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes)': (
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
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'preSign(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'cancelOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes))': (
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
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'fillOrder((address,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,bytes,bytes,bytes,bytes),uint256,bytes)': (
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
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'preSign(bytes32)': (
      $$0: string | ethers.utils.BytesLike,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
