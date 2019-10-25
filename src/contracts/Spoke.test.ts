import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import deployment from '../deployments/mainnet';
import { Spoke } from './Spoke';
import { Token } from './Token';
import { sameAddress } from '../utils/sameAddress';

describe('Spoke', () => {
  let environment: Environment;
  let spoke: Spoke;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client, deployment);
    spoke = new Spoke(environment, '0x1b66598123fefb8759340d4ea6e4b070c4fc4315');
  });

  it('should return the address of the engine', async () => {
    const result = await spoke.getEngine();
    expect(result).toBe(environment.deployment.melonContracts.engine);
  });

  it('should return the address of the MLN token', async () => {
    const result = await spoke.getMlnToken();
    expect(sameAddress(result, Token.findDefinition(environment, 'MLN').address)).toBe(true);
  });

  it('should return the address of the price source', async () => {
    const result = await spoke.getPriceSource();
    expect(sameAddress(result, environment.deployment.melonContracts.priceSource)).toBe(true);
  });

  it('should return the address of the version', async () => {
    const result = await spoke.getVersion();
    expect(sameAddress(result, environment.deployment.melonContracts.version)).toBe(true);
  });

  it('should return the address of the registry', async () => {
    const result = await spoke.getRegistry();
    expect(sameAddress(result, environment.deployment.melonContracts.registry)).toBe(true);
  });
});
