import ButtonEl from "./components/ButtonElement";
import ContainerEl from "./components/Container";
import InputEl from "./components/InputElement";

function App() {
  return (
    <main>
      <InputEl label="Your name" id="name"/>
      <InputEl label="Your age" id="age" type="number"/>
      <p>
        <ButtonEl className="button" el="button">A Btn</ButtonEl>
      </p>
      <p>
        <ButtonEl className="button" href="https://www.udemy.com/course/react-typescript-the-practical-guide/learn/lecture/40470578#overview" el="anchor">A Link</ButtonEl>
      </p>

      <ContainerEl as={ButtonEl} el="button" className="button">
        Add Btn
      </ContainerEl >
      <ContainerEl as={ButtonEl} el="anchor" href="https://www.udemy.com/course/react-typescript-the-practical-guide/learn/lecture/40470578#overview" className="button">
        G Btn
      </ContainerEl >

    </main>
    
  )
}

export default App;
