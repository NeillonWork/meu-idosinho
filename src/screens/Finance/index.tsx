import { Header } from "@components/Header";
import { Highlights } from "@components/Highlights";

export function Finance() {
  return (
    <>
      <Header showBackIcon />
      <Highlights
        title="Lembrete Financeiro"
        subtitle="Crie lembretes de contas  apagar, avisos personalizados, etc..."
      />
    </>
  );
}
