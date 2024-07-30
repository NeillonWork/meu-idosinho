import { ListBullets, ListDashes, PaperPlane } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Form = styled.View`
  flex-direction: row;
  margin-bottom: 12px;
`;

export const FaveMarketCard = styled.View`
  width: 100%;
  padding: 12px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  margin-bottom: 12px;
`;
export const FaveMarketTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;

  margin-bottom: 12px;
`;

export const FaveMarketSubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GREEN_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const FaveMarketIndicators = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const FaveMarketIndicatorsTitle = styled.Text`
  padding: 6px;
  border-radius: 16px;
  min-height: 30px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;
