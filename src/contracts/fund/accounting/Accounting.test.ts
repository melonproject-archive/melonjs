import BigNumber from 'bignumber.js';
import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { Accounting, FundCalculations } from './Accounting';
import { deployWeth } from '../../../utils/tests/deployWeth';
import { deployHub } from '../../../utils/tests/deployHub';
import { deployAccounting } from '../../../utils/tests/deployAccounting';

describe('Accounting', () => {
  let environment: TestEnvironment;
  let accounting: Accounting;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const hub = await deployHub(environment, environment.accounts[0], {
      manager: environment.accounts[1],
      name: 'accounting-test-fund',
    });

    const weth = await deployWeth(environment, environment.accounts[0]);

    accounting = await deployAccounting(environment, environment.accounts[0], {
      hub: hub.contract.address,
      denominationAsset: weth.contract.address,
      nativeAsset: weth.contract.address,
      defaultAssets: [weth.contract.address],
    });
  });

  it('should return an array of fund assets', async () => {
    const result = await accounting.getOwnedAssets();
    expect(result.length).toBeGreaterThanOrEqual(1);
  });

  it('should return the default share price', async () => {
    const result = await accounting.getDefaultSharePrice();
    expect(result.isEqualTo(new BigNumber('1000000000000000000'))).toBe(true);
  });

  it('should get the version address', async () => {
    const result = await accounting.getVersion();
    expect(result.startsWith('0x')).toBe(true);
  });

  it('should return the native asset', async () => {
    const result = await accounting.getNativeAsset();
    expect(result.startsWith('0x')).toBe(true);
  });

  it('should return the denomination asset', async () => {
    const result = await accounting.getDenominationAsset();
    expect(result.startsWith('0x')).toBe(true);
  });

  it('should return the address of the engine', async () => {
    const result = await accounting.getEngine();
    expect(result.startsWith('0x')).toBe(true);
  });

  it('should return the calculations for a fund', async () => {
    jest.spyOn(accounting, 'getCalculationResults').mockResolvedValue({
      sharePrice: new BigNumber('1000000'),
      gav: new BigNumber('1000000'),
      nav: new BigNumber('1000000'),
      feesInDenominationAsset: new BigNumber('1000000'),
      feesInShares: new BigNumber('1000000'),
      gavPerShareNetManagementFee: new BigNumber('1000000'),
    });

    const result = await accounting.getCalculationResults();
    expect(result).toMatchObject<FundCalculations>({
      sharePrice: expect.any(BigNumber),
      gav: expect.any(BigNumber),
      nav: expect.any(BigNumber),
      feesInDenominationAsset: expect.any(BigNumber),
      feesInShares: expect.any(BigNumber),
      gavPerShareNetManagementFee: expect.any(BigNumber),
    });
  });

  it('should return the GAV of a fund', async () => {
    jest.spyOn(accounting, 'getGAV').mockResolvedValue(new BigNumber('100000000'));

    const result = await accounting.getGAV();
    expect(await result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return the asset holding of a fund', async () => {
    jest.spyOn(accounting, 'getAssetHolding').mockResolvedValue(new BigNumber('100000000'));

    const result = await accounting.getAssetHolding('0x');
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return the share cost in a certain asset', async () => {
    jest.spyOn(accounting, 'getShareCostInAsset').mockResolvedValue(new BigNumber('100000000'));

    const result = await accounting.getShareCostInAsset(new BigNumber('100000000'), '0x');
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return an array of fund asset holding', async () => {
    jest.spyOn(accounting, 'getFundHoldings').mockResolvedValue([
      {
        address: '0x0',
        amount: new BigNumber('10'),
      },
      {
        address: '0x1',
        amount: new BigNumber('11'),
      },
    ]);

    const result = await accounting.getFundHoldings();
    expect(result.length).toBeGreaterThan(0);

    result.forEach(item => {
      expect(item.address.startsWith('0x')).toBe(true);
      expect(item.amount).toBeInstanceOf(BigNumber);
      expect(item.amount.isGreaterThanOrEqualTo(0)).toBe(true);
    });
  });
});
