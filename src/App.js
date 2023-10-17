import Header from "./Header";
import Form from "./Form";
import Container from "./Content";

function App() {
  return (
    <Container>
      <Header
        title={"$ KALKULATOR WALUT $"}
        subtitle={"Kursy walut z dnia 24 lipca 2023 roku"}
      />
      <Form />
    </Container>
  );
}

export default App;
