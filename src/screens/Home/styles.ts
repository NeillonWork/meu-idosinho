import styled from "styled-components/native";
import { Info, PhosphorLogo } from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;

  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;

  border-radius: 6px;

  justify-content: center;
  align-items: center;

  padding: 0 12px;
  margin-bottom: 12px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_700};
`;

export const Section = styled.View`
  width: 100%;
  margin-top: 24px;

  justify-content: center;
  align-items: center;

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};

  padding: 12px;

  border-radius: 22px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;
export const Sobre = styled.Text`
margin-top: 24px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const DevIcon = styled(Info).attrs(({theme}) => ({
  size: 40,
  color: theme.COLORS.GRAY_200
}))``