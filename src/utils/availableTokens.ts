import { DeploymentOutput } from '../Deployment';

export interface TokenDefinition {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  historic: boolean;
}

export function availableTokens(deployment: DeploymentOutput): TokenDefinition[] {
  const symbols = Object.keys(deployment.tokens.addr);
  const tokens = symbols.map((symbol) => ({
    symbol,
    address: deployment.tokens.addr[symbol],
    decimals: deployment.tokens.conf[symbol].decimals,
    name: deployment.tokens.conf[symbol].name,
    historic: false,
  }));

  return tokens;
}
