import { Address } from './Address';

export interface Deployment {
  meta: DeploymentMetadata;
  exchangeConfigs: { [key: string]: ExchangeConfig };
  melonContracts: MelonContracts;
  thirdPartyContracts: ThirdPartyContracts;
}

export interface DeploymentMetadata {
  deployer: Address;
  timestamp: string;
  track: string;
  version: string;
  chain: number;
  description?: string;
}

export interface Factories {
  accountingFactory: Address;
  feeManagerFactory: Address;
  participationFactory: Address;
  policyManagerFactory: Address;
  sharesFactory: Address;
  tradingFactory: Address;
  vaultFactory: Address;
}

export interface MelonContracts {
  priceSource: Address;
  engine: Address;
  version: Address;
  ranking: Address;
  registry: Address;
  factories: Factories;
  adapters: {
    kyberAdapter: Address;
    zeroExAdapter: Address;
    matchingMarketAdapter: Address;
    matchingMarketAccessor: Address;
    ethfinexAdapter: Address;
    engineAdapter: Address;
  };
  policies: {
    priceTolerance: Address;
    userWhitelist: Address;
  };
  fees: {
    managementFee: Address;
    performanceFee: Address;
  };
}

export interface TokenDefinition {
  address: Address;
  decimals: number;
  symbol: string;
  name: string;
  reserveMin?: number;
}

export interface ExchangeConfig {
  exchange: Address;
  adapter: Address;
  takesCustody: boolean;
}

export interface ThirdPartyContracts {
  tokens: TokenDefinition[];
  exchanges: {
    kyber: KyberEnvironment;
    matchingMarket: Address;
    zeroEx: Address;
    ethfinex: EthfinexEnvironment;
  };
}

export interface KyberEnvironment {
  conversionRates: Address;
  kyberNetwork: Address;
  kyberNetworkProxy: Address;
}

export interface EthfinexEnvironment {
  exchange: Address;
  wrapperRegistryEFX: string;
  wrapperPairs: string[];
  erc20proxy: string;
}
