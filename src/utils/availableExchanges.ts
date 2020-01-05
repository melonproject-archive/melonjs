import { DeploymentOutput } from '../Deployment';

export enum ExchangeIdentifier {
  'MelonEngine' = 'MelonEngine',
  'KyberNetwork' = 'KyberNetwork',
  'OasisDex' = 'OasisDex',
  'ZeroEx' = 'ZeroEx',
}

export interface ExchangeDefinition {
  id: ExchangeIdentifier;
  name: string;
  exchange: string;
  adapter: string;
}

export function availableExchanges(deployment: DeploymentOutput): ExchangeDefinition[] {
  const exchanges = [
    deployment.melon && {
      name: 'MelonEngine',
      id: ExchangeIdentifier.MelonEngine,
      exchange: deployment.melon.addr.Engine,
      adapter: deployment.melon.addr.EngineAdapter,
    },
    deployment.kyber && {
      name: 'KyberNetwork',
      id: ExchangeIdentifier.KyberNetwork,
      adapter: deployment.melon.addr.KyberAdapter,
      exchange: deployment.kyber.addr.KyberNetworkProxy,
    },
    deployment.oasis && {
      name: 'OasisDex',
      id: ExchangeIdentifier.OasisDex,
      adapter: deployment.melon.addr.MatchingMarketAdapter,
      exchange: deployment.oasis.addr.OasisDexExchange,
    },
    deployment.zeroex && {
      name: 'ZeroEx',
      id: ExchangeIdentifier.ZeroEx,
      adapter: deployment.melon.addr.ZeroExV2Adapter,
      exchange: deployment.zeroex.addr.ZeroExV2Exchange,
    },
  ];

  return exchanges.filter(value => !!(value && value.exchange && value.adapter));
}
