import { Container,  BackIcon, IconButton, LogoIcon } from "./styles";
import logoImg from "@assets/logo.png";

type Props = {
  showBackIcon?: boolean;
};

export function Header({ showBackIcon = false }: Props) {
  return (
    <Container>
      {showBackIcon && (
        <IconButton>
          <BackIcon />
        </IconButton>
      )}
     {/* <Logo />*/}
     <LogoIcon source={logoImg} />
    </Container>
  );
}
