import { InputButton } from "./styles";
import { TextInputProps } from "react-native";

type Props = TextInputProps & {
  title: string;
};

export function Input({ title, ...rest }: Props) {
  return (<InputButton placeholder={title} {...rest}></InputButton>)
}
