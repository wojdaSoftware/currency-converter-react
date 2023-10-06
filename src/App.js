import Header from "./Header";
import Form from "./Form";
import Container from "./Content";

function App() {
  return (
    <Container>
      <Header
        title={"$ KALKULATOR WALUT $"}
        subtitleText={"Kursy walut z dnia 24 lipca 2023 roku"}
      />
      <Form />
      <div className="form__resultContainer">
        <p>Wynik:</p>
      </div>
    </Container>
  );
}

export default App;
