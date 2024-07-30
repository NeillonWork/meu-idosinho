import AsyncStorage from "@react-native-async-storage/async-storage";
import { marketGetAll } from "./marketGetAll";
import { MARKETFAV_COLLECTION } from "@storage/storageConfig";

export async function marketDelete(remove: string) {
  try {
    const storageMarket = await marketGetAll();
    const filteredMarkets = storageMarket.filter(
      (market: string) => market != remove
    );
    const data = JSON.stringify(filteredMarkets);

    await AsyncStorage.setItem(MARKETFAV_COLLECTION, data);

    // limpar teste
   // await AsyncStorage.clear(MARKETFAV_COLLECTION)
  } catch (error) {
    console.error("Error deleting market:", error);
  }
}
