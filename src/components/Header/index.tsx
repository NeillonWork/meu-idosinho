import { useNavigation } from "@react-navigation/native";
import { Container,  BackIcon, IconButton, LogoIcon } from "./styles";
import logoImg from "@assets/logo.png";

type Props = {
  showBackIcon?: boolean;
};

export function Header({ showBackIcon = false }: Props) {
  const navigate = useNavigation();

  function handleHomeBack(){
    navigate.navigate('home')
  }

  return (
    <Container>
      {showBackIcon && (
        <IconButton onPress={handleHomeBack}>
          <BackIcon />
        </IconButton>
      )}
     {/* <Logo />*/}
     <LogoIcon source={logoImg} />
    </Container>
  );
}
