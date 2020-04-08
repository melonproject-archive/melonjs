import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class MockAccounting extends Contract {
  public readonly ethers: MockAccountingEthersContract;

  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `MockAccounting` contract call for the `DEFAULT_SHARE_PRICE` function.
   *
   * @contract MockAccounting
   * @signature DEFAULT_SHARE_PRICE()
   * @method function DEFAULT_SHARE_PRICE() view returns (uint256)
   */
  DEFAULT_SHARE_PRICE: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `DENOMINATION_ASSET` function.
   *
   * @contract MockAccounting
   * @signature DENOMINATION_ASSET()
   * @method function DENOMINATION_ASSET() view returns (address)
   */
  DENOMINATION_ASSET: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockAccounting` contract call for the `assetGav` function.
   *
   * @contract MockAccounting
   * @signature assetGav(address)
   * @method function assetGav(address) view returns (uint256)
   */
  assetGav: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `authority` function.
   *
   * @contract MockAccounting
   * @signature authority()
   * @method function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockAccounting` contract call for the `calcAssetGav` function.
   *
   * @contract MockAccounting
   * @signature calcAssetGav(address)
   * @method function calcAssetGav(address) view returns (uint256)
   */
  calcAssetGav: (_a: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `calcFundMetrics` function.
   *
   * @contract MockAccounting
   * @signature calcFundMetrics()
   * @method function calcFundMetrics() view returns (uint256, uint256, uint256, uint256, uint256)
   */
  calcFundMetrics: ($$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `MockAccounting` contract call for the `calcGav` function.
   *
   * @contract MockAccounting
   * @signature calcGav()
   * @method function calcGav() view returns (uint256)
   */
  calcGav: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `calcNav` function.
   *
   * @contract MockAccounting
   * @signature calcNav()
   * @method function calcNav() view returns (uint256)
   */
  calcNav: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `fundFactory` function.
   *
   * @contract MockAccounting
   * @signature fundFactory()
   * @method function fundFactory() view returns (address)
   */
  fundFactory: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockAccounting` contract call for the `gav` function.
   *
   * @contract MockAccounting
   * @signature gav()
   * @method function gav() view returns (uint256)
   */
  gav: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `getFundHoldings` function.
   *
   * @contract MockAccounting
   * @signature getFundHoldings()
   * @method function getFundHoldings() view returns (uint256[], address[])
   */
  getFundHoldings: ($$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `MockAccounting` contract call for the `getHub` function.
   *
   * @contract MockAccounting
   * @signature getHub()
   * @method function getHub() view returns (address)
   */
  getHub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockAccounting` contract call for the `getOwnedAssetsLength` function.
   *
   * @contract MockAccounting
   * @signature getOwnedAssetsLength()
   * @method function getOwnedAssetsLength() view returns (uint256)
   */
  getOwnedAssetsLength: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `getRoutes` function.
   *
   * @contract MockAccounting
   * @signature getRoutes()
   * @method function getRoutes() view returns (tuple(address,address,address,address,address,address,address))
   */
  getRoutes: (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    accounting: string;
    feeManager: string;
    policyManager: string;
    shares: string;
    vault: string;
    registry: string;
    fundFactory: string;
  }>;

  /**
   * `MockAccounting` contract call for the `held` function.
   *
   * @contract MockAccounting
   * @signature held(address)
   * @method function held(address) view returns (uint256)
   */
  held: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `initialized` function.
   *
   * @contract MockAccounting
   * @signature initialized()
   * @method function initialized() view returns (bool)
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockAccounting` contract call for the `mockValuePerShare` function.
   *
   * @contract MockAccounting
   * @signature mockValuePerShare()
   * @method function mockValuePerShare() view returns (uint256)
   */
  mockValuePerShare: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `nav` function.
   *
   * @contract MockAccounting
   * @signature nav()
   * @method function nav() view returns (uint256)
   */
  nav: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `ownedAssets` function.
   *
   * @contract MockAccounting
   * @signature ownedAssets(uint256)
   * @method function ownedAssets(uint256) view returns (address)
   */
  ownedAssets: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockAccounting` contract call for the `owner` function.
   *
   * @contract MockAccounting
   * @signature owner()
   * @method function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockAccounting` contract call for the `priceSource` function.
   *
   * @contract MockAccounting
   * @signature priceSource()
   * @method function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockAccounting` contract call for the `unclaimedFees` function.
   *
   * @contract MockAccounting
   * @signature unclaimedFees()
   * @method function unclaimedFees() view returns (uint256)
   */
  unclaimedFees: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `valuePerShare` function.
   *
   * @contract MockAccounting
   * @signature valuePerShare(uint256,uint256)
   * @method function valuePerShare(uint256,uint256) view returns (uint256)
   */
  valuePerShare: (
    totalValue: ethers.BigNumberish,
    numShares: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract transaction for `initialize` function.
   *
   * @contract MockAccounting
   * @signature initialize(address[7])
   * @method function initialize(address[7])
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockAccounting` contract transaction for `setAssetGAV` function.
   *
   * @contract MockAccounting
   * @signature setAssetGAV(address,uint256)
   * @method function setAssetGAV(address,uint256)
   */
  setAssetGAV: (_asset: string, _amt: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockAccounting` contract transaction for `setAuthority` function.
   *
   * @contract MockAccounting
   * @signature setAuthority(address)
   * @method function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockAccounting` contract transaction for `setFundHoldings` function.
   *
   * @contract MockAccounting
   * @signature setFundHoldings(uint256[],address[])
   * @method function setFundHoldings(uint256[],address[])
   */
  setFundHoldings: (_amounts: ethers.BigNumber[], _assets: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockAccounting` contract transaction for `setGav` function.
   *
   * @contract MockAccounting
   * @signature setGav(uint256)
   * @method function setGav(uint256)
   */
  setGav: (_gav: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockAccounting` contract transaction for `setNav` function.
   *
   * @contract MockAccounting
   * @signature setNav(uint256)
   * @method function setNav(uint256)
   */
  setNav: (_nav: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockAccounting` contract transaction for `setOwnedAssets` function.
   *
   * @contract MockAccounting
   * @signature setOwnedAssets(address[])
   * @method function setOwnedAssets(address[])
   */
  setOwnedAssets: (_assets: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockAccounting` contract transaction for `setOwner` function.
   *
   * @contract MockAccounting
   * @signature setOwner(address)
   * @method function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _hub, address _denominationAsset, address _registry)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function DEFAULT_SHARE_PRICE() view returns (uint256)',
    'function DENOMINATION_ASSET() view returns (address)',
    'function assetGav(address) view returns (uint256)',
    'function authority() view returns (address)',
    'function calcAssetGav(address _a) view returns (uint256)',
    'function calcFundMetrics() view returns (uint256, uint256, uint256, uint256, uint256)',
    'function calcGav() view returns (uint256)',
    'function calcNav() view returns (uint256)',
    'function fundFactory() view returns (address)',
    'function gav() view returns (uint256)',
    'function getFundHoldings() view returns (uint256[], address[])',
    'function getHub() view returns (address)',
    'function getOwnedAssetsLength() view returns (uint256)',
    'function getRoutes() view returns (tuple(address accounting, address feeManager, address policyManager, address shares, address vault, address registry, address fundFactory))',
    'function held(address) view returns (uint256)',
    'function initialize(address[7] _spokes)',
    'function initialized() view returns (bool)',
    'function mockValuePerShare() view returns (uint256)',
    'function nav() view returns (uint256)',
    'function ownedAssets(uint256) view returns (address)',
    'function owner() view returns (address)',
    'function priceSource() view returns (address)',
    'function setAssetGAV(address _asset, uint256 _amt)',
    'function setAuthority(address authority_)',
    'function setFundHoldings(uint256[] _amounts, address[] _assets)',
    'function setGav(uint256 _gav)',
    'function setNav(uint256 _nav)',
    'function setOwnedAssets(address[] _assets)',
    'function setOwner(address owner_)',
    'function unclaimedFees() view returns (uint256)',
    'function valuePerShare(uint256 totalValue, uint256 numShares) view returns (uint256)',
  ];
}

export interface MockAccountingEthersContract extends ethers.Contract {
  'DEFAULT_SHARE_PRICE()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'DENOMINATION_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'assetGav(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'calcAssetGav(address)': (_a: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'calcFundMetrics()': ($$overrides?: ethers.CallOverrides) => Promise<any[]>;
  'calcGav()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'calcNav()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'gav()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getFundHoldings()': ($$overrides?: ethers.CallOverrides) => Promise<any[]>;
  'getHub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'getOwnedAssetsLength()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'getRoutes()': (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    accounting: string;
    feeManager: string;
    policyManager: string;
    shares: string;
    vault: string;
    registry: string;
    fundFactory: string;
  }>;
  'held(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'initialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  'mockValuePerShare()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'nav()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'ownedAssets(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
  'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
  'unclaimedFees()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
  'valuePerShare(uint256,uint256)': (
    totalValue: ethers.BigNumberish,
    numShares: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;
  'initialize(address[7])': (
    _spokes: [string, string, string, string, string, string, string],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setAssetGAV(address,uint256)': (
    _asset: string,
    _amt: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setAuthority(address)': (
    authority_: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setFundHoldings(uint256[],address[])': (
    _amounts: ethers.BigNumber[],
    _assets: string[],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setGav(uint256)': (
    _gav: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setNav(uint256)': (
    _nav: ethers.BigNumberish,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setOwnedAssets(address[])': (
    _assets: string[],
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;
  'setOwner(address)': (
    owner_: string,
    $$overrides?: ethers.Overrides,
  ) => Promise<ethers.providers.TransactionResponse>;

  functions: {
    'DEFAULT_SHARE_PRICE()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'DENOMINATION_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'assetGav(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'calcAssetGav(address)': (_a: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'calcFundMetrics()': ($$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'calcGav()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'calcNav()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'gav()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getFundHoldings()': ($$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getHub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getOwnedAssetsLength()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getRoutes()': (
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      accounting: string;
      feeManager: string;
      policyManager: string;
      shares: string;
      vault: string;
      registry: string;
      fundFactory: string;
    }>;
    'held(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'initialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'mockValuePerShare()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'nav()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'ownedAssets(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'unclaimedFees()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'valuePerShare(uint256,uint256)': (
      totalValue: ethers.BigNumberish,
      numShares: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setAssetGAV(address,uint256)': (
      _asset: string,
      _amt: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setFundHoldings(uint256[],address[])': (
      _amounts: ethers.BigNumber[],
      _assets: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setGav(uint256)': (
      _gav: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setNav(uint256)': (
      _nav: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setOwnedAssets(address[])': (
      _assets: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
    'setOwner(address)': (
      owner_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.providers.TransactionResponse>;
  };

  callStatic: {
    'DEFAULT_SHARE_PRICE()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'DENOMINATION_ASSET()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'assetGav(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'authority()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'calcAssetGav(address)': (_a: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'calcFundMetrics()': ($$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'calcGav()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'calcNav()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'fundFactory()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'gav()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getFundHoldings()': ($$overrides?: ethers.CallOverrides) => Promise<any[]>;
    'getHub()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'getOwnedAssetsLength()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'getRoutes()': (
      $$overrides?: ethers.CallOverrides,
    ) => Promise<{
      accounting: string;
      feeManager: string;
      policyManager: string;
      shares: string;
      vault: string;
      registry: string;
      fundFactory: string;
    }>;
    'held(address)': ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'initialized()': ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
    'mockValuePerShare()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'nav()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'ownedAssets(uint256)': ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;
    'owner()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'priceSource()': ($$overrides?: ethers.CallOverrides) => Promise<string>;
    'unclaimedFees()': ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;
    'valuePerShare(uint256,uint256)': (
      totalValue: ethers.BigNumberish,
      numShares: ethers.BigNumberish,
      $$overrides?: ethers.CallOverrides,
    ) => Promise<ethers.BigNumber>;
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setAssetGAV(address,uint256)': (
      _asset: string,
      _amt: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<void>;
    'setFundHoldings(uint256[],address[])': (
      _amounts: ethers.BigNumber[],
      _assets: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<void>;
    'setGav(uint256)': (_gav: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
    'setNav(uint256)': (_nav: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwnedAssets(address[])': (_assets: string[], $$overrides?: ethers.Overrides) => Promise<void>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<void>;
  };

  estimateGas: {
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setAssetGAV(address,uint256)': (
      _asset: string,
      _amt: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setAuthority(address)': (authority_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setFundHoldings(uint256[],address[])': (
      _amounts: ethers.BigNumber[],
      _assets: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.BigNumber>;
    'setGav(uint256)': (_gav: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setNav(uint256)': (_nav: ethers.BigNumberish, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwnedAssets(address[])': (_assets: string[], $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.BigNumber>;
  };

  populateTransaction: {
    'initialize(address[7])': (
      _spokes: [string, string, string, string, string, string, string],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setAssetGAV(address,uint256)': (
      _asset: string,
      _amt: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setAuthority(address)': (
      authority_: string,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setFundHoldings(uint256[],address[])': (
      _amounts: ethers.BigNumber[],
      _assets: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setGav(uint256)': (
      _gav: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setNav(uint256)': (
      _nav: ethers.BigNumberish,
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwnedAssets(address[])': (
      _assets: string[],
      $$overrides?: ethers.Overrides,
    ) => Promise<ethers.UnsignedTransaction>;
    'setOwner(address)': (owner_: string, $$overrides?: ethers.Overrides) => Promise<ethers.UnsignedTransaction>;
  };
}
