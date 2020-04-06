import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class MockAccounting extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `MockAccounting` contract call for the `DEFAULT_SHARE_PRICE` function.
   *
   * @contract MockAccounting
   * @signature function DEFAULT_SHARE_PRICE() view returns (uint256)
   */
  DEFAULT_SHARE_PRICE: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `DENOMINATION_ASSET` function.
   *
   * @contract MockAccounting
   * @signature function DENOMINATION_ASSET() view returns (address)
   */
  DENOMINATION_ASSET: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockAccounting` contract call for the `NATIVE_ASSET` function.
   *
   * @contract MockAccounting
   * @signature function NATIVE_ASSET() view returns (address)
   */
  NATIVE_ASSET: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockAccounting` contract call for the `SHARES_DECIMALS` function.
   *
   * @contract MockAccounting
   * @signature function SHARES_DECIMALS() view returns (uint256)
   */
  SHARES_DECIMALS: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `assetGav` function.
   *
   * @contract MockAccounting
   * @signature function assetGav(address) view returns (uint256)
   */
  assetGav: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `authority` function.
   *
   * @contract MockAccounting
   * @signature function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockAccounting` contract call for the `calcAssetGAV` function.
   *
   * @contract MockAccounting
   * @signature function calcAssetGAV(address) view returns (uint256)
   */
  calcAssetGAV: (_a: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `calcGav` function.
   *
   * @contract MockAccounting
   * @signature function calcGav() view returns (uint256)
   */
  calcGav: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `calcNav` function.
   *
   * @contract MockAccounting
   * @signature function calcNav() view returns (uint256)
   */
  calcNav: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `engine` function.
   *
   * @contract MockAccounting
   * @signature function engine() view returns (address)
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockAccounting` contract call for the `gav` function.
   *
   * @contract MockAccounting
   * @signature function gav() view returns (uint256)
   */
  gav: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `getFundHoldings` function.
   *
   * @contract MockAccounting
   * @signature function getFundHoldings() view returns (uint256[], address[])
   */
  getFundHoldings: ($$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `MockAccounting` contract call for the `getOwnedAssetsLength` function.
   *
   * @contract MockAccounting
   * @signature function getOwnedAssetsLength() view returns (uint256)
   */
  getOwnedAssetsLength: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `held` function.
   *
   * @contract MockAccounting
   * @signature function held(address) view returns (uint256)
   */
  held: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `hub` function.
   *
   * @contract MockAccounting
   * @signature function hub() view returns (address)
   */
  hub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockAccounting` contract call for the `initialized` function.
   *
   * @contract MockAccounting
   * @signature function initialized() view returns (bool)
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockAccounting` contract call for the `isInAssetList` function.
   *
   * @contract MockAccounting
   * @signature function isInAssetList(address) view returns (bool)
   */
  isInAssetList: ($$0: string, $$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `MockAccounting` contract call for the `mlnToken` function.
   *
   * @contract MockAccounting
   * @signature function mlnToken() view returns (address)
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockAccounting` contract call for the `mockValuePerShare` function.
   *
   * @contract MockAccounting
   * @signature function mockValuePerShare() view returns (uint256)
   */
  mockValuePerShare: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `nav` function.
   *
   * @contract MockAccounting
   * @signature function nav() view returns (uint256)
   */
  nav: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `ownedAssets` function.
   *
   * @contract MockAccounting
   * @signature function ownedAssets(uint256) view returns (address)
   */
  ownedAssets: ($$0: ethers.BigNumberish, $$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockAccounting` contract call for the `owner` function.
   *
   * @contract MockAccounting
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockAccounting` contract call for the `performCalculations` function.
   *
   * @contract MockAccounting
   * @signature function performCalculations() view returns (uint256, uint256, uint256, uint256, uint256)
   */
  performCalculations: ($$overrides?: ethers.CallOverrides) => Promise<any[]>;

  /**
   * `MockAccounting` contract call for the `priceSource` function.
   *
   * @contract MockAccounting
   * @signature function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockAccounting` contract call for the `registry` function.
   *
   * @contract MockAccounting
   * @signature function registry() view returns (address)
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockAccounting` contract call for the `routes` function.
   *
   * @contract MockAccounting
   * @signature function routes() view returns (address, address, address, address, address, address, address, address, address, address, address)
   */
  routes: (
    $$overrides?: ethers.CallOverrides,
  ) => Promise<{
    accounting: string;
    feeManager: string;
    participation: string;
    policyManager: string;
    shares: string;
    trading: string;
    vault: string;
    registry: string;
    version: string;
    engine: string;
    mlnToken: string;
  }>;

  /**
   * `MockAccounting` contract call for the `unclaimedFees` function.
   *
   * @contract MockAccounting
   * @signature function unclaimedFees() view returns (uint256)
   */
  unclaimedFees: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `valuePerShare` function.
   *
   * @contract MockAccounting
   * @signature function valuePerShare(uint256,uint256) view returns (uint256)
   */
  valuePerShare: (
    totalValue: ethers.BigNumberish,
    numShares: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `MockAccounting` contract call for the `version` function.
   *
   * @contract MockAccounting
   * @signature function version() view returns (address)
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MockAccounting` contract transaction for `initialize` function.
   *
   * @contract MockAccounting
   * @signature function initialize(address[11])
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockAccounting` contract transaction for `setAssetGAV` function.
   *
   * @contract MockAccounting
   * @signature function setAssetGAV(address,uint256)
   */
  setAssetGAV: (_asset: string, _amt: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockAccounting` contract transaction for `setAuthority` function.
   *
   * @contract MockAccounting
   * @signature function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockAccounting` contract transaction for `setFundHoldings` function.
   *
   * @contract MockAccounting
   * @signature function setFundHoldings(uint256[],address[])
   */
  setFundHoldings: (_amounts: ethers.BigNumber[], _assets: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockAccounting` contract transaction for `setGav` function.
   *
   * @contract MockAccounting
   * @signature function setGav(uint256)
   */
  setGav: (_gav: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockAccounting` contract transaction for `setNav` function.
   *
   * @contract MockAccounting
   * @signature function setNav(uint256)
   */
  setNav: (_nav: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockAccounting` contract transaction for `setOwnedAssets` function.
   *
   * @contract MockAccounting
   * @signature function setOwnedAssets(address[])
   */
  setOwnedAssets: (_assets: string[]) => TransactionWrapper<ethers.Overrides>;

  /**
   * `MockAccounting` contract transaction for `setOwner` function.
   *
   * @contract MockAccounting
   * @signature function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _hub, address _denominationAsset, address _nativeAsset)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function DEFAULT_SHARE_PRICE() view returns (uint256)',
    'function DENOMINATION_ASSET() view returns (address)',
    'function NATIVE_ASSET() view returns (address)',
    'function SHARES_DECIMALS() view returns (uint256)',
    'function assetGav(address) view returns (uint256)',
    'function authority() view returns (address)',
    'function calcAssetGAV(address _a) view returns (uint256)',
    'function calcGav() view returns (uint256)',
    'function calcNav() view returns (uint256)',
    'function engine() view returns (address)',
    'function gav() view returns (uint256)',
    'function getFundHoldings() view returns (uint256[], address[])',
    'function getOwnedAssetsLength() view returns (uint256)',
    'function held(address) view returns (uint256)',
    'function hub() view returns (address)',
    'function initialize(address[11] _spokes)',
    'function initialized() view returns (bool)',
    'function isInAssetList(address) view returns (bool)',
    'function mlnToken() view returns (address)',
    'function mockValuePerShare() view returns (uint256)',
    'function nav() view returns (uint256)',
    'function ownedAssets(uint256) view returns (address)',
    'function owner() view returns (address)',
    'function performCalculations() view returns (uint256, uint256, uint256, uint256, uint256)',
    'function priceSource() view returns (address)',
    'function registry() view returns (address)',
    'function routes() view returns (address accounting, address feeManager, address participation, address policyManager, address shares, address trading, address vault, address registry, address version, address engine, address mlnToken)',
    'function setAssetGAV(address _asset, uint256 _amt)',
    'function setAuthority(address authority_)',
    'function setFundHoldings(uint256[] _amounts, address[] _assets)',
    'function setGav(uint256 _gav)',
    'function setNav(uint256 _nav)',
    'function setOwnedAssets(address[] _assets)',
    'function setOwner(address owner_)',
    'function unclaimedFees() view returns (uint256)',
    'function valuePerShare(uint256 totalValue, uint256 numShares) view returns (uint256)',
    'function version() view returns (address)',
  ];
}
