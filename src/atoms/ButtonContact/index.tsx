import { ReactNode } from 'react';

import { Container } from './styles';

interface ButtonContactProps {
  children: ReactNode;
}

function ButtonContact({ children }: ButtonContactProps) {
  return (
    <Container>
      <h1>ButtonContact</h1>
      {children}
    </Container>
  );
};

export default ButtonContact;
