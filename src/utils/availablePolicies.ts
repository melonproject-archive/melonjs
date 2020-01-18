import { ExchangeAdapterAbi } from '../abis/ExchangeAdapter.abi';
import { ParticipationAbi } from '../abis/Participation.abi';
import { encodeFunctionSignature } from './encodeFunctionSignature';

export interface PolicyDefinition {
  id: string;
  name: string;
  signatures: string[];
  historic?: boolean;
}

const historicPolicies = [] as PolicyDefinition[];

export function availablePolicies(includeHistoric?: boolean): PolicyDefinition[] {
  const tradingSignatures = [
    encodeFunctionSignature(ExchangeAdapterAbi, 'makeOrder'),
    encodeFunctionSignature(ExchangeAdapterAbi, 'takeOrder'),
  ];

  const investmentSignatures = [encodeFunctionSignature(ParticipationAbi, 'requestInvestment')];

  const policies = [
    {
      id: 'priceTolerance',
      name: 'Price tolerance',
      signatures: [...tradingSignatures],
    },

    {
      id: 'maxPositions',
      name: 'Maximum number of positions',
      signatures: [...tradingSignatures, ...investmentSignatures],
    },

    {
      id: 'maxConcentration',
      name: 'Maximum concentration',
      signatures: [...tradingSignatures, ...investmentSignatures],
    },
    {
      id: 'userWhitelist',
      name: 'Investor whitelist',
      signatures: [...investmentSignatures],
    },
    {
      id: 'assetWhitelist',
      name: 'Asset whitelist',
      signatures: [...tradingSignatures, ...investmentSignatures],
    },
    {
      id: 'assetBlacklist',
      name: 'Asset blacklist',
      signatures: [...tradingSignatures, ...investmentSignatures],
    },
  ] as PolicyDefinition[];

  return [...policies, ...(includeHistoric && historicPolicies)];
}
