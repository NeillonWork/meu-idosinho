import AsyncStorage from "@react-native-async-storage/async-storage";
import { MARKETFAV_COLLECTION } from "@storage/storageConfig";

export async function marketGetAll() {
  try {
    //GET nos dados ja salvo no aparelho (retorna como string)
    const storage = await AsyncStorage.getItem(MARKETFAV_COLLECTION);
    const newMaerket: string[] = storage ? JSON.parse(storage) : [];

    return newMaerket;
  } catch (error) {
    throw error;
  }
}
