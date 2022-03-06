import { ReactNode } from "react";

import { Container } from "./styles";

interface HeaderProps {
  children?: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <Container>
      <div className="logo">Logo</div>
      <div className="menu">Menu</div>
      <div className="button">Button</div>
    </Container>
  );
}

export default Header;
