import BigNumber from 'bignumber.js';
import LRUCache from 'lru-cache';
import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { Contract } from './Contract';
import { Environment, CacheHandler } from './Environment';
import { CanonicalPriceFeed } from './contracts/prices/CanonicalPriceFeed';
import { Hub } from './contracts/fund/hub/Hub';
import { Token } from './contracts/dependencies/Token';

describe('CacheHandler', () => {
  let client: Eth;
  let cache: CacheHandler;

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
    const environment = new Environment(client, {
      cache,
    });

    const source = new CanonicalPriceFeed(environment, '0x0');
    // @ts-ignore
    const spy = jest.spyOn(source, 'doMakeCall').mockReturnValue(new Date(Date.now()));

    await source.getLastUpdate(1);
    await source.getLastUpdate(1);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls should not be cached when not using a cache handler', async () => {
    const environment = new Environment(client);
    const source = new CanonicalPriceFeed(environment, '0x0');
    // @ts-ignore
    const spy = jest.spyOn(source, 'doMakeCall').mockReturnValue(new Date(Date.now()));

    await source.getLastUpdate(1);
    await source.getLastUpdate(1);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('cache should be missed if the block numbers do not match', async () => {
    const environment = new Environment(client, {
      cache,
    });

    const source = new CanonicalPriceFeed(environment, '0x0');
    // @ts-ignore
    const spy = jest.spyOn(source, 'doMakeCall').mockReturnValue(new Date(Date.now()));

    await source.getLastUpdate(1);
    await source.getLastUpdate(2);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('cache should be missed if addresses do not match', async () => {
    const environment = new Environment(client, {
      cache,
    });

    const hubOne = new Hub(environment, '0x0');
    const hubTwo = new Hub(environment, '0x1');
    // @ts-ignore
    const spy = jest.spyOn(Contract.prototype, 'doMakeCall').mockReturnValue(new Date(Date.now()));

    await hubOne.getCreationTime(1);
    await hubTwo.getCreationTime(2);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('cache should be missed if arguments do not match', async () => {
    const environment = new Environment(client, {
      cache,
    });

    const instance = new Token(environment, '0x0');
    // @ts-ignore
    const spy = jest.spyOn(instance, 'doMakeCall').mockReturnValue(new BigNumber(100));

    await instance.getBalanceOf('0x0', 1);
    await instance.getBalanceOf('0x1', 1);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('cache should be hit if arguments match', async () => {
    const environment = new Environment(client, {
      cache,
    });

    const instance = new Token(environment, '0x0');
    // @ts-ignore
    const spy = jest.spyOn(instance, 'doMakeCall').mockReturnValue(new BigNumber(100));

    await instance.getBalanceOf('0x0', 1);
    await instance.getBalanceOf('0x0', 1);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
