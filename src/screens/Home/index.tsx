import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlights } from "@components/Highlights";
import { GroupCard } from "@components/GroupCard";

export function Home() {
  const [options, SetOptions] = useState<string[]>([
    "Minhas compras",
    "Controle de Finanças",
    "Agendar Remédios",
    "Lista personalizada",
  ]);

  return (
    <Container>
      <Header />
      <Highlights
        title="Escolha  sua atividade!"
        subtitle="Clique em um dos botões abaixo para iniciar"
      />

      <FlatList
        data={options}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard key={item} options={item} />}
      />
    </Container>
  );
}
