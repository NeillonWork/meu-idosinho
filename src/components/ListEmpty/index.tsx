import { Container, ListEmptIcon, SubTitle, Title } from "./styles";

type Props = {
  title: string;
  subtitle?: string;
};

export function ListEmpty({ title, subtitle }: Props) {
  return (
    <Container>
      <ListEmptIcon />
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
