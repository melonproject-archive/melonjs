import { makeCall, BasicCallConfig } from '../../utils/makeCall';

export interface FundRoutes {
  accounting?: string;
  engine?: string;
  feeManager?: string;
  mlnToken?: string;
  participation?: string;
  policyManager?: string;
  priceSource?: string;
  registry?: string;
  shares?: string;
  trading?: string;
  vault?: string;
  version?: string;
}

export const getFundRoutes = async (config: BasicCallConfig, address: string) => {
  const result = await makeCall<FundRoutes>({
    ...config,
    address,
    contract: 'Hub',
    method: 'routes',
  });

  return {
    accounting: result.accounting,
    engine: result.engine,
    feeManager: result.feeManager,
    mlnToken: result.mlnToken,
    participation: result.participation,
    policyManager: result.policyManager,
    priceSource: result.priceSource,
    registry: result.registry,
    shares: result.shares,
    trading: result.trading,
    vault: result.vault,
    version: result.version,
  } as FundRoutes;
};
