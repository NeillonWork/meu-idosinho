import { Header } from "@components/Header";
import { Highlights } from "@components/Highlights";

export function MedicationReminder() {
  return (
    <>
    <Header  showBackIcon/>
      <Highlights
        title="Lembrete Medicação"
        subtitle="Crie alarmes personalizados para tomar suas medicações"
      />
    </>
  );
}
