import { ExchangeAdapterAbi } from '../abis/ExchangeAdapter.abi';
import { ParticipationAbi } from '../abis/Participation.abi';
import { encodeFunctionSignature } from './encodeFunctionSignature';

export interface PolicyDefinition {
  id: string;
  name: string;
  signatures: string[];
  historic: boolean;
}

export function availablePolicies(): PolicyDefinition[] {
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
      historic: false,
    },
    {
      id: 'maxPositions',
      name: 'Maximum number of positions',
      signatures: [...tradingSignatures, ...investmentSignatures],
      historic: false,
    },

    {
      id: 'maxConcentration',
      name: 'Maximum concentration',
      signatures: [...tradingSignatures],
      historic: false,
    },
    {
      id: 'userWhitelist',
      name: 'Investor whitelist',
      signatures: [...investmentSignatures],
      historic: false,
    },
    {
      id: 'assetWhitelist',
      name: 'Asset whitelist',
      signatures: [...tradingSignatures, ...investmentSignatures],
      historic: false,
    },
    {
      id: 'assetBlacklist',
      name: 'Asset blacklist',
      signatures: [...tradingSignatures, ...investmentSignatures],
      historic: false,
    },
  ] as PolicyDefinition[];

  return policies;
}
