import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 5px;

  border-radius: 6px;
  padding: 0 0 0 12px;

  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Form = styled.View`
  flex-direction: row;
  min-height: 56px;
  align-items: center;
`;

export const Title = styled.Text`
  flex: 1;
  padding: 12px 12px;
  text-align: start;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;

export const Delete = styled.View`
  width: 50px;
  min-height: 40px;
  align-items: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.RED};
`;
