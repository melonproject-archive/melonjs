export interface DeploymentOutput {
  melon: {
    addr: DeploymentMelonAddresses;
    conf: DeploymentMelonConfig;
  };
  kyber: {
    addr: DeploymentKyberAddresses;
    conf: DeploymentKyberConfig;
  };
  ethfinex: {
    addr: DeploymentEthfinexAddresses;
    conf: DeploymentEthfinexConfig;
  };
  oasis: {
    addr: DeploymentOasisDexAddresses;
    conf: DeploymentOasisDexConfig;
  };
  zeroex: {
    addr: DeploymentZeroExAddresses;
    conf: DeploymentZeroExConfig;
  };
  tokens: {
    addr: DeploymentTokenAddresses;
    conf: DeploymentTokenConfig;
  };
}

export interface DeploymentMelonAddresses {
  EthfinexAdapter: string;
  KyberAdapter: string;
  MatchingMarketAdapter: string;
  MatchingMarketAccessor: string;
  ZeroExV2Adapter: string;
  EngineAdapter: string;
  PriceTolerance: string;
  UserWhitelist: string;
  ManagementFee: string;
  AccountingFactory: string;
  FeeManagerFactory: string;
  ParticipationFactory: string;
  PolicyManagerFactory: string;
  SharesFactory: string;
  TradingFactory: string;
  VaultFactory: string;
  PerformanceFee: string;
  Registry: string;
  Engine: string;
  Version: string;
  TestingPriceFeed?: string;
  KyberPriceFeed?: string;
}

export interface DeploymentMelonConfig {
  priceTolerance: number;
  userWhitelist: string[];
  registryOwner: string;
  engineDelay: number;
  maxSpread: number;
  versionOwner: string;
  initialMGM: string;
  versionName: string;
  exchangeTakesCustody: {
    oasis: boolean;
    kyber: boolean;
    zeroex: boolean;
    ethfinex: boolean;
    engine: boolean;
  };
}

export interface DeploymentKyberAddresses {
  KGT: string;
  ConversionRates: string;
  KyberReserve: string;
  KyberNetwork: string;
  KyberNetworkProxy: string;
  KyberWhiteList: string;
  ExpectedRate: string;
  FeeBurner: string;
}

export interface DeploymentKyberConfig {}

export interface DeploymentOasisDexAddresses {
  OasisDexExchange: string;
}

export interface DeploymentOasisDexConfig {
  closeTime: number;
  quoteToken: string;
}

export interface DeploymentEthfinexAddresses {
  ZeroExV2Exchange: string;
  WrapperRegistryEFX: string;
  WrapperLockEth: string;
  [key: string]: string;
}

export interface DeploymentEthfinexConfig {}

export interface DeploymentZeroExAddresses {
  ZeroExV2Exchange: string;
  ERC20Proxy: string;
}

export interface DeploymentZeroExConfig {}

export interface DeploymentTokenAddresses {
  [key: string]: string;
}

export interface DeploymentTokenConfig {
  [key: string]: DeploymentTokenConfigItem;
}

export interface DeploymentTokenConfigItem {
  name: string;
  decimals: number;
}
