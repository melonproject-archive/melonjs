import { ethers } from 'ethers';
// @ts-ignore
import { Contract, TransactionWrapper } from '../Contract';

export class IUniswapExchange extends Contract {
  constructor(addressOrName: string, providerOrSigner: ethers.Signer | ethers.providers.Provider) {
    super(new.target.abi, addressOrName, providerOrSigner);
  }

  /**
   * `IUniswapExchange` contract call for the `getEthToTokenInputPrice` function.
   *
   * @contract IUniswapExchange
   * @signature function getEthToTokenInputPrice(uint256) view returns (uint256)
   */
  getEthToTokenInputPrice: (
    eth_sold: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `IUniswapExchange` contract call for the `getTokenToEthInputPrice` function.
   *
   * @contract IUniswapExchange
   * @signature function getTokenToEthInputPrice(uint256) view returns (uint256)
   */
  getTokenToEthInputPrice: (
    tokens_sold: ethers.BigNumberish,
    $$overrides?: ethers.CallOverrides,
  ) => Promise<ethers.BigNumber>;

  /**
   * `IUniswapExchange` contract transaction for `addLiquidity` function.
   *
   * @contract IUniswapExchange
   * @signature function addLiquidity(uint256,uint256,uint256) payable returns (uint256)
   */
  addLiquidity: (
    min_liquidity: ethers.BigNumberish,
    max_tokens: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `IUniswapExchange` contract transaction for `ethToTokenTransferInput` function.
   *
   * @contract IUniswapExchange
   * @signature function ethToTokenTransferInput(uint256,uint256,address) payable returns (uint256)
   */
  ethToTokenTransferInput: (
    min_tokens: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    recipient: string,
  ) => TransactionWrapper<ethers.PayableOverrides>;

  /**
   * `IUniswapExchange` contract transaction for `tokenToEthSwapInput` function.
   *
   * @contract IUniswapExchange
   * @signature function tokenToEthSwapInput(uint256,uint256,uint256) returns (uint256)
   */
  tokenToEthSwapInput: (
    tokens_sold: ethers.BigNumberish,
    min_eth: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
  ) => TransactionWrapper<ethers.Overrides>;

  /**
   * `IUniswapExchange` contract transaction for `tokenToTokenTransferInput` function.
   *
   * @contract IUniswapExchange
   * @signature function tokenToTokenTransferInput(uint256,uint256,uint256,uint256,address,address) returns (uint256)
   */
  tokenToTokenTransferInput: (
    tokens_sold: ethers.BigNumberish,
    min_tokens_bought: ethers.BigNumberish,
    min_eth_bought: ethers.BigNumberish,
    deadline: ethers.BigNumberish,
    recipient: string,
    token_addr: string,
  ) => TransactionWrapper<ethers.Overrides>;

  static abi: string[] = [
    'function addLiquidity(uint256 min_liquidity, uint256 max_tokens, uint256 deadline) payable returns (uint256)',
    'function ethToTokenTransferInput(uint256 min_tokens, uint256 deadline, address recipient) payable returns (uint256 tokens_bought)',
    'function getEthToTokenInputPrice(uint256 eth_sold) view returns (uint256 tokens_bought)',
    'function getTokenToEthInputPrice(uint256 tokens_sold) view returns (uint256 eth_bought)',
    'function tokenToEthSwapInput(uint256 tokens_sold, uint256 min_eth, uint256 deadline) returns (uint256 eth_bought)',
    'function tokenToTokenTransferInput(uint256 tokens_sold, uint256 min_tokens_bought, uint256 min_eth_bought, uint256 deadline, address recipient, address token_addr) returns (uint256 tokens_bought)',
  ];
}
