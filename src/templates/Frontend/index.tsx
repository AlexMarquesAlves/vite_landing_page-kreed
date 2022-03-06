import { ReactNode } from "react";

import * as S from "./styles";

interface FrontendProps {
  children: ReactNode;
}

function Frontend({ children }: FrontendProps) {
  return <S.Container>Teste Frontend {children}</S.Container>;
}

export default Frontend;
