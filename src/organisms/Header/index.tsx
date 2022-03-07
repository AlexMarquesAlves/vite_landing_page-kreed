import { ReactNode } from "react";
// styled-components imports
import { Container } from "./styles";
// molecules imports
import Logo from "../../molecules/Logo";
// organisms imports
import Menu from "../Menu";

interface HeaderProps {
  children?: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <Container>
      <Logo />
      <Menu />
      <div className="button">Button</div>
    </Container>
  );
}

export default Header;
