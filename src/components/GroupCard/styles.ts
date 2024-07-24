import styled from "styled-components/native";
import { ShoppingCart } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  width: 100%;

  height: 90px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 6px;
  padding: 24px;
  margin-bottom: 12px;
`;

export const GroupButton = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconMarketplace = styled(ShoppingCart).attrs(({ theme }) => ({
  size: 42,
  weight: "thin",
  color: theme.COLORS.GREEN_500,
}))`
margin-right: 24px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;
