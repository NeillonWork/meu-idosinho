import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Highlights } from "@components/Highlights";
import { ButtonsHome } from "@components/ButtonsHome";
import { ButtonIcon } from "@components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

export function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />
      <Highlights
        title="Meu Idosinho!"
        subtitle="Clique em um dos botões abaixo para iniciar!"
      />

      {/* Refatorar: melhorar logica para diminuir a quantidade de função anonima aberta*/}
      <Form>
        <ButtonIcon icon="shopping-cart" />
        <ButtonsHome
          title="Lista de Compras"
          onPress={() => navigation.navigate("shoppingList")}
        />
      </Form>

      <Form>
        <ButtonIcon icon="medication" />
        <ButtonsHome
          title="Lembretes de Medicamentos"
          onPress={() => navigation.navigate("MedicationReminder")}
        />
      </Form>

      <Form>
        <ButtonIcon icon="attach-money" />
        <ButtonsHome
          title="Finanças"
          onPress={() => navigation.navigate("Finance")}
        />
      </Form>

      <Form>
        <ButtonIcon icon="add" />
        <ButtonsHome
          title="Lista personalizada"
          onPress={() => navigation.navigate("shoppingList")}
        />
      </Form>
    </Container>
  );
}
