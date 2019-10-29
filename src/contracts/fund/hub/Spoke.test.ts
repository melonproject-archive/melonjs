import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../../../Environment';
import { Spoke } from './Spoke';
import { sameAddress } from '../../../utils/sameAddress';

describe('Spoke', () => {
  let environment: Environment;
  let spoke: Spoke;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client);
    spoke = new Spoke(environment, '0x1b66598123fefb8759340d4ea6e4b070c4fc4315');
  });

  it('should return the address of the engine', async () => {
    const result = await spoke.getEngine();
    expect(result).toBe('0x7CaEc96607c5c7190d63B5A650E7CE34472352f5');
  });

  it('should return the address of the MLN token', async () => {
    const result = await spoke.getMlnToken();
    expect(sameAddress(result, '0xec67005c4e498ec7f55e092bd1d35cbc47c91892')).toBe(true);
  });

  it('should return the address of the price source', async () => {
    const result = await spoke.getPriceSource();
    expect(sameAddress(result, '0x4559DDD9E0a567bD8AB071ac106C1bC2d0C0b6Ef')).toBe(true);
  });

  it('should return the address of the version', async () => {
    const result = await spoke.getVersion();
    expect(sameAddress(result, '0x01Bde0b02740D6311e4a87CA112DeEEddb057EFB')).toBe(true);
  });

  it('should return the address of the registry', async () => {
    const result = await spoke.getRegistry();
    expect(sameAddress(result, '0x1Bfd21f7db126a5966d2C09492676807a68859Ba')).toBe(true);
  });
});
