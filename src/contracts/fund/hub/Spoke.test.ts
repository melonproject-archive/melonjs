import { Spoke } from './Spoke';
import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { deploySpoke } from '../../../utils/tests/deploySpoke';
import { deployHub } from '../../../utils/tests/deployHub';
import { Hub } from './Hub';
import { sameAddress } from '../../../utils/sameAddress';

describe('Spoke', () => {
  let environment: TestEnvironment;
  let spoke: Spoke;
  let hub: Hub;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    hub = await deployHub(environment, environment.accounts[0], {
      name: 'spoke-test-fund',
      manager: environment.accounts[1],
    });
    spoke = await deploySpoke(environment, environment.accounts[0], hub.contract.address);
  });

  it('should return the address of the engine', async () => {
    const result = await spoke.getEngine();
    expect(result.startsWith('0x')).toBe(true);
  });

  it('should return the address of the MLN token', async () => {
    const result = await spoke.getMlnToken();
    expect(result.startsWith('0x')).toBe(true);
  });

  it('should return the address of the price source', async () => {
    const result = await spoke.getPriceSource();
    expect(result.startsWith('0x')).toBe(true);
  });

  it('should return the address of the version', async () => {
    const result = await spoke.getVersion();
    expect(result.startsWith('0x')).toBe(true);
  });

  it('should return the address of the registry', async () => {
    const result = await spoke.getRegistry();
    expect(result.startsWith('0x')).toBe(true);
  });

  it('should return the address of the hub', async () => {
    const result = await spoke.getHub();
    expect(sameAddress(result, hub.contract.address)).toBe(true);
  });
});
