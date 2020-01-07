import { Address } from '../../../../Address';
import { Trading } from '../Trading';
import { CooldownForMakerAssetNotReachedError } from '../Trading.errors';
import BigNumber from 'bignumber.js';

export const checkCooldownReached = async (trading: Trading, asset: Address, block?: number) => {
  const [makerAssetCooldown, blockObject] = await Promise.all([
    trading.getMakerAssetCooldown(asset, block),
    trading.environment.client.getBlock(block || 'latest'),
  ]);

  if (!makerAssetCooldown) {
    return;
  }

  const currentBlockTime = new BigNumber(blockObject.timestamp);
  if (currentBlockTime.isLessThan(makerAssetCooldown!.getTime())) {
    throw new CooldownForMakerAssetNotReachedError(asset);
  }
};
