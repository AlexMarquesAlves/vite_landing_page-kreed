import { ReactNode } from "react";
// styled-components imports
import { Container } from "./styles";
// atoms imports
import Button from "../../atoms/Button";
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
      <Button />
    </Container>
  );
}

export default Header;
