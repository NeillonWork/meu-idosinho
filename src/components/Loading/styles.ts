import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const IconLoading = styled(ActivityIndicator).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
}))``;
