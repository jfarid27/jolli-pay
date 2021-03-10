import { Types } from "zksync-checkout";
import axios from 'axios';

/**
 * The base currencies.
 */
export enum BaseCurrency { USD = "USD" };

/**
 * Data about an item and it's cost.
 */
export interface Item {
  name: string;
  price: number;
  currency: BaseCurrency;
}

/**
 * Commerce configuration data holding list of items and accepted tokens.
 */
export interface CommerceConfiguration {
  items: [Item],
  acceptedTokens: [Types.TokenLike]
}

/**
 * Converts price to a given token amount.
 * @param value 
 */
export const convertPrice = async (item: Item, token: Types.TokenLike) => {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids={item.currency}&vs_currencies={token}`;
  const result = await axios.get(url);
  return result.data[item.currency][token];
}