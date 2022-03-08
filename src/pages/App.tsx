import ButtonContact from "../atoms/ButtonContact";
import Frontend from "../templates/Frontend";
import { Container, ImgColumn } from "./styles";
import RectangleImg from "../assets/Rectangle3.svg";

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

        <ImgColumn>
          <img src={RectangleImg} alt="A Woman using her tablet" />
        </ImgColumn>
      </Container>
    </Frontend>
  );
}

export default App;
