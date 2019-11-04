import * as R from 'ramda';
import { AssetBlacklist } from './AssetBlacklist';
import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { randomAddress } from '../../../utils/tests/randomAddress';
import { AssetBlacklistBytecode } from '../../../abis/AssetBlacklist.bin';

describe('AssetBlacklist', () => {
  let environment: TestEnvironment;
  let assetBlacklist: AssetBlacklist;
  const addresses = R.range(0, 5).map(address => randomAddress());

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = AssetBlacklist.deploy(environment, AssetBlacklistBytecode, environment.accounts[0], addresses);
    assetBlacklist = await deploy.send(await deploy.estimateGas());
  });

  it('should return the correct position', async () => {
    const result = await assetBlacklist.getPosition();
    expect(result).toBe(0);
  });

  it('should return the correct identifier', async () => {
    const result = await assetBlacklist.getIdentifier();
    expect(result).toBe('Asset blacklist');
  });
});
