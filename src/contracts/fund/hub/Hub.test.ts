import { Hub } from './Hub';
import { sameAddress } from '../../../utils/sameAddress';
import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { deployHub } from '../../../utils/tests/deployHub';

describe('Hub', () => {
  let hub: Hub;
  let environment: TestEnvironment;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    hub = await deployHub(environment, environment.accounts[0], {
      manager: environment.accounts[1],
      name: 'hub-test-fund',
    });
  });

  it('should return the correct fund name', async () => {
    const result = await hub.getName();
    expect(result).toBe('hub-test-fund');
  });

  it('should return the correct manager address', async () => {
    const result = await hub.getManager();
    expect(sameAddress(result, environment.accounts[1])).toBe(true);
  });

  it('should return the creation time', async () => {
    const result = await hub.getCreationTime();
    expect(result).toBeInstanceOf(Date);
    expect(result.getTime()).toBeLessThan(Date.now());
  });

  it('should return the address of the creator', async () => {
    const result = await hub.getCreator();
    expect(sameAddress(result, environment.accounts[0])).toBe(true);
  });

  it('should return whether or not a fund is shutdown', async () => {
    const result = await hub.isShutDown();
    expect(result === true || result === false).toBe(true);
  });
});
