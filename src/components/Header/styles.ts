import styled from "styled-components/native";
import {
  CaretLeft,
  UserCirclePlus,
} from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

 
  export const LogoIcon = styled.Image`
  width: 56px;
  height: 80px;
`;


 /*
export const Logo = styled(UserCirclePlus).attrs(({ theme }) => ({
  size: 56,
  weight: `thin`,
  color: theme.COLORS.GRAY_100,
}))``;*/

export const IconButton = styled(TouchableOpacity)`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GRAY_100,
}))``;
