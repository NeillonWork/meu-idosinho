import { TouchableOpacityProps } from "react-native";
import { ButtomTitle, Container, ButtonStylesProps } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonStylesProps;
};

export function Button({ title, type = "CONFIRM", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <ButtomTitle>{title}</ButtomTitle>
    </Container>
  );
}
