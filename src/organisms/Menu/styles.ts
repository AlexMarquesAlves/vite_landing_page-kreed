import styled from "styled-components";

export const MenuList = styled.ul`
  margin-left: auto;
`;

export const ItemList = styled.li`
  display: inline-block;
  margin-right: 1.5625rem;
  font-weight: 500;

  &:hover {
    a {
      color: #17a4d0;
    }
  }

  a {
    color: #1e255e;
    transition: color 300ms ease-in-out;
  }
`;
