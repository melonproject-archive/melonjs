import { path } from 'ramda';
import { Eth } from 'web3-eth';
import { Deployment } from '..';

export interface CacheHandler {
  has: (key: string) => boolean;
  get: (key: string) => any;
  set: (key: string, value: any) => any;
  reset: () => void;
}

export interface EnvironmentOptions {
  cache?: CacheHandler;
}

export class Environment {
  public readonly cache: CacheHandler;

  constructor(public readonly client: Eth, public readonly deployment: Deployment, options?: EnvironmentOptions) {
    this.cache = options && options.cache;
  }

  public getAddress(location: string) {
    return path<string>(location.split('.'), this.deployment);
  }
}
