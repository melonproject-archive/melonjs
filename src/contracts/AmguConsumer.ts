import { AmguConsumerAbi } from '../abis/AmguConsumer';
import { Contract } from '../Contract';
import { Environment } from '../Environment';
import { Address } from '../Address';
import { Token } from './Token';

export class AmguConsumer extends Contract {
  constructor(environment: Environment, address: Address) {
    super(environment, new environment.client.Contract(AccountingAbi, address));
  }

  public async getAmguToken(block?: number) {
    const result = await this.makeCall<Address>('mlnToken', undefined, block);
    const token = Token.findDefinition(this.environment, result);
    return token;
  }

  public async getEngine(block?: number) {
    return await this.makeCall<Address>('engine', undefined, block);
  }

  public async getPriceSource(block?: number) {
    return await this.makeCall<Address>('priceSource', undefined, block);
  }

  public async getVersion(block?: number) {
    return await this.makeCall<Address>('version', undefined, block);
  }
}
