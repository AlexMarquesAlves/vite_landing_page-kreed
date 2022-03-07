import { ReactNode } from "react";

import { ItemList, MenuList } from "./styles";

interface MenuProps {
  children?: ReactNode;
}

function Menu({ children }: MenuProps) {
  return (
    <MenuList>
      <ItemList>
        <a href="#">Home</a>
      </ItemList>
      <ItemList>
        <a href="#">About Us</a>
      </ItemList>
      <ItemList>
        <a href="#">How it Works</a>
      </ItemList>
      <ItemList>
        <a href="#">Services</a>
      </ItemList>
      <ItemList>
        <a href="#">Contact</a>
      </ItemList>
      {children}
    </MenuList>
  );
}

export default Menu;
