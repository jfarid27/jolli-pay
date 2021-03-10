import { Types } from "zksync-checkout";

export interface Item {
  name: string;
  priceUSD: number;
}

export interface CommerceConfiguration {
  items: [Item],
  acceptedTokens: [Types.TokenLike]
}