import { Container } from "./styles";

import LogoHero from "../../assets/Logo.svg";

function Logo() {
  return (
    <Container>
      <img src={LogoHero} alt="Logo" />
    </Container>
  );
}

export default Logo;
