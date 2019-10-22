export interface Deployment {
  meta: DeploymentMetadata;
  exchangeConfigs: { [key: string]: ExchangeConfig };
  melonContracts: MelonContracts;
  thirdPartyContracts: ThirdPartyContracts;
}

export interface DeploymentMetadata {
  deployer: string;
  timestamp: string;
  track: string;
  version: string;
  chain: number;
  description?: string;
}

export interface Factories {
  accountingFactory: string;
  feeManagerFactory: string;
  participationFactory: string;
  policyManagerFactory: string;
  sharesFactory: string;
  tradingFactory: string;
  vaultFactory: string;
}

export interface MelonContracts {
  priceSource: string;
  engine: string;
  version: string;
  ranking: string;
  registry: string;
  factories: Factories;
  adapters: {
    kyberAdapter: string;
    zeroExAdapter: string;
    matchingMarketAdapter: string;
    matchingMarketAccessor: string;
    ethfinexAdapter: string;
    engineAdapter: string;
  };
  policies: {
    priceTolerance: string;
    userWhitelist: string;
  };
  fees: {
    managementFee: string;
    performanceFee: string;
  };
}

export interface TokenDefinition {
  address: string;
  decimals: number;
  symbol: string;
  name: string;
  reserveMin?: number;
}

export interface ExchangeConfig {
  exchange: string;
  adapter: string;
  takesCustody: boolean;
}

export interface ThirdPartyContracts {
  tokens: TokenDefinition[];
  exchanges: {
    kyber: KyberEnvironment;
    matchingMarket: string;
    zeroEx: string;
    ethfinex: EthfinexEnvironment;
  };
}

export interface KyberEnvironment {
  conversionRates: string;
  kyberNetwork: string;
  kyberNetworkProxy: string;
}

export interface EthfinexEnvironment {
  exchange: string;
  wrapperRegistryEFX: string;
  wrapperPairs: string[];
  erc20proxy: string;
}
