import { ReactNode } from "react";
import Header from "../../organisms/Header";

import * as S from "./styles";

interface FrontendProps {
  children: ReactNode;
}

function Frontend({ children }: FrontendProps) {
  return (
    <S.Container>
      <Header></Header>
    </S.Container>
  );
}

export default Frontend;
