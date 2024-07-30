import {
  Container,
  ButtonCard,
  ButtonTitle,
  TrashButton,
  TrashIcon,
} from "./styles";
import { ButtonActions } from "@components/ButtonActios";

type Props = {
  title: string;
  onRemove: () => void;
};

export function CardNewShoppinList({ title, onRemove }: Props) {
  return (
    <Container>
      <ButtonCard>
        <ButtonTitle>{title}</ButtonTitle>
      </ButtonCard>

      <TrashButton>
        <ButtonActions
          type="SECONDARY"
          options={<TrashIcon />}
          onPress={onRemove}
        />
      </TrashButton>
    </Container>
  );
}
