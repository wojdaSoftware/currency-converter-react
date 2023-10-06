function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">$ KALKULATOR WALUT $</h1>
        <p className="header__paragraph">Kursy walut z dnia 24 lipca 2023 roku</p>
      </header>
      <main className="main">
        <form className="js-form">
          <fieldset className="form__fieldset">
            <legend className="form__legend">Wprowadź dane</legend>
            <p>
              <label>
                <span className="form__labelText">Wpisz kwotę:</span>
                <input type="number" name="amount" step="0.01" min="0.01" className="form__field js-amount"
                  required />
              </label>
              <select name="currency-input" className="form__field form__field--secondary js-currency-input">
                <option selected>PLN</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </p>
            <p>
              <label>
                <span className="form__labelText">Wybierz walutę:</span> <select name="currency-output"
                  className="form__field js-currency-output">
                  <option value="PLN">Złoty (PLN)</option>
                  <option value="USD" selected>Dolar amerykański (USD)</option>
                  <option value="EUR">Euro (EUR)</option>
                </select>
              </label>
            </p>
            <button className="form__button">KONWERTUJ</button>
          </fieldset>
          <div className="form__resultContainer">
            <p className="js-result">Wynik:</p>
          </div>
        </form>
      </main>
    </>
  );
}

export default App;
