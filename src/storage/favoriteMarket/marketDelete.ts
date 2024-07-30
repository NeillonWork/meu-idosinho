import AsyncStorage from "@react-native-async-storage/async-storage";

async  function marketDelete(remove: string) {
    try {
      const data = await AsyncStorage.getItem('marketFavorites');
      const markets = data ? JSON.parse(data) : [];
  
      const filteredMarkets = markets.filter((market: string) => market !== remove);
  
      await AsyncStorage.setItem('marketFavorites', JSON.stringify(filteredMarkets));
    } catch (error) {
      console.log(error);
    }
  }

  export {marketDelete}