import BigNumber from 'bignumber.js';
import { Address } from '../../../../Address';
import { Environment } from '../../../../Environment';
import { InsufficientBalanceError } from '../Trading.errors';
import { ERC20WithFields } from '../../../dependencies/token/ERC20WithFields';

export const checkSufficientBalance = async (
  environment: Environment,
  tokenAddress: Address,
  tokenQuantity: BigNumber,
  vaultAddress: Address,
) => {
  const token = new ERC20WithFields(environment, tokenAddress);
  const vaultTokenBalance = await token.getBalanceOf(vaultAddress);
  if (vaultTokenBalance.isLessThan(tokenQuantity)) {
    throw new InsufficientBalanceError(tokenQuantity, vaultTokenBalance);
  }
};
