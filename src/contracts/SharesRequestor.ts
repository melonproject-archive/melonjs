import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class SharesRequestor extends Contract {
  public readonly ethers: SharesRequestorEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `SharesRequestor` contract call for the `REGISTRY` function.
   *
   * @contract SharesRequestor
   * @signature REGISTRY()
   * @method function REGISTRY() view returns (address)
   */
  REGISTRY: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `SharesRequestor` contract call for the `getFundsRequestedSet` function.
   *
   * @contract SharesRequestor
   * @signature getFundsRequestedSet(address)
   * @method function getFundsRequestedSet(address) view returns (address[])
   */
  getFundsRequestedSet: (_requestOwner: string, $$overrides?: ethers.CallOverrides) => Promise<string[]>;

  /**
   * `SharesRequestor` contract call for the `ownerToRequestByFund` function.
   *
   * @contract SharesRequestor
   * @signature ownerToRequestByFund(address,address)
   * @method function ownerToRequestByFund(address,address) view returns (address, uint256, uint256, uint256, uint256)
   */
  ownerToRequestByFund: (
    $$0: string,
    $$1: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    investmentAsset: string;
    maxInvestmentAmount: ethers.BigNumber;
    sharesQuantity: ethers.BigNumber;
    timestamp: ethers.BigNumber;
    incentiveFee: ethers.BigNumber;
  }>;

  /**
   * `SharesRequestor` contract call for the `requestExists` function.
   *
   * @contract SharesRequestor
   * @signature requestExists(address,address)
   * @method function requestExists(address,address) view returns (bool)
   */
  requestExists: (_requestOwner: string, _hub: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `SharesRequestor` contract call for the `requestHasExpired` function.
   *
   * @contract SharesRequestor
   * @signature requestHasExpired(address,address)
   * @method function requestHasExpired(address,address) view returns (bool)
   */
  requestHasExpired: (_requestOwner: string, _hub: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `SharesRequestor` contract call for the `requestIsExecutable` function.
   *
   * @contract SharesRequestor
   * @signature requestIsExecutable(address,address)
   * @method function requestIsExecutable(address,address) view returns (bool, string)
   */
  requestIsExecutable: (
    _requestOwner: string,
    _hub: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ pass_: boolean; reason_: string }>;

  /**
   * `SharesRequestor` contract transaction for `cancelRequest` function.
   *
   * @contract SharesRequestor
   * @signature cancelRequest(address)
   * @method function cancelRequest(address)
   */
  cancelRequest: (_hub: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `SharesRequestor` contract transaction for `cancelRequestFor` function.
   *
   * @contract SharesRequestor
   * @signature cancelRequestFor(address,address)
   * @method function cancelRequestFor(address,address)
   */
  cancelRequestFor: (_requestOwner: string, _hub: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `SharesRequestor` contract transaction for `executeRequestFor` function.
   *
   * @contract SharesRequestor
   * @signature executeRequestFor(address,address)
   * @method function executeRequestFor(address,address) payable
   */
  executeRequestFor: (_requestOwner: string, _hub: string) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `SharesRequestor` contract transaction for `requestShares` function.
   *
   * @contract SharesRequestor
   * @signature requestShares(address,address,uint256,uint256)
   * @method function requestShares(address,address,uint256,uint256) payable returns (bool)
   */
  requestShares: (
    _hub: string,
    _investmentAsset: string,
    _maxInvestmentAmount: ethers.BigNumberish,
    _sharesQuantity: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  static abi: string[] = [
    'constructor(address _registry)',
    'event AmguPaid(address indexed payer, uint256 totalAmguPaidInEth, uint256 amguChargableGas)',
    'event IncentivePaid(address indexed payer, uint256 incentiveAmount)',
    'event RequestCancelled(address caller, address requestOwner, address indexed hub, address investmentAsset, uint256 maxInvestmentAmount, uint256 sharesQuantity, uint256 createdTimestamp, uint256 incentiveFee)',
    'event RequestCreated(address requestOwner, address indexed hub, address investmentAsset, uint256 maxInvestmentAmount, uint256 sharesQuantity, uint256 incentiveFee)',
    'event RequestExecuted(address caller, address requestOwner, address indexed hub, address investmentAsset, uint256 investmentAmountFilled, uint256 sharesQuantity, uint256 createdTimestamp, uint256 incentiveFee)',
    'function REGISTRY() view returns (address)',
    'function cancelRequest(address _hub)',
    'function cancelRequestFor(address _requestOwner, address _hub)',
    'function executeRequestFor(address _requestOwner, address _hub) payable',
    'function getFundsRequestedSet(address _requestOwner) view returns (address[])',
    'function ownerToRequestByFund(address, address) view returns (address investmentAsset, uint256 maxInvestmentAmount, uint256 sharesQuantity, uint256 timestamp, uint256 incentiveFee)',
    'function requestExists(address _requestOwner, address _hub) view returns (bool)',
    'function requestHasExpired(address _requestOwner, address _hub) view returns (bool)',
    'function requestIsExecutable(address _requestOwner, address _hub) view returns (bool pass_, string reason_)',
    'function requestShares(address _hub, address _investmentAsset, uint256 _maxInvestmentAmount, uint256 _sharesQuantity) payable returns (bool)',
  ];
}

export interface SharesRequestorEthersContract extends ethers.Contract {
  'REGISTRY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getFundsRequestedSet(address)': (_requestOwner: string, $$overrides?: ethers.CallOverrides) => Promise<string[]>;
  'ownerToRequestByFund(address,address)': (
    $$0: string,
    $$1: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    investmentAsset: string;
    maxInvestmentAmount: ethers.BigNumber;
    sharesQuantity: ethers.BigNumber;
    timestamp: ethers.BigNumber;
    incentiveFee: ethers.BigNumber;
  }>;
  'requestExists(address,address)': (
    _requestOwner: string,
    _hub: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'requestHasExpired(address,address)': (
    _requestOwner: string,
    _hub: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<boolean>;
  'requestIsExecutable(address,address)': (
    _requestOwner: string,
    _hub: string,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{ pass_: boolean; reason_: string }>;
  'cancelRequest(address)': (_hub: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
  'cancelRequestFor(address,address)': (
    _requestOwner: string,
    _hub: string,
    $$overrides?: ethers.Overrides,
  ) => ethers.providers.TransactionResponse;
  'executeRequestFor(address,address)': (
    _requestOwner: string,
    _hub: string,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;
  'requestShares(address,address,uint256,uint256)': (
    _hub: string,
    _investmentAsset: string,
    _maxInvestmentAmount: ethers.BigNumberish,
    _sharesQuantity: ethers.BigNumberish,
    $$overrides?: ethers.PayableOverrides,
  ) => ethers.providers.TransactionResponse;

  functions: {
    'REGISTRY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getFundsRequestedSet(address)': (_requestOwner: string, $$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'ownerToRequestByFund(address,address)': (
      $$0: string,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      investmentAsset: string;
      maxInvestmentAmount: ethers.BigNumber;
      sharesQuantity: ethers.BigNumber;
      timestamp: ethers.BigNumber;
      incentiveFee: ethers.BigNumber;
    }>;
    'requestExists(address,address)': (
      _requestOwner: string,
      _hub: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'requestHasExpired(address,address)': (
      _requestOwner: string,
      _hub: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'requestIsExecutable(address,address)': (
      _requestOwner: string,
      _hub: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ pass_: boolean; reason_: string }>;
    'cancelRequest(address)': (_hub: string, $$overrides?: ethers.Overrides) => ethers.providers.TransactionResponse;
    'cancelRequestFor(address,address)': (
      _requestOwner: string,
      _hub: string,
      $$overrides?: ethers.Overrides,
    ) => ethers.providers.TransactionResponse;
    'executeRequestFor(address,address)': (
      _requestOwner: string,
      _hub: string,
      $$overrides?: ethers.PayableOverrides,
    ) => ethers.providers.TransactionResponse;
    'requestShares(address,address,uint256,uint256)': (
      _hub: string,
      _investmentAsset: string,
      _maxInvestmentAmount: ethers.BigNumberish,
      _sharesQuantity: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => ethers.providers.TransactionResponse;
  };

  callStatic: {
    'REGISTRY()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getFundsRequestedSet(address)': (_requestOwner: string, $$overrides?: ethers.CallOverrides) => Promise<string[]>;
    'ownerToRequestByFund(address,address)': (
      $$0: string,
      $$1: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      investmentAsset: string;
      maxInvestmentAmount: ethers.BigNumber;
      sharesQuantity: ethers.BigNumber;
      timestamp: ethers.BigNumber;
      incentiveFee: ethers.BigNumber;
    }>;
    'requestExists(address,address)': (
      _requestOwner: string,
      _hub: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'requestHasExpired(address,address)': (
      _requestOwner: string,
      _hub: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<boolean>;
    'requestIsExecutable(address,address)': (
      _requestOwner: string,
      _hub: string,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{ pass_: boolean; reason_: string }>;
    'cancelRequest(address)': (_hub: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'cancelRequestFor(address,address)': (
      _requestOwner: string,
      _hub: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'executeRequestFor(address,address)': (
      _requestOwner: string,
      _hub: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<void>;
    'requestShares(address,address,uint256,uint256)': (
      _hub: string,
      _investmentAsset: string,
      _maxInvestmentAmount: ethers.BigNumberish,
      _sharesQuantity: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<boolean>;
  };

  estimateGas: {
    'cancelRequest(address)': (_hub: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'cancelRequestFor(address,address)': (
      _requestOwner: string,
      _hub: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'executeRequestFor(address,address)': (
      _requestOwner: string,
      _hub: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
    'requestShares(address,address,uint256,uint256)': (
      _hub: string,
      _investmentAsset: string,
      _maxInvestmentAmount: ethers.BigNumberish,
      _sharesQuantity: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'cancelRequest(address)': (_hub: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
    'cancelRequestFor(address,address)': (
      _requestOwner: string,
      _hub: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'executeRequestFor(address,address)': (
      _requestOwner: string,
      _hub: string,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'requestShares(address,address,uint256,uint256)': (
      _hub: string,
      _investmentAsset: string,
      _maxInvestmentAmount: ethers.BigNumberish,
      _sharesQuantity: ethers.BigNumberish,
      $$overrides?: ethers.PayableOverrides,
    ) => Promise<ethers.UnsignedTransaction>;
  };
}
