import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Form = styled.View`
  flex-direction: row;
  margin-bottom: 12px;
`;
