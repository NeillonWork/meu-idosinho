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

import { Container, Form } from "./styles";

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
      <Text style={{ marginBottom: 5 }}>{newFavoriteMarket}</Text>
      {listBuy.length === 0 ? (
        <Form />
      ) : (
        <Form
          style={{
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderColor: "#333",
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              borderWidth: 1,
              padding: 4,
              backgroundColor: "#333",
              borderRadius: 6,
            }}
          >
            T.Lista: {listBuy.length}
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              borderWidth: 1,
              padding: 4,
              backgroundColor: "#333",
              borderRadius: 6,
            }}
          >
            No carrinho: {countCheckedItems()}
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              borderWidth: 1,
              padding: 4,
              backgroundColor: "#333",
              borderRadius: 6,
            }}
          >
            Valor: R$ 243,00
          </Text>
        </Form>
      )}

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
