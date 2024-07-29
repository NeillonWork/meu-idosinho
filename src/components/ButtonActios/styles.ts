import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

 export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY" | "TERTIARY";

type Props ={
  type : ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 48px;

  min-height: 48px;
  max-height: 48px;

  align-items: center;
  justify-content: center;
  border-radius: 6px;

  background-color: ${({ theme, type }) => {
    switch (type) {
      case "PRIMARY":
        return theme.COLORS.GREEN_500;
      case "SECONDARY":
        return theme.COLORS.RED;
      case "TERTIARY":
        return theme.COLORS.GRAY_600;
      default:
        return theme.COLORS.GRAY_600;
    }
  }};
`;
