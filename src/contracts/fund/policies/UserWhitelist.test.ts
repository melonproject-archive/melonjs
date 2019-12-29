import { UserWhitelist } from './UserWhitelist';
import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { randomAddress } from '../../../utils/tests/randomAddress';
import { UserWhitelistBytecode } from '../../../abis/UserWhitelist.bin';
import { range } from '../../../utils/range';

describe('UserWhitelist', () => {
  let environment: TestEnvironment;
  let userWhiteList: UserWhitelist;
  const addresses = range(5).map(() => randomAddress());

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = UserWhitelist.deploy(environment, UserWhitelistBytecode, environment.accounts[0], addresses);
    userWhiteList = await deploy.send(await deploy.prepare());
  });

  it('should check whether a user is whitelisted', async () => {
    const result = await userWhiteList.isWhitelisted(addresses[3]);
    expect(result).toBe(true);
  });

  it('should return the correct identifier', async () => {
    const result = await userWhiteList.getIdentifier();
    expect(result).toBe('UserWhitelist');
  });
});
