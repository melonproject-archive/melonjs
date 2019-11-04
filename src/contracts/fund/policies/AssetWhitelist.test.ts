import * as R from 'ramda';
import { AssetWhitelist } from './AssetWhitelist';
import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { Address } from '../../../Address';
import { randomAddress } from '../../../utils/tests/randomAddress';
import { AssetWhitelistBytecode } from '../../../abis/AssetWhitelist.bin';

describe('AssetWhitelist', () => {
  let environment: TestEnvironment;
  let assetWhitelist: AssetWhitelist;
  let addresses: Address[];

  beforeAll(async () => {
    environment = await createTestEnvironment();

    addresses = R.range(0, 5).map(address => randomAddress());

    const deploy = AssetWhitelist.deploy(environment, AssetWhitelistBytecode, environment.accounts[0], addresses);
    assetWhitelist = await deploy.send(await deploy.estimateGas());
  });

  it('should return the correct position', async () => {
    const result = await assetWhitelist.getPosition();
    expect(result).toBe(0);
  });

  it('should return the correct identifier', async () => {
    const result = await assetWhitelist.getIdentifier();
    expect(result).toBe('Asset whitelist');
  });
});
