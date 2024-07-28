import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LogoIcon = styled.Image`
  width: 56px;
  height: 80px;
`;

export const IconButton = styled(TouchableOpacity)`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GRAY_100,
}))``;
