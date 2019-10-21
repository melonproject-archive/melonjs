import { path } from 'ramda';
import { Eth } from 'web3-eth';
import { Deployment } from '..';

export interface CacheHandler {
  has: (key: string) => boolean;
  get: (key: string) => any;
  set: (key: string, value: any) => any;
  reset: () => void;
}

export class Environment {
  constructor(
    public readonly client: Eth,
    public readonly deployment: Deployment,
    public readonly cache?: CacheHandler,
  ) {
    // Nothing to do here.
  }

  public getAddress(location: string) {
    return path<string>(location.split('.'), this.deployment);
  }
}
