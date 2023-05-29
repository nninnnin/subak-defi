export interface Token {
  id?: string;
  address: string;
  chainId: number;
  decimals: number;
  extensions: { bridgeInfo: unknown };
  logoURI: string;
  name: string;
  symbol: string;
}
