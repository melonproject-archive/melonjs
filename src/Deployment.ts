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
  uniswap: {
    addr: DeploymentUniswapAddresses;
    conf: DeploymentUniswapConfig;
  };
  zeroExV2: {
    addr: DeploymentZeroExV2Addresses;
    conf: DeploymentZeroExV2Config;
  };
  zeroExV3: {
    addr: DeploymentZeroExV3Addresses;
    conf: DeploymentZeroExV3Config;
  };
  tokens: {
    addr: DeploymentTokenAddresses;
    conf: DeploymentTokenConfig;
  };
}

export interface DeploymentMelonAddresses {
  EthfinexAdapter: string;
  KyberAdapter: string;
  OasisDexAdapter: string;
  OasisDexAccessor: string;
  ZeroExV2Adapter: string;
  ZeroExV3Adapter: string;
  UniswapAdapter: string;
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
    zeroExV2: boolean;
    zeroExV3: boolean;
    ethfinex: boolean;
    engine: boolean;
    uniswap: boolean;
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

export interface DeploymentZeroExV2Addresses {
  ZeroExV2Exchange: string;
  ZeroExV2ERC20Proxy: string;
}

export interface DeploymentZeroExV2Config {}

export interface DeploymentZeroExV3Addresses {
  ZeroExV3Exchange: string;
  ZeroExV3ERC20Proxy: string;
  ZeroExV3Staking: string;
  ZeroExV3StakingProxy: string;
  ZeroExV3ZrxVault: string;
}

export interface DeploymentZeroExV3Config {
  protocolFeeMultiplier: number;
}

export interface DeploymentUniswapAddresses {
  UniswapExchange: string;
  UniswapFactory: string;
}

export interface DeploymentUniswapConfig {}

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
