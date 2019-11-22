import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Environment } from './Environment';
import { Participation } from './contracts/fund/participation/Participation';
import BigNumber from 'bignumber.js';

describe('Transaction', () => {
  let environment: Environment;

  beforeAll(() => {
    // TODO: This should be replaced with a local ganache test environment using proper test fixtures.
    const client = new Eth(new HttpProvider('https://mainnet.melonport.com'));
    environment = new Environment(client);
  });

  it('should return the last price feed update as date object', async () => {
    const accounting = new Participation(environment, '0x931a30d1989108b0dbf424b958a87e3ecb695b7d');

    const sender = '0x9f622e0d782b5beacde7201733623436c3fda136';
    const asset = '0xec67005c4e498ec7f55e092bd1d35cbc47c91892';
    const tx = accounting.requestInvestment(sender, new BigNumber(1), new BigNumber(1), asset);

    await tx.validate();
    // console.log(await tx.prepare());
  });
});
