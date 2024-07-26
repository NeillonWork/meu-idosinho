import { TouchableOpacityProps } from "react-native";
import { Container, ButtonTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps &{
  options: React.ReactNode;
  type: ButtonTypeStyleProps
};

export function ButtonActions({ options, type="PRIMARY", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
    {options}
    </Container>
  );
}
