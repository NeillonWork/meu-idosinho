import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlights } from "@components/Highlights";
import { GroupCard } from "@components/GroupCard";
import { ButtonsHome } from "@components/ButtonsHome";

export function Home() {
  return (
    <Container>
      <Header />
      <Highlights
        title="Bem-vindo ao Meu Idosinho!"
        subtitle="Clique em um dos botões abaixo para iniciar"
      />

      <ButtonsHome style={{ marginBottom: 12 }} title="Lista de Compras" />
      <ButtonsHome style={{ marginBottom: 12 }} title="Lembretes de Medicamentos" />
      <ButtonsHome style={{ marginBottom: 12 }} title="Finanças" />
      <ButtonsHome type="SECONDARY" style={{ marginBottom: 12 }} title="Personalizado" />
    </Container>
  );
}
