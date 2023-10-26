import Header from "./Header";
import Form from "./Form";
import Container from "./Content";
import Clock from "./Clock";

function App() {
  return (
    <Container>
      <Header aboveTitleContent={<Clock />} />
      <Form />
    </Container>
  );
}

export default App;
