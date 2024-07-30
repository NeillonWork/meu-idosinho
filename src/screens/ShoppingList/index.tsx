import { useState } from "react";
import { Alert, FlatList, Text } from "react-native";
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

type RouterParams = {
  newFavoriteMarket: string;
};

export function ShoppingList() {
  const route = useRoute();
  const { newFavoriteMarket } = route.params as RouterParams;

  const [addItem, setAddItem] = useState("");
  const [listBuy, setListBuy] = useState<string[]>([]);
  const [itemChecked, setItemChecked] = useState<Record<string, boolean>>({});

  // Função para contar quantos itens estão marcados
  const countCheckedItems = () => {
    return Object.values(itemChecked).filter((checked) => checked).length;
  };

  // ADD ITEM
  function handleAddItem() {
    if (listBuy.includes(addItem) || addItem === "") {
      Alert.alert("Cadastro", `ATENÇÃO: Item em branco, ou já cadastrado!`);
      return;
    }

    setListBuy((prevList) => [...prevList, addItem]);
    setAddItem("");
  }
  //DELETE ITEM
  function handlDeleteItem(remove: string) {
    if (itemChecked[remove] === true) {
      Alert.alert("Deletar", "Item marcado não pode ser deletado!");
      return;
    }

    setListBuy((prevList) => prevList.filter((oldList) => oldList !== remove));
  }

  //CHECKEDITEM
  function handleCheckedItem(checked: string) {
    setItemChecked((prevList) => ({
      ...prevList,
      [checked]: !prevList[checked],
    }));
  }

  return (
    <Container>
      <Header showBackIcon />
      <Highlights
        title="Minhas compras"
        subtitle="Crie sua lista de compras."
      />
      <Form>
        <Input
          title="Digite o item aqui"
          autoCorrect={false}
          style={{ marginEnd: 5 }}
          value={addItem}
          onChangeText={setAddItem}
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
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CardShoppinList
            key={item}
            title={item}
            checkItem={() => handleCheckedItem(item)}
            onRemove={() => handlDeleteItem(item)}
            checkedOn={itemChecked[item]}
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
