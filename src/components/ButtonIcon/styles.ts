import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 56px;
  height: 56px;

  align-items: center;
  justify-content: center;
`;
export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 30,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS_RED,
}))``;
