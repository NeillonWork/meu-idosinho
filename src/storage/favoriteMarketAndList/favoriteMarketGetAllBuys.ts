import AsyncStorage from "@react-native-async-storage/async-storage";
import { MARKETFAV_COLLECTIONBUY } from "@storage/storageConfig";
import { BuysOnFavoriteMarketDTO } from "./BuysOnFavoriteMarket";

export async function favoriteMarketGetAllBuys(newFavoriteMarket: string) {
  try {
    /* MARKETFAV_COLLECTIONBUY => recupera a lista de compras 
        vinculada newFavoriteMarket(mercado favorito) 
    */
    const storage = await AsyncStorage.getItem(
      `${MARKETFAV_COLLECTIONBUY}-${newFavoriteMarket}`
    );

    const newBuys: BuysOnFavoriteMarketDTO[] = storage ? JSON.parse(storage) : [];

    return newBuys;
  } catch (error) {
    throw error;
  }
}
