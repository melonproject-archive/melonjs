import { createTestEnvironment, TestEnvironment } from '../../../utils/tests/createTestEnvironment';
import { AccountingBytecode } from '../../../abis/Accounting.bin';
import { Accounting } from '../../..';
import { createWeth } from '../../../utils/tests/createWeth';
import BigNumber from 'bignumber.js';
import { Environment } from '../../../Environment';

import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { FundCalculations } from './Accounting';
import { createHub } from '../../../utils/tests/createHub';

describe('Accounting', () => {
  let environment: TestEnvironment;
  let accounting: Accounting;

  let mainnetEnvironment: Environment;
  let mainnetAccounting: Accounting;

  beforeAll(async () => {
    environment = await createTestEnvironment();

    const hub = await createHub(environment, environment.accounts[0], {
      manager: environment.accounts[1],
      name: 'accounting-test-fund',
    });

    const weth = await createWeth(environment, environment.accounts[0]);
    const deploy = Accounting.deploy(environment, AccountingBytecode, environment.accounts[0], {
      hub: hub.contract.address,
      denominationAsset: weth.contract.address,
      nativeAsset: weth.contract.address,
      defaultAssets: [weth.contract.address],
    });

    accounting = await deploy.send(await deploy.estimate());

    // some tests are still done with the mainnet deployment
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    mainnetEnvironment = new Environment(client);
    mainnetAccounting = new Accounting(mainnetEnvironment, '0x1b66598123fefb8759340d4ea6e4b070c4fc4315');
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
    const result = await mainnetAccounting.getCalculationResults();
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
    const result = await mainnetAccounting.getGAV();
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return the asset holding of a fund', async () => {
    const result = await mainnetAccounting.getAssetHolding('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2');
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return the share cost in a certain asset', async () => {
    const result = await mainnetAccounting.getShareCostInAsset(
      new BigNumber('100000000'),
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    );
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });

  it('should return an array of fund asset holding', async () => {
    const result = await mainnetAccounting.getFundHoldings();
    const addresses = Object.keys(result);
    const quantities = Object.values(result);

    expect(addresses.length).toBeGreaterThan(0);

    addresses.forEach(address => {
      expect(address.startsWith('0x')).toBe(true);
    });

    quantities.forEach(quantity => {
      expect(quantity).toBeInstanceOf(BigNumber);
      expect(quantity.isGreaterThanOrEqualTo(0));
    });
  });
});
