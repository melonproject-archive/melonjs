import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class MaxConcentration extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `MaxConcentration` contract call for the `MAKE_ORDER` function.
   *
   * @contract MaxConcentration
   * @signature function MAKE_ORDER() view returns (bytes4)
   */
  MAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MaxConcentration` contract call for the `TAKE_ORDER` function.
   *
   * @contract MaxConcentration
   * @signature function TAKE_ORDER() view returns (bytes4)
   */
  TAKE_ORDER: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MaxConcentration` contract call for the `identifier` function.
   *
   * @contract MaxConcentration
   * @signature function identifier() pure returns (string)
   */
  identifier: ($$overrides?: ethers.CallOverrides) => Promise<string>;

  /**
   * `MaxConcentration` contract call for the `maxConcentration` function.
   *
   * @contract MaxConcentration
   * @signature function maxConcentration() view returns (uint256)
   */
  maxConcentration: ($$overrides?: ethers.CallOverrides) => Promise<ethers.BigNumber>;

  /**
   * `MaxConcentration` contract call for the `position` function.
   *
   * @contract MaxConcentration
   * @signature function position() pure returns (uint8)
   */
  position: ($$overrides?: ethers.CallOverrides) => Promise<number>;

  /**
   * `MaxConcentration` contract transaction for `rule` function.
   *
   * @contract MaxConcentration
   * @signature function rule(bytes4,address[5],uint256[3],bytes32) returns (bool)
   */
  rule: (
    sig: string | ethers.utils.BytesLike,
    addresses: [string, string, string, string, string],
    values: [ethers.BigNumber, ethers.BigNumber, ethers.BigNumber],
    identifier: string | ethers.utils.BytesLike,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'constructor(uint256 _maxConcentration)',
    'function MAKE_ORDER() view returns (bytes4)',
    'function TAKE_ORDER() view returns (bytes4)',
    'function identifier() pure returns (string)',
    'function maxConcentration() view returns (uint256)',
    'function position() pure returns (uint8)',
    'function rule(bytes4 sig, address[5] addresses, uint256[3] values, bytes32 identifier) returns (bool)',
  ];
}
