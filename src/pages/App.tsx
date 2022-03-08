import ButtonContact from "../atoms/ButtonContact";
import Frontend from "../templates/Frontend";
import { Container } from "./styles";

function App() {
  return (
    <Frontend>
      <Container>
        <div>
          <h1>Design driven development of your web product</h1>
          <h6>
            We are a full service digital agency that builds immesive user
            experience.
          </h6>
          <ButtonContact />
        </div>
        <div>coluna 2</div>
      </Container>
    </Frontend>
  );
}

export default App;
