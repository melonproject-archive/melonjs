import BigNumber from 'bignumber.js';
import { TestEnvironment, createTestEnvironment } from '../../utils/tests/createTestEnvironment';
import { randomAddress } from '../../utils/tests/randomAddress';
import { Version } from './Version';
import { sameAddress } from '../../utils/sameAddress';
import { deployVersion } from '../../utils/tests/deployVersion';
import { Weth } from '../dependencies/token/Weth';
import { deployWeth } from '../../utils/tests/deployWeth';
import { deployRegistry } from '../../utils/tests/deployRegistry';
import { Registry } from './Registry';
import { range } from '../../utils/range';

describe('Version', () => {
  let environment: TestEnvironment;
  let version: Version;
  let registry: Registry;
  let weth: Weth;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    weth = await deployWeth(environment, environment.accounts[0]);
    registry = await deployRegistry(environment, environment.accounts[0], environment.accounts[0]);
    version = await deployVersion(environment, environment.accounts[0], registry, weth);
  });

  it('should return the native asset', async () => {
    const result = await registry.getNativeAsset();
    expect(sameAddress(result, weth.contract.address)).toBe(true);
  });

  it('should return the address of the registry', async () => {
    const result = await version.getRegistry();
    expect(result.startsWith('0x')).toBe(true);
  });

  it('should create a hub (without spokes)', async () => {
    const tx = version.beginSetup(environment.accounts[0], {
      name: 'version-test-fund',
      fees: [randomAddress(), randomAddress()],
      feeRates: [new BigNumber(2).multipliedBy('1e16'), new BigNumber(20).multipliedBy('1e16')],
      feePeriods: [new BigNumber(0), new BigNumber(90).multipliedBy(60 * 60 * 24)],
      exchanges: range(5).map(() => randomAddress()),
      adapters: range(5).map(() => randomAddress()),
      denominationAsset: weth.contract.address,
      defaultAssets: [weth.contract.address],
    });

    const txResult = await tx.send(await tx.prepare());
    expect(txResult.gasUsed).toBeGreaterThan(0);
  });
});
