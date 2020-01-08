import { ExchangeAdapterAbi } from '../abis/ExchangeAdapter.abi';
import { ParticipationAbi } from '../abis/Participation.abi';
import { encodeFunctionSignature } from './encodeFunctionSignature';

export interface PolicyDefinition {
  id: string;
  name: string;
  signatures: string[];
}

const tradingSignatures = [
  encodeFunctionSignature(ExchangeAdapterAbi, 'makeOrder'),
  encodeFunctionSignature(ExchangeAdapterAbi, 'takeOrder'),
];

const investmentSignatures = [encodeFunctionSignature(ParticipationAbi, 'requestInvestment')];

const priceTolerance: PolicyDefinition = {
  id: 'priceTolerance',
  name: 'Price tolerance',
  signatures: [...tradingSignatures],
};

const maxPositions: PolicyDefinition = {
  id: 'maxPositions',
  name: 'Maximum number of positions',
  signatures: [...tradingSignatures, ...investmentSignatures],
};

const maxConcentration: PolicyDefinition = {
  id: 'maxConcentration',
  name: 'Maximum concentration',
  signatures: [...tradingSignatures, ...investmentSignatures],
};

const userWhitelist: PolicyDefinition = {
  id: 'userWhitelist',
  name: 'User whitelist',
  signatures: [...investmentSignatures],
};

const assetWhitelist: PolicyDefinition = {
  id: 'assetWhitelist',
  name: 'Asset whitelist',
  signatures: [...tradingSignatures, ...investmentSignatures],
};

const assetBlacklist: PolicyDefinition = {
  id: 'assetBlacklist',
  name: 'Asset blacklist',
  signatures: [...tradingSignatures, ...investmentSignatures],
};

export const availablePolicies = [
  priceTolerance,
  maxPositions,
  maxConcentration,
  userWhitelist,
  assetWhitelist,
  assetBlacklist,
];
