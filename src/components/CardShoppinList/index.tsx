import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Delete, Form, Title } from "./styles";

type Props = {
  title: string;
  checkItem: () => void;
  onRemove: () => void;
};

export function CardShoppinList({ title, checkItem, onRemove }: Props) {
  return (
    <Container>
      <Form>
        <ButtonIcon
          icon="check-circle-outline"
          type="PRIMARY"
          onPress={checkItem}
        />
        <Title>{title}</Title>

        <Delete>
          <ButtonIcon icon="delete-outline" type="PRIMARY" onPress={onRemove} />
        </Delete>
      </Form>
    </Container>
  );
}
