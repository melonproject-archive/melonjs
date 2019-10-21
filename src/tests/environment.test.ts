import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from '../api/Environment';
import { PriceSource } from '../api/PriceSource';
import { mainnet } from '../deployments';

describe('Environment', () => {
  it('getLastUpdate', async () => {
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    const environment = new Environment(client, mainnet);
    const source = PriceSource.forDeployment(environment);
    const update = await source.getLastUpdate();
    console.log(update);
  });
});
