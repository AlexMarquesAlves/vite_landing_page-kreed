import { ReactNode } from "react";

import { Container } from "./styles";

interface MenuProps {
  children?: ReactNode;
}

function Menu({ children }: MenuProps) {
  return (
    <Container>
      <h1>Menu</h1>
      {children}
    </Container>
  );
}

export default Menu;
