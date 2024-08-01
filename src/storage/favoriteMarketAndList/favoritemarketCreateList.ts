import AsyncStorage from "@react-native-async-storage/async-storage";
import { MARKETFAV_COLLECTIONBUY } from "@storage/storageConfig";
import { favoriteMarketGetAllBuys } from "./favoriteMarketGetAllBuys";
import { BuysOnFavoriteMarketDTO } from "./BuysOnFavoriteMarket";
import { AppError } from "src/utils/AppError";

export async function favoritemarketCreateList(
  newBuy: BuysOnFavoriteMarketDTO,
  newFavoriteMarket: string
) {
  try {
    const storadeMBuys = await favoriteMarketGetAllBuys(newFavoriteMarket);
    console.log("Current stored buys:", JSON.stringify(storadeMBuys));
    /*
    const storadeMBuysAlreadyExists = storadeMBuys.filter(
      (buy) => buy.buydescription === newBuy.buydescription
    );
  */

    const storadeMBuysAlreadyExists = storadeMBuys.some(
      (buy) =>
        buy.buydescription === newBuy.buydescription &&
        buy.shopping === newBuy.shopping
    );
    console.log("Does the buy already exist?", storadeMBuysAlreadyExists);
    /*
    if (storadeMBuysAlreadyExists.length > 0) {
      throw new AppError("Este item já foi cadastrado na lista de compras");
*/

    if (storadeMBuysAlreadyExists) {
      throw new AppError("Este item já foi cadastrado na lista de compras");
    }

    const storage = JSON.stringify([...storadeMBuys, newBuy]);

    await AsyncStorage.setItem(
      `${MARKETFAV_COLLECTIONBUY}-${newFavoriteMarket}`,
      storage
    );

   //LImpar storage teste 
  //  await AsyncStorage.clear();
  } catch (error) {
    throw error;
  }
}
