import { ClipboardText } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GREEN_700};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
  `}
  text-align:center;
`;

export const ListEmptyIcon = styled(ClipboardText).attrs(({ theme }) => ({
  size: 50,
  weight: "light",
  color: theme.COLORS.GRAY_400,
}))`
`;
