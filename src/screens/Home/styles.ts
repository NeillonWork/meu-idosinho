import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px;
  //align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;

  min-height: 76px;
  max-height: 76px;

  border-radius: 6px;

  justify-content: center;
  align-items: center;
  margin-bottom: 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};


`;
