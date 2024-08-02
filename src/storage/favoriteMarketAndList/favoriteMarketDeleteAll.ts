//=> Deleta o mercado e todas suas compras vinculadas 
import AsyncStorage from "@react-native-async-storage/async-storage";
import { marketGetAll } from "@storage/favoriteMarket/marketGetAll";
import { MARKETFAV_COLLECTION, MARKETFAV_COLLECTIONBUY } from "@storage/storageConfig";

export async function favoriteMarketDeleteAll(MarketbuysDeleted: string) {
  
    const stored = await marketGetAll()
    const filtered = stored.filter(favMarket => favMarket !== MarketbuysDeleted)

    const removedeMarket = JSON.stringify(filtered)


    await AsyncStorage.setItem(`${MARKETFAV_COLLECTION}`, removedeMarket)

    await AsyncStorage.removeItem(`${MARKETFAV_COLLECTIONBUY}-${MarketbuysDeleted}`,)

     return console.log(JSON.stringify(filtered))
}
