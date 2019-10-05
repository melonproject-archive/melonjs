import { Eth } from 'web3-eth';

export { estimateGas } from './utils/estimateGas';
export { getContract } from './utils/getContract';
export { includesAddress } from './utils/includesAddress';
export { makeCall } from './utils/makeCall';
export { sameAddress } from './utils/sameAddress';
export { sendTransaction } from './utils/sendTransaction';
export { transactionOptions } from './utils/transactionOptions';

export { getFundRoutes } from './methods/Hub/getFundRoutes';
export { getFundName } from './methods/Hub/getFundName';
export { getFundManager } from './methods/Hub/getFundManager';

export { getLastFundId } from './methods/Version/getLastFundId';

export interface Environment {
  eth: Eth;
  deployment: Deployment;
}

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

export interface Token {
  address: string;
  decimals: number;
  symbol: string;
  name: string;
  reserveMin: string;
}

export interface ExchangeConfig {
  exchange: string;
  adapter: string;
}

export interface ThirdPartyContracts {
  tokens: Token[];
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
