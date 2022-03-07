import { ReactNode } from "react";

import { Container } from "./styles";

interface ButtonProps {
  children?: ReactNode;
}

function Button({ children }: ButtonProps) {
  return <Container>Enquiry{children}</Container>;
}

export default Button;
