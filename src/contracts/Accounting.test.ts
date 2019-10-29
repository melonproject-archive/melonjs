import * as R from 'ramda';
import { createTestEnvironment, TestEnvironment } from '../utils/tests/createTestEnvironment';
import { AccountingBytecode } from '../abis/Accounting.bin';
import { randomAddress } from '../utils/tests/randomAddress';
import { Accounting } from '..';
import { createWeth } from '../utils/tests/createWeth';

describe('Accounting', () => {
  let environment: TestEnvironment;
  let accounting: Accounting;

  beforeAll(async () => {
    environment = await createTestEnvironment();
    const weth = await createWeth(environment, environment.accounts[0]);
    const deploy = Accounting.deploy(environment, AccountingBytecode, environment.accounts[0], {
      hub: randomAddress(),
      denominationAsset: weth.contract.address,
      nativeAsset: weth.contract.address,
      defaultAssets: R.range(0, 1).map(() => randomAddress()),
    });

    accounting = await deploy.send(await deploy.estimate());
  });

  // it('should return an array of fund asset holding', async () => {
  //   const result = await accounting.getFundHoldings();
  //   const addresses = Object.keys(result);
  //   const quantities = Object.values(result);

  //   expect(addresses.length).toBeGreaterThan(0);

  //   addresses.forEach(address => {
  //     expect(address.startsWith('0x')).toBe(true);
  //   });

  //   quantities.forEach(quantity => {
  //     expect(quantity).toBeInstanceOf(BigNumber);
  //     expect(quantity.isGreaterThanOrEqualTo(0));
  //   });
  // });

  // it('should return an array of fund assets', async () => {
  //   const result = await accounting.getOwnedAssets();
  //   expect(result.length).toBeGreaterThan(1);
  // });

  // it('should return the default share price', async () => {
  //   const result = await accounting.getDefaultSharePrice();
  //   expect(result.isEqualTo(new BigNumber('1000000000000000000'))).toBe(true);
  // });

  it('should get the version address', async () => {
    const result = await accounting.getVersion();
    expect(result.startsWith('0x')).toBe(true);
  });

  it('should return the native asset', async () => {
    const result = await accounting.getNativeAsset();
    expect(result.startsWith('0x')).toBe(true);
  });

  // it('should return the denomination asset', async () => {
  //   const result = await accounting.getDenominationAsset();
  //   expect(result.startsWith('0x')).toBe(true);
  // });

  // it('should return the calculations for a fund', async () => {
  //   const result = await accounting.getCalculationResults();
  //   expect(result).toMatchObject<FundCalculations>({
  //     sharePrice: expect.any(BigNumber),
  //     gav: expect.any(BigNumber),
  //     nav: expect.any(BigNumber),
  //     feesInDenominationAsset: expect.any(BigNumber),
  //     feesInShares: expect.any(BigNumber),
  //     gavPerShareNetManagementFee: expect.any(BigNumber),
  //   });
  // });

  // it('should return the GAV of a fund', async () => {
  //   const result = await accounting.getGAV();
  //   expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  // });

  // it('should return the asset holding of a fund', async () => {
  //   const result = await accounting.getAssetHolding('0xec67005c4e498ec7f55e092bd1d35cbc47c91892');
  //   expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  // });

  // it('should return the share cost in a certain asset', async () => {
  //   const result = await accounting.getShareCostInAsset(
  //     new BigNumber('100000000'),
  //     '0xec67005c4e498ec7f55e092bd1d35cbc47c91892',
  //   );
  //   expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  // });

  // it('should return the address of the engine', async () => {
  //   const result = await accounting.getEngine();
  //   expect(result).toBe('0x7CaEc96607c5c7190d63B5A650E7CE34472352f5');
  // });
});
