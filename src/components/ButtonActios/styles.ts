import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

 export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY" | "TERTIARY";

type Props ={
  type : ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 56px;

  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;
  align-items: center;
  justify-content: center;

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
