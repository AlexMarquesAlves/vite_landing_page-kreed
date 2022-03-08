import styled from "styled-components";

export const Container = styled.button`
  background: #17a4d0;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 400;
  width: 200px;
  height: 60px;
  border-radius: 100px;
  margin-top: 50px;
  transition: all 300ms ease-in-out;

  &:hover {
    background: #fff;
    color: #17a4d0;
    box-shadow: 0px 0px 20px 0px #17a4d0;
  }
`;
