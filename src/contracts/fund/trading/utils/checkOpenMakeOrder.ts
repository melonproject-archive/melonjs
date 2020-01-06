import { Address } from '../../../../Address';
import { Trading } from '../Trading';
import { AssetAlreadyHasOpenMakeOrderError } from '../Trading.errors';

export const checkOpenMakeOrder = async (trading: Trading, asset: Address, block?: number) => {
  const isInOpenMakeOrder = await trading.checkOpenMakeOrder(asset, block);
  if (isInOpenMakeOrder) {
    throw new AssetAlreadyHasOpenMakeOrderError(asset);
  }
};
