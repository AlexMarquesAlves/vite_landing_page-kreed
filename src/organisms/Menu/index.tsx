import { ItemList, MenuList } from "./styles";

function Menu() {
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
    </MenuList>
  );
}

export default Menu;
