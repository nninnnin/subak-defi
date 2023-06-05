import { v4 as uuid } from "uuid";
import { Token } from "@/models";

export function formatAddress(address: string) {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

export function filterTokens(tokenList: Array<Token>) {
  const allowedTokens = ["USDC", "USDT", "WBTC", "DAI", "WETH"];

  return tokenList.filter(
    (token) => allowedTokens.includes(token.symbol) && token.chainId === 1
  );
}

export function addUniqueIds(list: Array<unknown>) {
  return list.map((listItem) => {
    if (listItem instanceof Array) {
      return {
        id: uuid(),
        listItem,
      };
    }

    if (listItem instanceof Object) {
      return {
        id: uuid(),
        ...listItem,
      };
    }

    return {
      id: uuid(),
      listItem,
    };
  });
}
