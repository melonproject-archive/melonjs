import { DeploymentOutput } from '../Deployment';

export enum ExchangeIdentifier {
  'MelonEngine' = 'MelonEngine',
  'KyberNetwork' = 'KyberNetwork',
  'OasisDex' = 'OasisDex',
  'ZeroEx' = 'ZeroEx',
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
    deployment.zeroex && {
      name: '0x Protocol',
      id: ExchangeIdentifier.ZeroEx,
      adapter: deployment.melon.addr.ZeroExV2Adapter,
      exchange: deployment.zeroex.addr.ZeroExV2Exchange,
      historic: false,
    },
  ];

  const historicExchanges = [
    {
      name: 'ZeroEx (v. 2.0)',
      id: 'ZeroExV20',
      adapter: '0x3ECFe6F8414ED517366a5e6f7F7FC74EF21CAac9',
      exchange: '0x4F833a24e1f95D70F028921e27040Ca56E09AB0b',
      historic: true,
    },
  ];

  return [...exchanges, ...historicExchanges].filter(value => !!(value && value.exchange && value.adapter));
}
