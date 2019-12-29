import { DeploymentOutput } from '../Deployment';

export interface ExchangeDefinition {
  name: string;
  exchange: string;
  adapter: string;
}

export function availableExchanges(deployment: DeploymentOutput): ExchangeDefinition[] {
  const exchanges = [
    deployment.melon && {
      name: 'MelonEngine',
      exchange: deployment.melon.addr.Engine,
      adapter: deployment.melon.addr.EngineAdapter,
    },
    deployment.kyber && {
      name: 'KyberNetwork',
      adapter: deployment.melon.addr.KyberAdapter,
      exchange: deployment.kyber.addr.KyberNetworkProxy,
    },
    deployment.oasis && {
      name: 'OasisDex',
      adapter: deployment.melon.addr.MatchingMarketAdapter,
      exchange: deployment.oasis.addr.MatchingMarket,
    },
    deployment.zeroex && {
      name: 'ZeroEx',
      adapter: deployment.melon.addr.ZeroExV2Adapter,
      exchange: deployment.zeroex.addr.Exchange,
    },
  ];

  return exchanges.filter(value => !!(value && value.exchange && value.adapter));
}
