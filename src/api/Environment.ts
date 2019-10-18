import { Eth } from 'web3-eth';
import { Contract } from 'web3-eth-contract';
import { path } from 'ramda';
import { Deployment } from '..';

export type ContractName = keyof typeof Environment.aliases;

export interface CacheHandler {
  has: (key: string) => boolean;
  get: (key: string) => any;
  set: (key: string, value: any) => any;
  reset: () => void;
}

export class Environment {
  public static readonly aliases = {
    // Statically deployed contracts.
    '!PriceSource': ['PriceSourceInterface', 'melonContracts.priceSource'],
    '!EthfinexAdapter': ['EthfinexAdapter', 'melonContracts.adapters.ethfinexAdapter'],
    '!KyberAdapter': ['KyberAdapter', 'melonContracts.adapters.kyberAdapter'],
    '!MatchingMarketAdapter': ['MatchingMarketAdapter', 'melonContracts.adapters.matchingMarketAdapter'],
    '!MatchingMarketAccessor': ['MatchingMarketAccessor', 'melonContracts.adapters.matchingMarketAccessor'],
    '!ZeroExAdapter': ['ZeroExV2Adapter', 'melonContracts.adapters.zeroExAdapter'],
    '!EngineAdapter': ['EngineAdapter', 'melonContracts.adapters.engineAdapter'],
    '!PriceTolerance': ['PriceTolerance', 'melonContracts.policies.priceTolerance'],
    '!UserWhitelist': ['UserWhitelist', 'melonContracts.policies.userWhitelist'],
    '!ManagementFee': ['ManagementFee', 'melonContracts.fees.managementFee'],
    '!PerformanceFee': ['PerformanceFee', 'melonContracts.fees.performanceFee'],
    '!AccountingFactory': ['AccountingFactory', 'melonContracts.factories.accountingFactory'],
    '!FeeManagerFactory': ['FeeManagerFactory', 'melonContracts.factories.feeManagerFactory'],
    '!ParticipationFactory': ['ParticipationFactory', 'melonContracts.factories.participationFactory'],
    '!PolicyManagerFactory': ['PolicyManagerFactory', 'melonContracts.factories.policyManagerFactory'],
    '!SharesFactory': ['SharesFactory', 'melonContracts.factories.sharesFactory'],
    '!TradingFactory': ['TradingFactory', 'melonContracts.factories.tradingFactory'],
    '!VaultFactory': ['VaultFactory', 'melonContracts.factories.vaultFactory'],
    '!Engine': ['Engine', 'melonContracts.engine'],
    '!Registry': ['Registry', 'melonContracts.registry'],
    '!Version': ['Version', 'melonContracts.version'],
    '!Ranking': ['FundRanking', 'melonContracts.ranking'],

    // Indiviually deployed contracts.
    '!Hub': ['Hub', undefined],
    '!Accounting': ['Accounting', undefined],

    // Third party.
    '!ERC20': ['ERC20', undefined],
  };

  // Static cache of contract instances.
  private contracts = new Map<string, Contract>();

  constructor(
    public readonly client: Eth,
    public readonly deployment: Deployment,
    public readonly cache?: CacheHandler,
  ) {
    // Nothing to do here for now.
  }

  public getContract(contract: ContractName, address?: string) {
    if (typeof contract !== 'string' || contract.charAt(0) !== '!') {
      throw new Error('The contract location must start with an exclamation mark.');
    }

    if (!Environment.aliases[contract]) {
      throw new Error(`Invalid contract location ${contract}.`);
    }

    const definition = Environment.aliases[contract];
    const addrezz = address || (definition[1] && path<string>(definition[1].split('.'), this.deployment));
    if (!addrezz) {
      throw new Error(`Missing address for ${contract} in deployment.`);
    }

    const name = definition[0];
    const key = `${name}:${addrezz}`;
    if (!this.contracts.has(key)) {
      const abi = require(`../contracts/${name}.abi.json`);
      const instance = new this.client.Contract(abi, addrezz);
      this.contracts.set(key, instance);
      return instance;
    }

    return this.contracts.get(key);
  }
}
