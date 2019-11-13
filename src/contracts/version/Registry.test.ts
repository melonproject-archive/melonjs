import {
  Registry,
  ExchangeAdapterAlreadyRegisteredError,
  ExchangeAdaptersRegisteredOutOfBoundsError,
  AssetAlreadyRegisteredError,
  AssetsRegisteredOutOfBoundsError,
} from './Registry';
import { TestEnvironment, createTestEnvironment } from '../../utils/tests/createTestEnvironment';
import { deployRegistry } from '../../utils/tests/deployRegistry';
import { randomAddress } from '../../utils/tests/randomAddress';
import { deployWeth } from '../../utils/tests/deployWeth';
import BigNumber from 'bignumber.js';
import { sameAddress } from '../../utils/sameAddress';

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
    await tx.send(await tx.estimateGas());

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
    await tx.send(await tx.estimateGas());

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
    await tx.send(await tx.estimateGas());

    const result = await registry.isExchangeAdapterRegistered(adapterAddress);
    expect(typeof result).toBe('boolean');
  });

  it('should throw ExchangeAdapterAlreadyRegisteredError', async () => {
    const tx = registry.registerExchangeAdapter('', {
      exchange: '',
      adapter: '',
      takesCustody: true,
      sigs: [],
    });

    jest.spyOn(registry, 'getExchangeInformation').mockReturnValue(
      new Promise(resolve =>
        resolve({
          exists: true,
          exchangeAddress: '',
          takesCustody: true,
          sigs: [],
        }),
      ),
    );
    jest.spyOn(registry, 'getRegisteredExchangeAdapters').mockReturnValue(new Promise(resolve => resolve([undefined])));
    jest.spyOn(registry, 'getMaxRegisteredEntities').mockReturnValue(new Promise(resolve => resolve(new BigNumber(2))));

    await expect(tx.validate()).rejects.toThrowError(ExchangeAdapterAlreadyRegisteredError);
  });

  it('should throw ExchangeAdaptersRegisteredOutOfBoundsError', async () => {
    const tx = registry.registerExchangeAdapter('', {
      exchange: '',
      adapter: '',
      takesCustody: true,
      sigs: [],
    });

    jest.spyOn(registry, 'getExchangeInformation').mockReturnValue(
      new Promise(resolve =>
        resolve({
          exists: false,
          exchangeAddress: '',
          takesCustody: true,
          sigs: [],
        }),
      ),
    );
    jest
      .spyOn(registry, 'getRegisteredExchangeAdapters')
      .mockReturnValue(new Promise(resolve => resolve([undefined, undefined])));
    jest.spyOn(registry, 'getMaxRegisteredEntities').mockReturnValue(new Promise(resolve => resolve(new BigNumber(1))));

    const rejects = await expect(tx.validate()).rejects;
    await rejects.toThrowError(ExchangeAdaptersRegisteredOutOfBoundsError);
    await rejects.toMatchObject({
      numberOfAdapters: expect.any(Number),
      maxRegisteredAdapters: expect.any(Number),
    });
  });

  it('should throw AssetAlreadyRegisteredError', async () => {
    const tx = registry.registerAsset('', {
      address: '',
      name: '',
      symbol: '',
      url: '',
      reserveMin: new BigNumber(0),
      standards: [],
      sigs: [],
    });

    jest.spyOn(registry, 'getAssetInformation').mockReturnValue(
      new Promise(resolve =>
        resolve({
          exists: true,
          decimals: 0,
          name: '',
          symbol: '',
          url: '',
          standards: [],
          sigs: [],
        }),
      ),
    );
    jest.spyOn(registry, 'getRegisteredAssets').mockReturnValue(new Promise(resolve => resolve([undefined])));
    jest.spyOn(registry, 'getMaxRegisteredEntities').mockReturnValue(new Promise(resolve => resolve(new BigNumber(2))));

    await expect(tx.validate()).rejects.toThrowError(AssetAlreadyRegisteredError);
  });

  it('should throw AssetsRegisteredOutOfBoundsError', async () => {
    const tx = registry.registerAsset('', {
      address: '',
      name: '',
      symbol: '',
      url: '',
      reserveMin: new BigNumber(0),
      standards: [],
      sigs: [],
    });

    jest.spyOn(registry, 'getAssetInformation').mockReturnValue(
      new Promise(resolve =>
        resolve({
          exists: false,
          decimals: 0,
          name: '',
          symbol: '',
          url: '',
          standards: [],
          sigs: [],
        }),
      ),
    );
    jest
      .spyOn(registry, 'getRegisteredAssets')
      .mockReturnValue(new Promise(resolve => resolve([undefined, undefined])));
    jest.spyOn(registry, 'getMaxRegisteredEntities').mockReturnValue(new Promise(resolve => resolve(new BigNumber(1))));

    const rejects = expect(tx.validate()).rejects;
    await rejects.toThrowError(AssetsRegisteredOutOfBoundsError);
    await rejects.toMatchObject({
      numberOfAsset: expect.any(Number),
      maxRegisteredAssets: expect.any(Number),
    });
  });

  it('should set and get the MLN token', async () => {
    const mlnAddress = randomAddress();
    const tx = registry.setMlnToken(environment.accounts[0], mlnAddress);
    const txResult = await tx.send(await tx.estimateGas());
    expect(txResult.gasUsed).toBeGreaterThanOrEqual(0);
    expect(txResult.status).toBe(true);

    const result = await registry.getMlnToken();
    expect(sameAddress(result, mlnAddress)).toBe(true);
  });
});
