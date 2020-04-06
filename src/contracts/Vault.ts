import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class Vault extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `Vault` contract call for the `authority` function.
   *
   * @contract Vault
   * @signature function authority() view returns (address)
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract call for the `engine` function.
   *
   * @contract Vault
   * @signature function engine() view returns (address)
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract call for the `hub` function.
   *
   * @contract Vault
   * @signature function hub() view returns (address)
   */
  hub: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract call for the `initialized` function.
   *
   * @contract Vault
   * @signature function initialized() view returns (bool)
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;

  /**
   * `Vault` contract call for the `mlnToken` function.
   *
   * @contract Vault
   * @signature function mlnToken() view returns (address)
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract call for the `owner` function.
   *
   * @contract Vault
   * @signature function owner() view returns (address)
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract call for the `priceSource` function.
   *
   * @contract Vault
   * @signature function priceSource() view returns (address)
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract call for the `registry` function.
   *
   * @contract Vault
   * @signature function registry() view returns (address)
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract call for the `routes` function.
   *
   * @contract Vault
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
   * `Vault` contract call for the `version` function.
   *
   * @contract Vault
   * @signature function version() view returns (address)
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `Vault` contract transaction for `initialize` function.
   *
   * @contract Vault
   * @signature function initialize(address[11])
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Vault` contract transaction for `setAuthority` function.
   *
   * @contract Vault
   * @signature function setAuthority(address)
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Vault` contract transaction for `setOwner` function.
   *
   * @contract Vault
   * @signature function setOwner(address)
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;

  /**
   * `Vault` contract transaction for `withdraw` function.
   *
   * @contract Vault
   * @signature function withdraw(address,uint256)
   */
  withdraw: (token: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(address _hub)',
    'event LogSetAuthority(address indexed authority)',
    'event LogSetOwner(address indexed owner)',
    'function authority() view returns (address)',
    'function engine() view returns (address)',
    'function hub() view returns (address)',
    'function initialize(address[11] _spokes)',
    'function initialized() view returns (bool)',
    'function mlnToken() view returns (address)',
    'function owner() view returns (address)',
    'function priceSource() view returns (address)',
    'function registry() view returns (address)',
    'function routes() view returns (address accounting, address feeManager, address participation, address policyManager, address shares, address trading, address vault, address registry, address version, address engine, address mlnToken)',
    'function setAuthority(address authority_)',
    'function setOwner(address owner_)',
    'function version() view returns (address)',
    'function withdraw(address token, uint256 amount)',
  ];
}
