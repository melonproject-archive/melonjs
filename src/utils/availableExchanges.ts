import { DeploymentOutput } from '../Deployment';
import { toChecksumAddress } from 'web3-utils';

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

export function availableExchanges(deployment: DeploymentOutput, includeHistoric?: boolean): ExchangeDefinition[] {
  const exchanges = [
    deployment.melon && {
      name: 'MelonEngine',
      id: ExchangeIdentifier.MelonEngine,
      exchange: deployment.melon.addr.Engine,
      adapter: deployment.melon.addr.EngineAdapter,
      historic: false,
    },
    deployment.kyber && {
      name: 'KyberNetwork',
      id: ExchangeIdentifier.KyberNetwork,
      adapter: deployment.melon.addr.KyberAdapter,
      exchange: deployment.kyber.addr.KyberNetworkProxy,
      historic: false,
    },
    deployment.oasis && {
      name: 'OasisDex',
      id: ExchangeIdentifier.OasisDex,
      adapter: deployment.melon.addr.MatchingMarketAdapter,
      exchange: deployment.oasis.addr.OasisDexExchange,
      historic: false,
    },
    deployment.zeroex && {
      name: 'ZeroEx',
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
      adapter: toChecksumAddress('0x3ecfe6f8414ed517366a5e6f7f7fc74ef21caac9'),
      exchange: toChecksumAddress('0x080bf510fcbf18b91105470639e9561022937712'),
      historic: true,
    },
  ];

  return [...exchanges, ...(includeHistoric && historicExchanges)].filter(
    value => !!(value && value.exchange && value.adapter),
  );
}
