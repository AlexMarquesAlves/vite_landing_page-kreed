import { ReactNode } from "react";

import { Container } from "./styles";

interface LogoProps {
  children?: ReactNode;
}

function Logo({ children }: LogoProps) {
  return (
    <Container>
      <h1>Logo</h1>
      {children}
    </Container>
  );
}

export default Logo;
