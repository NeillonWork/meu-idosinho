import { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";
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
import { AppError } from "src/utils/AppError";
import { favoriteMarketDeleteAll } from "@storage/favoriteMarketAndList/favoriteMarketDeleteAll";

export function NewShoppingList() {
  const navigation = useNavigation();

  const [newFavoriteMarket, setNewFavoriteMarket] = useState("");
  const [newFavoriteMarketList, setNewFavoriteMarketList] = useState<string[]>(
    []
  );

  //ADD
  async function HandleNewFavorite() {
    try {
      if (newFavoriteMarket.trim().length === 0) {
        Alert.alert("Novo estabelecimeto:", "Informe o local a ser salvo!");

        return;
      }

      await marketCreate(newFavoriteMarket);
      navigation.navigate("shoppingList", { newFavoriteMarket });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo estabelecimeto:", error.message);
      } else {
        console.log(error);
      }
    }
  }

  /*
  //DELETE
  async function HandleDeleteFavorite(remove: string) {
    await marketDelete(remove);

    setNewFavoriteMarketList((prevList) =>
      prevList.filter((oldList) => oldList != remove)
    );
  }
 */

  //=> Decisão deletar tudo (Y/N)
  async function HandleDeleteFavorite(removeMarketAll: string) {
    Alert.alert(
      "Remover",
      "Deseja remover este mercado e todo historico de compras vinculado a ele ?",
      [
        { text: "Não", style: "cancel" },
        { text: "Sim", onPress: () => removeAll(removeMarketAll) },
      ]
    );
  }
  //=> DELETA MERCADO E TODOS OS ITENS VINCULADOS
  async function removeAll(removeMarketAll: string) {
    try {
      await favoriteMarketDeleteAll(removeMarketAll);

      fetchMarketFavorite();
    } catch (error) {
      Alert.alert("Remover", "Ocorreu um erro ao deletar este mercado");
      console.log(error);
    }
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

  function handleFavMarketOpen(newFavoriteMarket: string) {
    navigation.navigate("shoppingList", { newFavoriteMarket });
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
            onPress={() => handleFavMarketOpen(item)}
          />
        )}
        ListFooterComponentStyle={{ marginBottom: 12 }}
      />

      <Button title="Lista rapida" type="DEFAULT" onPress={() => {}} />
    </Container>
  );
}
