import { Eth } from 'web3-eth';
import { DeploymentOutput } from './Deployment';

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
  public readonly cache?: CacheHandler;

  constructor(public readonly client: Eth, options?: EnvironmentOptions) {
    this.cache = options && options.cache;
  }
}

export class DeployedEnvironment extends Environment {
  constructor(
    eth: Eth,
    public readonly network: number,
    public readonly deployment: DeploymentOutput,
    options?: EnvironmentOptions,
  ) {
    super(eth, options);
  }
}
