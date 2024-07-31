import {
  Container,
  ButtonCard,
  ButtonTitle,
  TrashButton,
  TrashIcon,
} from "./styles";
import { ButtonActions } from "@components/ButtonActios";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  onRemove: () => void;
};

export function CardNewShoppinList({ title, onRemove, ...rest }: Props) {
  return (
    <Container {...rest}>
      <ButtonCard {...rest}>
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
