import { ethers } from 'ethers';
import { Contract, TransactionWrapper } from '../../../..';

/** Dumb custody component */
export class VaultContract extends Contract {
  /**
   * The contract abis.
   */
  public static readonly abi: string[] = [
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

  /**
   * Constructs a new contract instance.
   *
   * @param addressOrName The address or name of the contract.
   * @param signerOrProvider The ethers.js signer or provider instance to use.
   */
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * ```solidity
   * function authority() view returns (address)
   * ```
   *
   */
  authority: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function engine() view returns (address)
   * ```
   *
   */
  engine: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function hub() view returns (address)
   * ```
   *
   */
  hub: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function initialized() view returns (bool)
   * ```
   *
   */
  initialized: ($$overrides?: ethers.CallOverrides) => Promise<boolean>;
  /**
   * ```solidity
   * function mlnToken() view returns (address)
   * ```
   *
   */
  mlnToken: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function owner() view returns (address)
   * ```
   *
   */
  owner: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function priceSource() view returns (address)
   * ```
   *
   */
  priceSource: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function registry() view returns (address)
   * ```
   *
   */
  registry: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function routes() view returns (address, address, address, address, address, address, address, address, address, address, address)
   * ```
   *
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
   * ```solidity
   * function version() view returns (address)
   * ```
   *
   */
  version: ($$overrides?: ethers.CallOverrides) => Promise<string>;
  /**
   * ```solidity
   * function initialize(address[11])
   * ```
   *
   */
  initialize: (
    _spokes: [string, string, string, string, string, string, string, string, string, string, string],
  ) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setAuthority(address)
   * ```
   *
   */
  setAuthority: (authority_: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function setOwner(address)
   * ```
   *
   */
  setOwner: (owner_: string) => TransactionWrapper<ethers.Overrides>;
  /**
   * ```solidity
   * function withdraw(address,uint256)
   * ```
   *
   */
  withdraw: (token: string, amount: ethers.BigNumberish) => TransactionWrapper<ethers.Overrides>;
}
