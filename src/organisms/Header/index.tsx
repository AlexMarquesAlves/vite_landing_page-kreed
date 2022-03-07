// styled-components imports
import { Container } from "./styles";
// atoms imports
import Button from "../../atoms/Button";
// molecules imports
import Logo from "../../molecules/Logo";
// organisms imports
import Menu from "../Menu";

function Header() {
  return (
    <Container>
      <Logo />
      <Menu />
      <Button />
    </Container>
  );
}

export default Header;
