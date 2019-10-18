export { estimateGas } from './utils/estimateGas';
export { includesAddress } from './utils/includesAddress';
export { sameAddress } from './utils/sameAddress';
export { transactionOptions } from './utils/transactionOptions';

export { Contract } from './api/Contract';
export { Environment } from './api/Environment';
export { Version } from './api/Version';
export { PriceSource } from './api/PriceSource';
export { Accounting } from './api/Accounting';
export { Token } from './api/Token';
export { Hub } from './api/Hub';

export type Address = string;

export interface DeploymentMetadata {
  deployer: string;
  timestamp: string;
  track: string;
  version: string;
  chain: number;
  description?: string;
}

export interface Deployment {
  meta: DeploymentMetadata;
  exchangeConfigs: { [key: string]: ExchangeConfig };
  melonContracts: MelonContracts;
  thirdPartyContracts: ThirdPartyContracts;
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
  reserveMin: number;
}

export interface ExchangeConfig {
  exchange: string;
  adapter: string;
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
}
