import { Registry } from './Registry';
import { TestEnvironment, createTestEnvironment } from '../../utils/tests/createTestEnvironment';
import { deployRegistry } from '../../utils/tests/deployRegistry';
import { randomAddress } from '../../utils/tests/randomAddress';
import { deployWeth } from '../../utils/tests/deployWeth';
import BigNumber from 'bignumber.js';

describe('Registry', () => {
  let environment: TestEnvironment;
  let registry: Registry;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    registry = await deployRegistry(environment, environment.accounts[0], environment.accounts[0]);
  });

  it('should return the registered versions', async () => {
    const result = await registry.getRegisteredVersions();
    expect(result.length).toBeGreaterThanOrEqual(0);
  });

  it('should register fees and check if they were indeed registered', async () => {
    const [managementFeeAdress, performanceFeeAddress] = [randomAddress(), randomAddress()];

    const tx = await registry.registerFees(environment.accounts[0], [managementFeeAdress, performanceFeeAddress]);
    await tx.send(await tx.estimate());

    {
      const result = await registry.isFeeRegistered(managementFeeAdress);
      expect(result).toBe(true);
    }

    {
      const result = await registry.isFeeRegistered(performanceFeeAddress);
      expect(result).toBe(true);
    }
  });

  it('should register an asset and check if it was indeed registered', async () => {
    const weth = await deployWeth(environment, environment.accounts[0]);

    const tx = await registry.registerAsset(environment.accounts[0], {
      address: weth.contract.address,
      name: 'Test Asset',
      symbol: 'TAT',
      url: 'https://tat.tat/',
      reserveMin: new BigNumber(100000),
      standards: [1, 2, 3],
      sigs: ['0000'],
    });
    await tx.send(await tx.estimate());

    const result = await registry.getAssetInformation(weth.contract.address);
    expect(result.exists).toBe(true);
  });

  it('should register an exchange adapter and check if it was indeed registered', async () => {
    const exchangeAdress = randomAddress();
    const adapterAddress = randomAddress();

    const tx = await registry.registerExchangeAdapter(environment.accounts[0], {
      exchange: exchangeAdress,
      adapter: adapterAddress,
      takesCustody: true,
      sigs: ['0000'],
    });
    await tx.send(await tx.estimate());

    const result = await registry.isExchangeAdapterRegistered(adapterAddress);
    expect(typeof result).toBe('boolean');
  });
});
