import {
  CircleIcon,
  CircleIconChecked,
  Container,
  Form,
  FormChecked,
  Title,
  TitleChecked,
  TrashButton,
  TrashIcon,
} from "./styles";
import { ButtonActions } from "@components/ButtonActios";

type Props = {
  title: string;
  checkItem: () => void;
  onRemove: () => void;
  checkedOn: boolean;
};

export function CardShoppinList({
  title,
  checkItem,
  onRemove,
  checkedOn,
}: Props) {
  return (
    <Container>
      {checkedOn ? (
        <FormChecked>
          <ButtonActions
            type="PRIMARY"
            options={<CircleIconChecked />}
            onPress={checkItem}
            style={{ backgroundColor: "transparent" }}
          />
          <TitleChecked>{title}</TitleChecked>
        </FormChecked>
      ) : (
        <Form>
          <ButtonActions
            type="PRIMARY"
            options={<CircleIcon />}
            onPress={checkItem}
            style={{ backgroundColor: "transparent" }}
          />
          <Title>{title}</Title>
        </Form>
      )}

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
