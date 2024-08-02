
import AsyncStorage from "@react-native-async-storage/async-storage";
import { favoriteMarketGetAllBuys } from "./favoriteMarketGetAllBuys";
import { MARKETFAV_COLLECTIONBUY } from "@storage/storageConfig";

export async function favoriteDeleteMarketBuys(
  removeBuy: string,
  newFavoriteMarket: string
) {
  const storede = await favoriteMarketGetAllBuys(newFavoriteMarket);

  const filtered = storede.filter((buy) => buy.buydescription !== removeBuy);

  const buys = JSON.stringify(filtered)

  await AsyncStorage.setItem(`${MARKETFAV_COLLECTIONBUY}-${newFavoriteMarket}`, buys)

  return console.log(filtered);
}
