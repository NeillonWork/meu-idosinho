import AsyncStorage from "@react-native-async-storage/async-storage";
import { MARKETFAV_COLLECTION } from "@storage/storageConfig";
import { marketGetAll } from "./marketGetAll";
import { AppError } from "src/utils/AppError";

export async function marketCreate(newMarket: string) {
  // CHAVE: MARKETFAV_COLLECTION
  //VALOR: newMarket
  try {
    // recupera dados salvos(logina na funçao => marketGetAll )
    const storageMarket = await marketGetAll();

    const storageAlreadyExist = storageMarket.includes(newMarket);

    if (storageAlreadyExist) {
      //adicionar erro personalizado aqui e passar a bola pra frente
      throw new AppError("Este Estabelecimento já esta cadastrado");
    }

    // Armazena os dados na storage
    const storage = storageMarket
      ? JSON.stringify([...storageMarket, newMarket])
      : [];
    // armazena a nova informação
    // CHAVE: MARKETFAV_COLLECTION
    // VALOR: storage
    await AsyncStorage.setItem(MARKETFAV_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
