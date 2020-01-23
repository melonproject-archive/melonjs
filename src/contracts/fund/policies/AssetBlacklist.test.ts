import { AssetBlacklist } from './AssetBlacklist';
import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { randomAddress } from '../../../utils/tests/randomAddress';
import { AssetBlacklistBytecode } from '../../../abis/AssetBlacklist.bin';
import { range } from '../../../utils/range';

describe('AssetBlacklist', () => {
  let environment: TestEnvironment;
  let assetBlacklist: AssetBlacklist;
  const addresses = range(5).map(() => randomAddress());

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = AssetBlacklist.deploy(environment, AssetBlacklistBytecode, environment.accounts[0], addresses);
    assetBlacklist = await deploy.send(await deploy.prepare());
  });

  it('should return the correct position', async () => {
    const result = await assetBlacklist.getPosition();
    expect(result).toBe(0);
  });

  it('should return the correct identifier', async () => {
    const result = await assetBlacklist.getIdentifier();
    expect(result).toBe('AssetBlacklist');
  });
});
