import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class ITrading extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `ITrading` contract call for the `getOpenMakeOrdersAgainstAsset` function.
   *
   * @contract ITrading
   * @signature function getOpenMakeOrdersAgainstAsset(address) view returns (uint256)
   */
  getOpenMakeOrdersAgainstAsset: (_asset: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `ITrading` contract transaction for `addOpenMakeOrder` function.
   *
   * @contract ITrading
   * @signature function addOpenMakeOrder(address,address,address,address,uint256,uint256)
   */
  addOpenMakeOrder: (
    ofExchange: string,
    ofSellAsset: string,
    ofBuyAsset: string,
    ofFeeAsset: string,
    orderId: ethers.BigNumberish,
    expiryTime: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ITrading` contract transaction for `callOnExchange` function.
   *
   * @contract ITrading
   * @signature function callOnExchange(uint256,string,address[8],uint256[8],bytes[4],bytes32,bytes)
   */
  callOnExchange: (
    exchangeIndex: ethers.BigNumberish,
    methodSignature: string,
    orderAddresses: [string, string, string, string, string, string, string, string],
    orderValues: [
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
      ethers.BigNumber,
    ],
    orderData: string | ethers.utils.BytesLike,
    identifier: string | ethers.utils.BytesLike,
    signature: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ITrading` contract transaction for `removeOpenMakeOrder` function.
   *
   * @contract ITrading
   * @signature function removeOpenMakeOrder(address,address)
   */
  removeOpenMakeOrder: (ofExchange: string, ofSellAsset: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `ITrading` contract transaction for `updateAndGetQuantityBeingTraded` function.
   *
   * @contract ITrading
   * @signature function updateAndGetQuantityBeingTraded(address) returns (uint256)
   */
  updateAndGetQuantityBeingTraded: (_asset: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function addOpenMakeOrder(address ofExchange, address ofSellAsset, address ofBuyAsset, address ofFeeAsset, uint256 orderId, uint256 expiryTime)',
    'function callOnExchange(uint256 exchangeIndex, string methodSignature, address[8] orderAddresses, uint256[8] orderValues, bytes[4] orderData, bytes32 identifier, bytes signature)',
    'function getOpenMakeOrdersAgainstAsset(address _asset) view returns (uint256)',
    'function removeOpenMakeOrder(address ofExchange, address ofSellAsset)',
    'function updateAndGetQuantityBeingTraded(address _asset) returns (uint256)',
  ];
}
