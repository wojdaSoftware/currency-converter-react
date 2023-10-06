import Header from "./Header";
import Form from "./Form";
import Container from "./Content";
import Result from "./Result";

function App() {
  return (
    <Container>
      <Header
        title={"$ KALKULATOR WALUT $"}
        subtitleText={"Kursy walut z dnia 24 lipca 2023 roku"}
      />
      <Form />
      <Result />
    </Container>
  );
}

export default App;
