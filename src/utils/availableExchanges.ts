import { DeploymentOutput } from '../Deployment';

export enum ExchangeIdentifier {
  'MelonEngine' = 'MelonEngine',
  'KyberNetwork' = 'KyberNetwork',
  'OasisDex' = 'OasisDex',
  'ZeroExV2' = 'ZeroExV2',
  'ZeroExV3' = 'ZeroExV3',
}

export interface ExchangeDefinition {
  id: ExchangeIdentifier | string;
  name: string;
  exchange: string;
  adapter: string;
  historic: boolean;
}

export function availableExchanges(deployment: DeploymentOutput): ExchangeDefinition[] {
  const exchanges = [
    deployment.melon && {
      name: 'Melon Engine',
      id: ExchangeIdentifier.MelonEngine,
      exchange: deployment.melon.addr.Engine,
      adapter: deployment.melon.addr.EngineAdapter,
      historic: false,
    },
    deployment.kyber && {
      name: 'Kyber Network',
      id: ExchangeIdentifier.KyberNetwork,
      adapter: deployment.melon.addr.KyberAdapter,
      exchange: deployment.kyber.addr.KyberNetworkProxy,
      historic: false,
    },
    deployment.oasis && {
      name: 'OasisDex',
      id: ExchangeIdentifier.OasisDex,
      adapter: deployment.melon.addr.OasisDexAdapter,
      exchange: deployment.oasis.addr.OasisDexExchange,
      historic: false,
    },
    deployment.zeroExV2 && {
      name: '0x Protocol (v. 2.1)',
      id: ExchangeIdentifier.ZeroExV2,
      adapter: deployment.melon.addr.ZeroExV2Adapter,
      exchange: deployment.zeroExV2.addr.ZeroExV2Exchange,
      historic: false,
    },
    deployment.zeroExV3 && {
      name: '0x Protocol (v. 3.0)',
      id: ExchangeIdentifier.ZeroExV3,
      adapter: deployment.melon.addr.ZeroExV3Adapter,
      exchange: deployment.zeroExV3.addr.ZeroExV3Exchange,
      historic: false,
    },
  ];

  return [...exchanges].filter(value => !!(value && value.exchange && value.adapter));
}
