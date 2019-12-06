import BigNumber from 'bignumber.js';
import { Address } from '../../../../Address';
import { Environment } from '../../../../Environment';
import { PreminedToken } from '../../../../contracts/dependencies/token/PreminedToken';
import { InsufficientBalanceError } from '../Trading.errors';

export const checkSufficientBalance = async (
  environment: Environment,
  tokenAddress: Address,
  tokenQuantity: BigNumber,
  vaultAddress: Address,
) => {
  const token = new PreminedToken(environment, tokenAddress);
  const vaultTokenBalance = await token.getBalanceOf(vaultAddress);
  if (vaultTokenBalance.isLessThan(tokenQuantity)) {
    throw new InsufficientBalanceError(tokenQuantity, vaultTokenBalance);
  }
};
