import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';

import { randomAddress } from '../../../utils/tests/randomAddress';
import { deployHub } from '../../../utils/tests/deployHub';
import { deployWeth } from '../../../utils/tests/deployWeth';
import { FeeManagerFactory } from './FeeManagerFactory';
import { FeeManagerFactoryBytecode } from '../../../abis/FeeManagerFactory.bin';
import { deployManagementFee } from '../../../utils/tests/deployManagementFee';
import { deployPerformanceFee } from '../../../utils/tests/deployPerformanceFee';
import { deployRegistry } from '../../../utils/tests/deployRegistry';
import BigNumber from 'bignumber.js';

describe('FeeManagerFactory', () => {
  let environment: TestEnvironment;
  let feeManagerFactory: FeeManagerFactory;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const deploy = FeeManagerFactory.deploy(environment, FeeManagerFactoryBytecode, environment.accounts[0]);
    feeManagerFactory = await deploy.send(await deploy.estimateGas());
  });

  it('should check if a contract is an instance of the FeeManagerFactory', async () => {
    const result = await feeManagerFactory.isInstance(randomAddress());
    expect(typeof result).toBe('boolean');
  });

  it('should create an instance of a FeeManager contract', async () => {
    const hub = await deployHub(environment, environment.accounts[0], {
      name: 'feemanager-test-fund',
      manager: environment.accounts[0],
    });
    const weth = await deployWeth(environment, environment.accounts[0]);
    const managementFee = await deployManagementFee(environment, environment.accounts[0]);
    const performanceFee = await deployPerformanceFee(environment, environment.accounts[0]);

    const registry = await deployRegistry(environment, environment.accounts[0], environment.accounts[0]);

    const txRegisterFees = registry.registerFees(environment.accounts[0], [
      managementFee.contract.address,
      performanceFee.contract.address,
    ]);
    await txRegisterFees.send(await txRegisterFees.estimateGas());

    const tx = feeManagerFactory.createInstance(environment.accounts[0], {
      hub: hub.contract.address,
      denominationAsset: weth.contract.address,
      fees: [managementFee.contract.address, performanceFee.contract.address],
      rates: [new BigNumber('100000'), new BigNumber('2000000')],
      periods: [1000, 2000],
      registry: registry.contract.address,
    });

    const txResult = await tx.send(await tx.estimateGas());
    expect(txResult.gasUsed).toBeGreaterThanOrEqual(0);
    expect(txResult.status).toBe(true);
  });
});
