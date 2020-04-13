import { ethers } from 'ethers';
import { HubContract } from './contracts/Hub';

describe('Smoke test', () => {
  it('Generated contracts should work', async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      'https://kovan.infura.io/v3/ffe0be31d7d34594b3decc6c7778e9ad',
    );

    const hub = new HubContract('0x7b099237599ab0263ba299e954127b54c51d82c9', provider);
    const manager = await hub.manager();

    console.log(manager);
  });
});
