import BigNumber from 'bignumber.js';
import LRUCache from 'lru-cache';
import { Eth } from 'web3-eth';
import { HttpProvider } from 'web3-providers';
import { TokenDefinition } from './Deployment';
import { Contract } from './Contract';
import { Environment, CacheHandler } from './Environment';
import { PriceSource } from './contracts/PriceSource';
import { Hub } from './contracts/Hub';
import { Token } from './contracts/Token';
import deployment from './deployments/mainnet';

describe('CacheHandler', () => {
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
    const environment = new Environment(client, deployment, {
      cache,
    });

    const source = new PriceSource(environment, '0x0');
    const spy = jest.spyOn(source, 'doMakeCall' as any).mockReturnValue(new Date(Date.now()));

    await source.getLastUpdate(1);
    await source.getLastUpdate(1);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls should not be cached when not using a cache handler', async () => {
    const environment = new Environment(client, deployment);
    const source = new PriceSource(environment, '0x0');
    // @ts-ignore
    const spy = jest.spyOn(source, 'doMakeCall').mockReturnValue(new Date(Date.now()));

    await source.getLastUpdate(1);
    await source.getLastUpdate(1);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('cache should be missed if the block numbers do not match', async () => {
    const environment = new Environment(client, deployment, {
      cache,
    });

    const source = new PriceSource(environment, '0x0');
    // @ts-ignore
    const spy = jest.spyOn(source, 'doMakeCall').mockReturnValue(new Date(Date.now()));

    await source.getLastUpdate(1);
    await source.getLastUpdate(2);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('cache should be missed if addresses do not match', async () => {
    const environment = new Environment(client, deployment, {
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
    const environment = new Environment(client, deployment, {
      cache,
    });

    const instance = new Token(environment, token);
    // @ts-ignore
    const spy = jest.spyOn(instance, 'doMakeCall').mockReturnValue(new BigNumber(100));

    await instance.getBalanceOf('0x0', 1);
    await instance.getBalanceOf('0x1', 1);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('cache should be hit if arguments match', async () => {
    const environment = new Environment(client, deployment, {
      cache,
    });

    const instance = new Token(environment, token);
    // @ts-ignore
    const spy = jest.spyOn(instance, 'doMakeCall').mockReturnValue(new BigNumber(100));

    await instance.getBalanceOf('0x0', 1);
    await instance.getBalanceOf('0x0', 1);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
