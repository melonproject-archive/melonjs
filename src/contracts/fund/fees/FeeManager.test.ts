import BigNumber from 'bignumber.js';
import { FeeManager, ManagementFeeInformation, PerformanceFeeInformation } from './FeeManager';
import { ManagementFee } from './ManagementFee';
import { PerformanceFee } from './PerformanceFee';
import { deployManagementFee } from '../../../utils/tests/deployManagementFee';
import { TestEnvironment, createTestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { deployPerformanceFee } from '../../../utils/tests/deployPerformanceFee';
import { Hub } from '../hub/Hub';
import { deployHub } from '../../../utils/tests/deployHub';
import { deployFeeManager } from '../../../utils/tests/deployFeeManager';
import { Weth } from '../../dependencies/token/Weth';
import { deployWeth } from '../../../utils/tests/deployWeth';
import { Registry } from '../../version/Registry';
import { deployRegistry } from '../../../utils/tests/deployRegistry';

describe('FeeManager', () => {
  let environment: TestEnvironment;
  let feeManager: FeeManager;
  let registry: Registry;
  let hub: Hub;
  let weth: Weth;
  let managementFee: ManagementFee;
  let performanceFee: PerformanceFee;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    hub = await deployHub(environment, environment.accounts[0], {
      name: 'feemanager-test-fund',
      manager: environment.accounts[0],
    });
    weth = await deployWeth(environment, environment.accounts[0]);
    managementFee = await deployManagementFee(environment, environment.accounts[0]);
    performanceFee = await deployPerformanceFee(environment, environment.accounts[0]);

    registry = await deployRegistry(environment, environment.accounts[0], environment.accounts[0]);

    const tx = registry.registerFees(environment.accounts[0], [
      managementFee.contract.address,
      performanceFee.contract.address,
    ]);
    await tx.send(await tx.prepare());

    feeManager = await deployFeeManager(environment, environment.accounts[0], {
      hub: hub.contract.address,
      denominationAsset: weth.contract.address,
      fees: [managementFee.contract.address, performanceFee.contract.address],
      rates: [new BigNumber('100000'), new BigNumber('2000000')],
      periods: [1000, 2000],
      registry: registry.contract.address,
    });
  });

  it('should return management fee contract address', async () => {
    const result = await feeManager.getManagementFeeAddress();
    expect(result).toBe(managementFee.contract.address);
  });

  it('should return management fee information', async () => {
    const result = await feeManager.getManagementFeeInformation();
    expect(result).toMatchObject<ManagementFeeInformation>({
      rate: expect.any(BigNumber),
    });
  });

  it('should return management fee amount', async () => {
    jest.spyOn(feeManager, 'getManagementFeeAmount').mockResolvedValue(new BigNumber('100000000'));

    const result = await feeManager.getManagementFeeAmount();
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return performance fee contract address', async () => {
    const result = await feeManager.getPerformanceFeeAddress();
    expect(result.startsWith('0x')).toBe(true);
  });

  it('should return performance fee information', async () => {
    const result = await feeManager.getPerformanceFeeInformation();
    expect(result).toMatchObject<PerformanceFeeInformation>({
      rate: expect.any(BigNumber),
      period: expect.any(Number),
    });
  });

  it('should get the high watermark', async () => {
    const result = await performanceFee.getHighWaterMark(feeManager.contract.address);
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should get the initialize time', async () => {
    const result = await performanceFee.getInitializeTime(feeManager.contract.address);
    expect(result).toBeInstanceOf(Date);
    expect(result.getTime()).toBeLessThan(Date.now());
  });

  it('should check whether the performance fee can be updated', async () => {
    const result = await performanceFee.canUpdate(feeManager.contract.address);
    expect(result === false || result === true).toBe(true);
  });
});
