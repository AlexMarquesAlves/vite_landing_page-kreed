import { ReactNode } from "react";

import { Container } from "./styles";

interface FrontendProps {
  children: ReactNode;
}

function Frontend({ children }: FrontendProps) {
  return <Container>Teste Frontend {children}</Container>;
}

export default Frontend;
