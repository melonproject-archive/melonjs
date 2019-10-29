import Web3 from 'web3';
import { Eth } from 'web3-eth';
import { Address } from '../../Address';
import { Environment, EnvironmentOptions } from '../../Environment';
import { HttpProvider } from 'web3-providers';

interface TestEnvironmentOptions extends EnvironmentOptions {
  accounts: Address[];
}

export class TestEnvironment extends Environment {
  public readonly accounts: Address[];
  public readonly gasPrice: string;

  constructor(client: Eth, options: TestEnvironmentOptions) {
    super(client, options);

    this.accounts = options.accounts;
  }
}

export async function createTestEnvironment(options?: EnvironmentOptions) {
  const port = process.env.GANACHE_PORT || 8545;
  const client = new Web3(new HttpProvider(`http://localhost:${port}`), undefined, {
    transactionConfirmationBlocks: 1,
  });

  const accounts = await client.eth.getAccounts();
  const environment = new TestEnvironment(client.eth, {
    ...options,
    accounts,
  });

  return environment;
}
