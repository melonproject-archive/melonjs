import { Eth } from 'web3-eth';
import { DeploymentOutput } from './Deployment';
import { availableTokens, TokenDefinition } from './utils/availableTokens';
import { ExchangeDefinition, availableExchanges } from './utils/availableExchanges';
import { availablePolicies, PolicyDefinition } from './utils/availablePolicies';
import { Address } from './Address';
import { sameAddress } from './utils/sameAddress';

export interface CacheHandler {
  has: (key: string) => boolean;
  get: (key: string) => any;
  set: (key: string, value: any) => any;
  reset: () => void;
}

export interface EnvironmentOptions {
  cache?: CacheHandler;
  exchanges?: ExchangeDefinition[];
  tokens?: TokenDefinition[];
  policies?: PolicyDefinition[];
}

export class Environment {
  public readonly cache?: CacheHandler;

  constructor(public readonly client: Eth, options?: EnvironmentOptions) {
    this.cache = options && options.cache;
  }
}

export class DeployedEnvironment extends Environment {
  public readonly tokens: TokenDefinition[];
  public readonly exchanges: ExchangeDefinition[];
  public readonly policies: PolicyDefinition[];

  constructor(
    eth: Eth,
    public readonly network: number,
    public readonly deployment: DeploymentOutput,
    options?: EnvironmentOptions,
  ) {
    super(eth, options);

    this.policies = availablePolicies().concat(options.policies ?? []);
    this.tokens = availableTokens(deployment).concat(options.tokens ?? []);
    this.exchanges = availableExchanges(deployment).concat(options.exchanges ?? []);
  }

  public getToken(symbol: string): TokenDefinition;
  public getToken(address: Address): TokenDefinition;
  public getToken(which: string | Address): TokenDefinition {
    const address = which.startsWith('0x');
    const token = this.tokens.find(token => {
      if (address && sameAddress(which, token.address)) {
        return true;
      }

      if (token.symbol === which) {
        return true;
      }

      return false;
    });

    return token;
  }

  public getExchange(id: string): ExchangeDefinition;
  public getExchange(address: Address): ExchangeDefinition;
  public getExchange(which: string | Address): ExchangeDefinition {
    const address = which.startsWith('0x');
    const exchange = this.exchanges.find(item => {
      if (address && sameAddress(which, item.exchange)) {
        return true;
      }

      if (which === item.id) {
        return true;
      }

      return false;
    });

    return exchange;
  }
}
