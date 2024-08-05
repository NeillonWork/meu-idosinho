import { Header } from "@components/Header";
import { Highlights } from "@components/Highlights";
import { Construction, Container, Form } from "./styles";

export function Finance() {
  return (
    <Container>
      <Header showBackIcon />
      <Highlights
        title="Lembrete Financeiro"
        subtitle="Crie lembretes de contas  apagar, avisos personalizados, etc..."
      />
      <Form>
        <Construction>
          Finanças sera disponibilizada na proxima atualização
        </Construction>
      </Form>
    </Container>
  );
}
