import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../Environment';
import deployment from '../deployments/mainnet';
import { MaxPositions } from './MaxPositions';

describe('AddressList', () => {
  let environment: Environment;
  let maxPositions: MaxPositions;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client, deployment);
    maxPositions = new MaxPositions(environment, '0x136f30369c6f387e537b0920ab616240662b9125');
  });

  it('should return the price tolerance', async () => {
    const result = await maxPositions.getMaxPositions();
    expect(result.isGreaterThanOrEqualTo(0)).toBe(true);
  });
});
