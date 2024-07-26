import { TextInputProps } from "react-native";
import { InputButton } from "./styles";

import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
  title: string;
};

export function Input({ title, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <InputButton
      placeholder={title}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  );
}
