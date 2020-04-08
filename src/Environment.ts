import { DeploymentOutput } from './Deployment';
import { Address, isAddress, sameAddress } from './Address';

export interface EnvironmentOptions {
  adapters?: ExchangeAdapterDefinition[];
  tokens?: TokenDefinition[];
}

export enum ExchangeAdapter {
  'ENGINE' = 'MelonEngine',
  'KYBER' = 'KyberNetwork',
  'UNISWAP' = 'Uniswap',
  'OASISDEX' = 'OasisDex',
  'ZEROEXV2' = 'ZeroExV2',
  'ZEROEXV3' = 'ZeroExV3',
}

export interface ExchangeAdapterDefinition {
  id: ExchangeAdapter;
  name: string;
  adapter: string;
  exchange: string;
}

export interface PolicyDefinition {
  id: string;
  name: string;
  signatures: string[];
}

export interface TokenDefinition {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
}

function deploymentExchanges(deployment: DeploymentOutput): ExchangeAdapterDefinition[] {
  const exchanges = [
    deployment.melon && {
      id: ExchangeAdapter.ENGINE,
      name: 'Melon Engine',
      exchange: deployment.melon.addr.Engine,
      adapter: deployment.melon.addr.EngineAdapter,
    },
    deployment.kyber && {
      id: ExchangeAdapter.KYBER,
      name: 'Kyber Network',
      adapter: deployment.melon.addr.KyberAdapter,
      exchange: deployment.kyber.addr.KyberNetworkProxy,
    },
    deployment.uniswap && {
      id: ExchangeAdapter.UNISWAP,
      name: 'Uniswap',
      adapter: deployment.melon.addr.UniswapAdapter,
      exchange: deployment.uniswap.addr.UniswapFactory,
    },
    deployment.oasis && {
      id: ExchangeAdapter.OASISDEX,
      name: 'OasisDex',
      adapter: deployment.melon.addr.OasisDexAdapter,
      exchange: deployment.oasis.addr.OasisDexExchange,
    },
    deployment.zeroExV2 && {
      id: ExchangeAdapter.ZEROEXV2,
      name: '0x (v2)',
      adapter: deployment.melon.addr.ZeroExV2Adapter,
      exchange: deployment.zeroExV2.addr.ZeroExV2Exchange,
    },
    deployment.zeroExV3 && {
      id: ExchangeAdapter.ZEROEXV3,
      name: '0x (v3)',
      adapter: deployment.melon.addr.ZeroExV3Adapter,
      exchange: deployment.zeroExV3.addr.ZeroExV3Exchange,
    },
  ];

  return [...exchanges].filter((value) => !!(value && value.exchange && value.adapter));
}

function deploymentTokens(deployment: DeploymentOutput): TokenDefinition[] {
  const symbols = Object.keys(deployment.tokens.addr);
  const tokens = symbols.map((symbol) => ({
    symbol,
    address: deployment.tokens.addr[symbol],
    decimals: deployment.tokens.conf[symbol].decimals,
    name: deployment.tokens.conf[symbol].name,
  }));

  return tokens;
}

export class Environment {
  public readonly adapters: ExchangeAdapterDefinition[];
  public readonly tokens: TokenDefinition[];

  public static fromDeployment(deployment: DeploymentOutput, options?: EnvironmentOptions) {
    const adapters = (options.adapters ?? []).concat(deploymentExchanges(deployment)).filter((item, index, array) => {
      return index === array.findIndex((inner) => sameAddress(inner.adapter, item.adapter));
    });

    const tokens = (options.tokens ?? []).concat(deploymentTokens(deployment)).filter((item, index, array) => {
      return index === array.findIndex((inner) => sameAddress(inner.address, item.address));
    });

    const opts: EnvironmentOptions = {
      adapters,
      tokens,
    };

    return new this(opts);
  }

  constructor(options?: EnvironmentOptions) {
    this.tokens = options?.tokens ?? [];
    this.adapters = options?.adapters ?? [];
  }

  public getToken(symbol: string): TokenDefinition;
  public getToken(address: Address): TokenDefinition;
  public getToken(which: string | Address): TokenDefinition {
    if (isAddress(which)) {
      return this.getTokenByAddress(which);
    }

    return this.getTokenBySymbol(which);
  }

  public getTokenByAddress(address: Address) {
    return this.tokens.find((token) => sameAddress(address, token.address));
  }

  public getTokenBySymbol(symbol: string) {
    return this.tokens.find((token) => token.symbol === symbol);
  }

  public getAdapter(id: string): ExchangeAdapterDefinition;
  public getAdapter(address: Address): ExchangeAdapterDefinition;
  public getAdapter(which: string | Address): ExchangeAdapterDefinition {
    if (isAddress(which)) {
      return this.getAdapterByAddress(which);
    }

    return this.getAdapterById(which);
  }

  public getAdapterByAddress(address: Address) {
    return this.adapters.find((exchange) => sameAddress(address, exchange.adapter));
  }

  public getAdapterById(id: string) {
    return this.adapters.find((exchange) => exchange.id === id);
  }
}
