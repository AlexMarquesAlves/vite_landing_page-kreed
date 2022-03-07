import { ReactNode } from "react";
import { Container } from "./styles";

import LogoHero from "../../assets/Logo.svg";
interface LogoProps {
  children?: ReactNode;
}

function Logo({ children }: LogoProps) {
  return (
    <Container>
      <img src={LogoHero} alt="Logo" />
      {children}
    </Container>
  );
}

export default Logo;
