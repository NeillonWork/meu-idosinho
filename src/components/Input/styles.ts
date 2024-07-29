import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const InputButton = styled(TextInput)`
  flex: 1;

  min-height: 48px;
  max-height: 48px;

  border-radius: 6px;
  padding: 12px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_400};
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
