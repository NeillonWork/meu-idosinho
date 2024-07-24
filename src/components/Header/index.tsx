import { Container, Logo, BackIcon, IconButton } from "./styles";
// import logoImg from "@assets/logo.png";

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
      <Logo />
      {/*<Logo source={logoImg} />*/}
    </Container>
  );
}
