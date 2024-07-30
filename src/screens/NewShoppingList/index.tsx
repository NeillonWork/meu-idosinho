import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { marketCreate } from "@storage/favoriteMarket/marketCreate";
import { marketGetAll } from "@storage/favoriteMarket/marketGetAll";

import { Header } from "@components/Header";
import { CardNewShoppinList } from "@components/CardNewShoppinList";
import { Highlights } from "@components/Highlights";
import { Button } from "@components/Buttons";
import { Input } from "@components/Input";
import { Container } from "./styles";
import { marketDelete } from "@storage/favoriteMarket/marketDelete";

export function NewShoppingList() {
  const navigation = useNavigation();

  const [newFavoriteMarket, setNewFavoriteMarket] = useState("");
  const [newFavoriteMarketList, setNewFavoriteMarketList] = useState<string[]>(
    []
  );

  //ADD
  async function HandleNewFavorite() {
    try {
      await marketCreate(newFavoriteMarket);
      navigation.navigate("shoppingList", { newFavoriteMarket });
    } catch (error) {
      console.log(error);
    }
  }

  //DELETE
  async function HandleDeleteFavorite(remove: string) {
    setNewFavoriteMarketList((prevList) =>
      prevList.filter((oldList) => oldList != remove)
    );

    await marketDelete(remove);
  }

  //RECUPERANDO LISTA STORAGE
  async function fetchMarketFavorite() {
    try {
      const data = await marketGetAll();

      setNewFavoriteMarketList(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMarketFavorite();
    }, [])
  );

  return (
    <Container>
      <Header showBackIcon />
      <Highlights
        title="Meus favoritos"
        subtitle="Salve um histórico dos estabelecimentos para gerenciar suas pechinchas do mês."
      />

      <Input
        title="Digite o local a ser salvo"
        value={newFavoriteMarket}
        onChangeText={setNewFavoriteMarket}
        style={{ marginBottom: 12 }}
      />

      <Button
        title="Salvar estabelecimento"
        type="CONFIRM"
        style={{ marginBottom: 20 }}
        onPress={HandleNewFavorite}
      />

      <FlatList
        data={newFavoriteMarketList}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CardNewShoppinList
            key={item}
            title={item}
            onRemove={() => {
              HandleDeleteFavorite(item);
            }}
          />
        )}
        ListFooterComponentStyle={{ marginBottom: 12 }}
      />

      <Button title="Lista rapida" type="DEFAULT" onPress={() => {}} />
    </Container>
  );
}
