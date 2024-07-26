import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  min-height: 56px;

  justify-content: center;
  padding: 12px;

  margin: 0 6px;

  border-radius: 6px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;

export const Form = styled.View`
  flex-direction: row;
  align-items: center;
`;
