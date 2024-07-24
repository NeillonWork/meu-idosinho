import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlights } from "@components/Highlights";

export function Home() {
  return (
    <Container>
      <Header />
      <Highlights
        title="Escolha  sua atividade!"
        subtitle="Clique em um dos botões abaixo para iniciar"
      />
    </Container>
  );
}
