import { Trash } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 5px;
`;

export const ButtonCard = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  min-height: 48px;
  border-radius: 6px;

  padding-left: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;
export const ButtonTitle = styled.Text`
  flex: 1;
  text-align: left;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const TrashButton = styled.View`
  margin-left: 6px;
`;

export const TrashIcon = styled(Trash).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.WHITE,
}))``;
