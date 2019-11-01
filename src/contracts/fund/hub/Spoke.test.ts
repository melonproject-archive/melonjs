import { Spoke } from './Spoke';
import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { deploySpoke } from '../../../utils/tests/deploySpoke';
import { deployHub } from '../../../utils/tests/deployHub';

describe('Spoke', () => {
  let environment: TestEnvironment;
  let spoke: Spoke;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    const hub = await deployHub(environment, environment.accounts[0], {
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
});
