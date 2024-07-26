import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Highlights } from "@components/Highlights";
import { Input } from "@components/Input";
import { ButtonActions } from "@components/ButtonActios";
import { ButtonIcon } from "@components/ButtonIcon";
import { useState } from "react";
import { FlatList, Text } from "react-native";
import { ListShoppinADD } from "@components/ListShoppingAdd";

export function ShoppingList() {
  // const [addListCount, setAddListCount] = useState(["Items: ", "Valor: "]);
  const [listBuy, setListBuy] = useState<string[]>([
    "Pao",
    "Carne moida",
    "Repolho",
  ]);

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
        />
        <ButtonActions
          options={<ButtonIcon icon="add-circle-outline" />}
          type="PRIMARY"
        />
      </Form>

      {/*INICIO - COMPONENTIZAR ESTES INDICADORES*/}
      <Form
        style={{
          justifyContent: "space-between",
          borderWidth: 1,
          padding: 12,
          backgroundColor: "#333",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 30 }}>
          Items: {listBuy.length}
        </Text>
        <Text style={{ color: "#fff", fontSize: 30 }}>
          Custo: {listBuy.length}
        </Text>
      </Form>
        {/*FIM - COMPONENTIZAR ESTES INDICADORES*/}

      <FlatList
        data={listBuy}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Form>
            <ButtonActions
              options={<ButtonIcon icon="add-circle-outline" />}
              type="TERTIARY"
            />
            <ListShoppinADD title={item} />

            <ButtonActions
              options={<ButtonIcon icon="delete" />}
              type="SECONDARY"
            />
          </Form>
        )}
      />
    </Container>
  );
}
