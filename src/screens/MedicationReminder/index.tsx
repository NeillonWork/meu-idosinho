import { Header } from "@components/Header";
import { Highlights } from "@components/Highlights";
import { Construction, Container, Form } from "./styles";

export function MedicationReminder() {
  return (
    <Container>
      <Header showBackIcon />
      <Highlights
        title="Lembrete Medicação"
        subtitle="Crie alarmes personalizados para tomar suas medicações"
      />
      <Form>
        <Construction>
          Medicamentos sera disponibilizada na proxima atualização
        </Construction>
      </Form>
    </Container>
  );
}
