import Header from "./Header";
import Form from "./Form";

function App() {
  return (
    <main className="main">
      <Header
        title={"$ KALKULATOR WALUT $"}
        subtitleText={"Kursy walut z dnia 24 lipca 2023 roku"}
      />
      <Form />
      <div className="form__resultContainer">
        <p>Wynik:</p>
      </div>
    </main >
  );
}

export default App;
