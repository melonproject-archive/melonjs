import { toUtf8 } from 'web3-utils';
import { HubAbi } from '../abis/Hub';
import { Contract } from './Contract';
import { Environment } from './Environment';

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

export class Hub extends Contract {
  constructor(environment: Environment, address?: string) {
    super(environment, new environment.client.Contract(HubAbi as any, address));
  }

  public async creationTime(block?: number) {
    const result = await this.makeCall('creationTime', undefined, block);
    return new Date(parseInt(`${result}`, 10) * 1000);
  }

  public async creator(block?: number) {
    return this.makeCall<string>('creator', undefined, block);
  }

  public async manager(block?: number) {
    return this.makeCall<string>('manager', undefined, block);
  }

  public async name(block?: number) {
    const result = await this.makeCall<string>('name', undefined, block);
    return result && toUtf8(result);
  }

  public async routes(block?: number) {
    const result = await this.makeCall<FundRoutes>('routes', undefined, block);
    const routes: FundRoutes = {
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
    };

    return routes;
  }
}
