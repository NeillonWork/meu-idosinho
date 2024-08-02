import { useEffect, useRef, useState } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlights } from "@components/Highlights";
import { Input } from "@components/Input";
import { ButtonActions } from "@components/ButtonActios";
import { ButtonIcon } from "@components/ButtonIcon";
import { CardShoppinList } from "@components/CardShoppinList";
import { ListEmpty } from "@components/ListEmpty";

import {
  Container,
  FaveMarketCard,
  FaveMarketIndicators,
  FaveMarketIndicatorsTitle,
  FaveMarketSubTitle,
  FaveMarketTitle,
  Form,
} from "./styles";
import { favoritemarketCreateList } from "@storage/favoriteMarketAndList/favoritemarketCreateList";
import { AppError } from "src/utils/AppError";
import { BuysOnFavoriteMarketDTO } from "@storage/favoriteMarketAndList/BuysOnFavoriteMarket";
import { favoriteGetbyMarketAndBuys } from "@storage/favoriteMarketAndList/favoriteGetbyMarketAndBuys";
import { marketGetAll } from "@storage/favoriteMarket/marketGetAll";

type RouterParams = {
  newFavoriteMarket: string;
};

export function ShoppingList() {
  const route = useRoute();
  const { newFavoriteMarket } = route.params as RouterParams;
  const [addItem, setAddItem] = useState("");

  const [listBuy, setListBuy] = useState<BuysOnFavoriteMarketDTO[]>([]);
  const [itemChecked, setItemChecked] = useState<Record<string, boolean>>({});
  const [sName, setSName] = useState(newFavoriteMarket);
  const [favoriteMarketList, setFavoriteMarketList] = useState<string[]>([]);

  const addItemInputRef = useRef<TextInput>(null);

  //=> Função para contar quantos itens estão marcados
  const countCheckedItems = () => {
    return Object.values(itemChecked).filter((checked) => checked).length;
  };

  //=> ADD ITEM
  async function handleAddItem() {
    if (addItem.trim().length === 0) {
      Alert.alert("Cadastro", `ATENÇÃO: Item em branco`);
      return;
    }

    const addItemBuy = {
      buydescription: addItem,
      shopping: sName,
    };

    try {

      
      await favoritemarketCreateList(addItemBuy, newFavoriteMarket);
      addItemInputRef.current?.blur()

      setAddItem("")
      fetchBuysByMarket();

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Cadastro", error.message);
      }
    }
  }
  //=> DELETE ITEM
  async function handlDeleteItem(remove: string) {
    if (itemChecked[remove] === true) {
      Alert.alert("Deletar", "Item marcado não pode ser deletado!");
      return;
    }
    try {
    } catch (error) {
      console.log(error);
    }
    // setListBuy((prevList) => prevList.filter((oldList) => oldList != remove));
  }
  //=> CHECKEDITEM
  function handleCheckedItem(checked: string) {
    setItemChecked((prevList) => ({
      ...prevList,
      [checked]: !prevList[checked],
    }));
  }

  //=> Carregar lista de compras or Mercado
  async function fetchBuysByMarket() {
    try {
      const buys = await favoriteGetbyMarketAndBuys(newFavoriteMarket, sName);

      console.log(`Fetched buys: ${JSON.stringify(buys)}`);
      setListBuy(buys);
    } catch (error) {
      console.log(error);
    }
  }

  //=> Carregar lista de mercados favoritados
  async function fetchFavoriteMarkets() {
    const data = await marketGetAll();

    setFavoriteMarketList(data);

    console.log(data);
  }

  useEffect(() => {
    fetchBuysByMarket();
    fetchFavoriteMarkets();
  }, [sName]);

  console.log(JSON.stringify(listBuy));

  return (
    <Container>
      <Header showBackIcon />
      <Highlights
        title="Minhas compras"
        subtitle="Crie sua lista de compras."
      />
      <Form>
        <Input
          inputRef={addItemInputRef}
          title="Digite o item aqui"
          autoCorrect={false}
          style={{ marginEnd: 5 }}
          value={addItem}
          onChangeText={setAddItem}
          onSubmitEditing={handleAddItem} //==>ok pelo teclado
          returnKeyType="done" //=> recolher teclado
        />
        <ButtonActions
          options={
            <ButtonIcon icon="add-circle-outline" onPress={handleAddItem} />
          }
          type="PRIMARY"
          onPress={handleAddItem}
        />
      </Form>

      {/*INICIO - COMPONENTIZAR ESTES INDICADORES*/}
      <FaveMarketCard>
        <FaveMarketTitle>
          Favoritos:
          <FaveMarketSubTitle> {newFavoriteMarket}</FaveMarketSubTitle>
        </FaveMarketTitle>
        {listBuy.length === 0 ? (
          <Form />
        ) : (
          <FaveMarketIndicators
            style={{
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderColor: "#333",
              marginBottom: 20,
            }}
          >
            <FaveMarketIndicatorsTitle>
              T.Lista: {listBuy.length}
            </FaveMarketIndicatorsTitle>
            <FaveMarketIndicatorsTitle>
              No carrinho: {countCheckedItems()}
            </FaveMarketIndicatorsTitle>
            <FaveMarketIndicatorsTitle>
              Valor: R$ 243,00
            </FaveMarketIndicatorsTitle>
          </FaveMarketIndicators>
        )}
      </FaveMarketCard>
      {/*FIM - COMPONENTIZAR ESTES INDICADORES*/}

      <FlatList
        data={listBuy}
        keyExtractor={(item) => item.buydescription}
        renderItem={({ item }) => (
          <CardShoppinList
            key={item.buydescription}
            title={item.buydescription}
            checkItem={() => handleCheckedItem(item.buydescription)}
            onRemove={() => handlDeleteItem(item.buydescription)}
            checkedOn={itemChecked[item.buydescription]}
          />
        )}
        ListEmptyComponent={
          <ListEmpty
            title="Lista de compras vazia"
            subtitle="Digite o item dentro da caixa, após clique no botão de `+ adicionar`"
          />
        }
        contentContainerStyle={[
          { paddingBottom: 100 },
          listBuy.length === 0 && { flex: 1 },
        ]}
      />
    </Container>
  );
}
