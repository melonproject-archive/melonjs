import { Address } from '../../../../Address';
import { Trading } from '../Trading';
import { CooldownForMakerAssetNotReachedError } from '../Trading.errors';

export const checkCooldownReached = async (trading: Trading, asset: Address, block?: number) => {
  const makerAssetCooldown = await trading.getMakerAssetCooldown(asset, block);
  const now = new Date();

  if (now >= makerAssetCooldown) {
    throw new CooldownForMakerAssetNotReachedError(asset);
  }
};
