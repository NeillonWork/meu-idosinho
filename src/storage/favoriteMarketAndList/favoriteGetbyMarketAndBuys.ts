import { favoriteMarketGetAllBuys } from "./favoriteMarketGetAllBuys";

export async function favoriteGetbyMarketAndBuys(
  newFavoriteMarket: string,
  buys: string
) {
  try {
    const storage = await favoriteMarketGetAllBuys(newFavoriteMarket);
    const shoppingUp = storage.filter((shoping) => shoping.shopping === buys);

    return shoppingUp;
  } catch (error) {
    throw error;
  }
}
