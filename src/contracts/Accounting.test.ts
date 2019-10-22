import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import deployment from '../deployments/mainnet';
import { Accounting } from './Accounting';
import BigNumber from 'bignumber.js';
import { sameAddress } from '../utils/sameAddress';
import { Token } from '..';

describe('Accounting', () => {
  let environment: Environment;
  let accounting: Accounting;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client, deployment);
    accounting = new Accounting(environment, '0x1b66598123fefb8759340d4ea6e4b070c4fc4315');
  });

  it('should return the default share price', async () => {
    const result = await accounting.defaultSharePrice();
    expect(result.isEqualTo(new BigNumber('1000000000000000000'))).toBe(true);
  });

  it('should return WETH address as native asset', async () => {
    const result = await accounting.nativeAsset();
    expect(sameAddress(result, Token.findDefinition(environment, 'WETH').address)).toBe(true);
  });

  it('should return the calculations', async () => {
    const result = await accounting.performCalculations();
    expect(result).toHaveProperty('sharePrice');
  });
});
