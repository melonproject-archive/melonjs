import LRUCache from 'lru-cache';
import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { mainnet } from '../deployments';
import { Environment, CacheHandler } from '../api/Environment';
import { PriceSource } from '../api/PriceSource';
import { Hub } from '../api/Hub';
import { Contract } from '../api/Contract';
import { TokenDefinition } from '..';
import { Token } from '../api/Token';
import BigNumber from 'bignumber.js';

describe('cache handler', () => {
  let client: Eth;
  let cache: CacheHandler;

  const token: TokenDefinition = {
    address: '0x0',
    decimals: 18,
    name: 'Mock token',
    symbol: 'MOCK',
    reserveMin: 0,
  };

  beforeAll(() => {
    client = new Eth(new HttpProvider('https://mock.node'));
  });

  beforeEach(() => {
    cache = new LRUCache();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls should be cached when using cache handler and block number', async () => {
    const environment = new Environment(client, mainnet, {
      cache,
    });

    const source = new PriceSource(environment, '0x0');
    const spy = jest.spyOn(source, 'doMakeCall' as any).mockReturnValue(new Date(Date.now()));

    await source.getLastUpdate(1);
    await source.getLastUpdate(1);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls should not be cached when not using a cache handler', async () => {
    const environment = new Environment(client, mainnet);
    const source = new PriceSource(environment, '0x0');
    // @ts-ignore
    const spy = jest.spyOn(source, 'doMakeCall').mockReturnValue(new Date(Date.now()));

    await source.getLastUpdate(1);
    await source.getLastUpdate(1);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it("cache should be missed if the block numbers don't match", async () => {
    const environment = new Environment(client, mainnet, {
      cache,
    });

    const source = new PriceSource(environment, '0x0');
    // @ts-ignore
    const spy = jest.spyOn(source, 'doMakeCall').mockReturnValue(new Date(Date.now()));

    await source.getLastUpdate(1);
    await source.getLastUpdate(2);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it("cache should be missed if addresses don't match", async () => {
    const environment = new Environment(client, mainnet, {
      cache,
    });

    const hubOne = new Hub(environment, '0x0');
    const hubTwo = new Hub(environment, '0x1');
    // @ts-ignore
    const spy = jest.spyOn(Contract.prototype, 'doMakeCall').mockReturnValue(new Date(Date.now()));

    await hubOne.creationTime(1);
    await hubTwo.creationTime(2);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it("cache should be missed if arguments don't match", async () => {
    const environment = new Environment(client, mainnet, {
      cache,
    });

    const instance = new Token(environment, token);
    // @ts-ignore
    const spy = jest.spyOn(instance, 'doMakeCall').mockReturnValue(new BigNumber(100));

    await instance.balanceOf('0x0', 1);
    await instance.balanceOf('0x1', 1);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('cache should be hit if arguments match', async () => {
    const environment = new Environment(client, mainnet, {
      cache,
    });

    const instance = new Token(environment, token);
    // @ts-ignore
    const spy = jest.spyOn(instance, 'doMakeCall').mockReturnValue(new BigNumber(100));

    await instance.balanceOf('0x0', 1);
    await instance.balanceOf('0x0', 1);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
