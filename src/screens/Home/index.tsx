import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Highlights } from "@components/Highlights";
import { ButtonsHome } from "@components/ButtonsHome";
import { ButtonIcon } from "@components/ButtonIcon";

export function Home() {
  return (
    <Container>
      <Header />
      <Highlights
        title="Meu Idosinho!"
        subtitle="Clique em um dos botões abaixo para iniciar!"
      />
      <Form>
        <ButtonIcon icon="shopping-cart" />
        <ButtonsHome title="Lista de Compras" />
      </Form>

      <Form>
        <ButtonIcon icon="medication" />
        <ButtonsHome title="Lembretes de Medicamentos" />
      </Form>

      <Form>
        <ButtonIcon icon="attach-money" />
        <ButtonsHome title="Finanças" />
      </Form>

      <Form>
        <ButtonIcon icon="add" />
        <ButtonsHome title="Lista personalizada" />
      </Form>
    </Container>
  );
}
