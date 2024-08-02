import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonStylesProps = "CONFIRM" | "DELETE" | "DEFAULT";

type Props = {
  type: ButtonStylesProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;

  min-height: 48px;
  max-height: 48px;

  border-radius: 6px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme, type }) =>
    type === "CONFIRM" ? theme.COLORS.GREEN_700 : theme.COLORS.RED};
`;

export const ButtomTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;
