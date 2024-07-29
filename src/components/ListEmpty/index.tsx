import { Container, ListEmptyIcon, SubTitle, Title } from "./styles";

type Props = {
  title: string;
  subtitle?: string;
};

export function ListEmpty({ title, subtitle }: Props) {
  return (
    <Container>
      <ListEmptyIcon />
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
