import { useState } from "react";
import { Alert, FlatList, Text } from "react-native";

import { Header } from "@components/Header";
import { Highlights } from "@components/Highlights";
import { Input } from "@components/Input";
import { ButtonActions } from "@components/ButtonActios";
import { ButtonIcon } from "@components/ButtonIcon";
import { CardShoppinList } from "@components/CardShoppinList";
import { ListEmpty } from "@components/ListEmpty";

import { Container, Form, ListEmptIcon } from "./styles";

export function ShoppingList() {
  const [addItem, setAddItem] = useState("");
  const [listBuy, setListBuy] = useState<string[]>([]);
  const [itemChecked, setItemChecked] = useState<Record<string, boolean>>({});

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
    setListBuy((prevList) => prevList.filter((oldList) => oldList !== remove));
  }

  //CHECKEDITEM
  function handleCheckedItem(checked: string) {
    setItemChecked((prevList) => ({
      ...prevList,
      [checked]: !prevList[checked],
    }));

    console.log(itemChecked);
  }

  return (
    <Container>
      <Header showBackIcon />
      <Highlights
        title="Minhas compras"
        subtitle="Crie sua lista de compras, e acompanhe os gastos."
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

      {listBuy.length === 0 ? (
        <Form />
      ) : (
        <Form
          style={{
            justifyContent: "space-between",
            borderBottomWidth: 1,
            padding: 12,
            borderColor: "#333",
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>
            Items: {listBuy.length}
          </Text>
          <Text style={{ color: "#fff", fontSize: 20 }}>
            Custo: {listBuy.length}
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
