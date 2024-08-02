import { TextInput, TextInputProps } from "react-native";
import { InputButton } from "./styles";

import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
  title: string;
  inputRef: React.RefObject<TextInput>;
};

export function Input({ title, inputRef, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <InputButton
      ref={inputRef}
      placeholder={title}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  );
}
