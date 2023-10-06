import Header from "./Header";

function App() {
  return (
    <>
      <Header
        title={"$ KALKULATOR WALUT $"}
        subtitleText={"Kursy walut z dnia 24 lipca 2023 roku"}
      />
      <main className="main">
        <form>
          <fieldset className="form__fieldset">
            <legend className="form__legend">Wprowadź dane</legend>
            <p>
              <label>
                <span className="form__labelText">Wpisz kwotę:</span>
                <input type="number" name="amount" step="0.01" min="0.01" className="form__field"
                  required />
              </label>
              <select name="currency-input" className="form__field form__field--secondary" defaultValue={"PLN"}>
                <option>PLN</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </p>
            <p>
              <label>
                <span className="form__labelText">Wybierz walutę:</span>
                <select name="currency-output" className="form__field" defaultValue={"USD"}>
                  <option value="PLN">Złoty (PLN)</option>
                  <option value="USD">Dolar amerykański (USD)</option>
                  <option value="EUR">Euro (EUR)</option>
                </select>
              </label>
            </p>
            <button className="form__button">KONWERTUJ</button>
          </fieldset>
          <div className="form__resultContainer">
            <p>Wynik:</p>
          </div>
        </form>
      </main>
    </>
  );
}

export default App;
