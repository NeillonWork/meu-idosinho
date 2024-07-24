import { Container, GroupButton, IconMarketplace, Title } from "./styles";

type Props = {
  options: string;
};

export function GroupCard({ options }: Props) {
  return (
    <Container>
      <GroupButton>
        <IconMarketplace />
        <Title>{options}</Title>
      </GroupButton>
    </Container>
  );
}
