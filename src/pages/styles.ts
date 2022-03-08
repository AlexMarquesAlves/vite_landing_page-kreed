import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    width: 50%;

    h1 {
      color: #1e255e;
      font-size: 3.5rem;
      font-weight: bold;
    }

    h6 {
      font-size: 1rem;
      color: rgba(30, 37, 94, 0.7);
      font-weight: normal;
      padding-right: 9.375rem;
      margin-top: 1.5625rem;
    }
  }
`;

export const ImgColumn = styled.div`
  text-align: right;
  img {
    margin-left: 112px;
  }
`;
