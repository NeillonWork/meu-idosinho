import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;

  min-height: 70px;
  max-height: 70px;

  border-radius: 6px;

  justify-content: center;
  align-items: center;

  padding: 0 12px;
  margin-bottom: 12px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_700};
  
`;
export const Construction = styled.Text` 
color: ${({ theme }) => theme.COLORS.WHITE};;
font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`