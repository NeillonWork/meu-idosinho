import { useNavigation } from "@react-navigation/native";

import { Container, DevIcon, Form, Section, Sobre } from "./styles";
import { Header } from "@components/Header";
import { Highlights } from "@components/Highlights";
import { ButtonsHome } from "@components/ButtonsHome";
import { ButtonIcon } from "@components/ButtonIcon";

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
          onPress={() => navigation.navigate("newshoppingList")}
        />
      </Form>

      <Form>
        <ButtonIcon icon="medication" />
        <ButtonsHome
          title="Lembretes de Medicamentos"
          onPress={() => navigation.navigate("medicationReminder")}
        />
      </Form>

      <Form>
        <ButtonIcon icon="attach-money" />
        <ButtonsHome
          title="Finanças"
          onPress={() => navigation.navigate("finance")}
        />
      </Form>

      <Section>
        <DevIcon />
        <Sobre>
          Meu Idosinho é um aplicativo intuitivo e acessível, projetado para
          ajudar idosos a gerenciar suas tarefas diárias com a assistência de um
          smartphone.{'\n'}
          {'\n'} -- VERSÃO ALPHA 1.0
          {'\n'} -- DEV: Neillon A.Oliveira
        </Sobre>
      </Section>
    </Container>
  );
}
