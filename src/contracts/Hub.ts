import { toUtf8 } from 'web3-utils';
import { HubAbi } from '../abis/Hub';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';

export interface FundRoutes {
  accounting?: Address;
  engine?: Address;
  feeManager?: Address;
  mlnToken?: Address;
  participation?: Address;
  policyManager?: Address;
  priceSource?: Address;
  registry?: Address;
  shares?: Address;
  trading?: Address;
  vault?: Address;
  version?: Address;
}

export class Hub extends Contract {
  constructor(environment: Environment, address?: Address) {
    super(environment, new environment.client.Contract(HubAbi, address));
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
