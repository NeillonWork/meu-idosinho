import { CheckCircle, CheckFat, CircleDashed, ListDashes, Trash } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 5px;
`;

export const Form = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  min-height: 56px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;
export const Title = styled.Text`
  flex: 1;
  text-align: left;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;
export const CircleIcon = styled(CircleDashed).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_400,
}))``;


export const FormChecked = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  min-height: 56px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const TitleChecked = styled.Text`
  flex: 1;
  text-align: left;
  font-style: italic;
  text-decoration: line-through;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GREEN_700};
  `}
`;

export const CircleIconChecked = styled(CheckFat).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_700,
}))``;

export const TrashButton = styled.View`
  margin-left: 6px;
`;

export const TrashIcon = styled(Trash).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.WHITE,
}))``;