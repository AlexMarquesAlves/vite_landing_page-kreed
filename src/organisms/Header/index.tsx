import { ReactNode } from "react";
// styled-components imports
import { Container } from "./styles";
// molecules imports
import Logo from "../../molecules/Logo";

interface HeaderProps {
  children?: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <Container>
      <Logo />
      <div className="menu">Menu</div>
      <div className="button">Button</div>
    </Container>
  );
}

export default Header;
