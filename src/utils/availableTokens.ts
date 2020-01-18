import { DeploymentOutput } from '../Deployment';

export interface TokenDefinition {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  historic?: boolean;
}

function replaceProperties(token: TokenDefinition): Partial<TokenDefinition> {
  switch (token.symbol) {
    case 'WETH':
      return { name: 'Wrapped Ether' };
    case 'ZRX':
      return { name: '0x protocol token' };
    case 'MKR':
      return { name: 'Maker token' };
    default:
      return {};
  }
}

const historicTokens = [] as TokenDefinition[];

export function availableTokens(deployment: DeploymentOutput, includeHistoric?: boolean): TokenDefinition[] {
  const symbols = Object.keys(deployment.tokens.addr);
  const tokens = symbols
    .map(symbol => ({
      symbol,
      address: deployment.tokens.addr[symbol],
      decimals: deployment.tokens.conf[symbol].decimals,
      name: deployment.tokens.conf[symbol].name,
    }))
    .map(token => {
      return { ...token, ...replaceProperties(token) };
    });

  return [...tokens, ...(includeHistoric && historicTokens)];
}
