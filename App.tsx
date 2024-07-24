import { StatusBar } from "react-native";

import { Home } from "@screens/Home";
import theme from "src/theme";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_300Light,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontLoaded] = useFonts({ Roboto_300Light, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}
