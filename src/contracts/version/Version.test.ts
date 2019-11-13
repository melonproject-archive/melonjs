import { TestEnvironment, createTestEnvironment } from '../../utils/tests/createTestEnvironment';
import { randomAddress } from '../../utils/tests/randomAddress';
import { Version } from './Version';
import { VersionBytecode } from '../../abis/Version.bin';

describe('Version', () => {
  let environment: TestEnvironment;
  let version: Version;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    const deploy = Version.deploy(environment, VersionBytecode, environment.accounts[0], {
      accountingFactory: randomAddress(),
      feeManagerFactory: randomAddress(),
      participationFactory: randomAddress(),
      policyManagerFactory: randomAddress(),
      sharesFactory: randomAddress(),
      tradingFactory: randomAddress(),
      vaultFactory: randomAddress(),
      version: randomAddress(),
      postDeployOwner: environment.accounts[0],
    });
    version = await deploy.send(await deploy.estimateGas());
  });

  it('should return the address of the registry', async () => {
    const result = await version.getRegistry();
    expect(result.startsWith('0x')).toBe(true);
  });
});
