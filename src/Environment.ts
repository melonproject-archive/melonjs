import { Eth } from 'web3-eth';

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

  constructor(public readonly client: Eth, options?: EnvironmentOptions) {
    this.cache = options && options.cache;
  }
}
