import { useState } from 'react';
import './style.css'

const Form = ({ }) => {
    const [currencyAmount, setCurrencyAmount] = useState("");
    const [inputCurrency, setInputCurrency] = useState("PLN");
    const [outputCurrency, setOutputCurrency] = useState("EUR")
    let conversionResult = {};

    const convertCurrency = (currencyAmount, inputCurrency, outputCurrency) => {
        let exchangeRate;

        switch (inputCurrency) {
            case "PLN":
                switch (outputCurrency) {
                    case "PLN":
                        exchangeRate = 1;
                        return (currencyAmount * exchangeRate);
                    case "USD":
                        exchangeRate = 0.25;
                        return (currencyAmount * exchangeRate);
                    case "EUR":
                        exchangeRate = 0.22;
                        return (currencyAmount * exchangeRate);
                }
            case "USD":
                switch (outputCurrency) {
                    case "PLN":
                        exchangeRate = 4.01;
                        return (currencyAmount * exchangeRate);
                    case "USD":
                        exchangeRate = 1;
                        return (currencyAmount * exchangeRate);
                    case "EUR":
                        exchangeRate = 0.90;
                        return (currencyAmount * exchangeRate);
                }
            case "EUR":
                switch (outputCurrency) {
                    case "PLN":
                        exchangeRate = 4.45;
                        return (currencyAmount * exchangeRate);
                    case "USD":
                        exchangeRate = 1.11;
                        return (currencyAmount * exchangeRate);
                    case "EUR":
                        exchangeRate = 1;
                        return (currencyAmount * exchangeRate);
                }
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        conversionResult = convertCurrency(currencyAmount, inputCurrency, outputCurrency)
        console.log(conversionResult);
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Wprowadź dane</legend>
                <p>
                    <label>
                        <span className="form__labelText">Wpisz kwotę:</span>
                        <input
                            type="number"
                            name="amount"
                            step="0.01"
                            min="0.01"
                            className="form__field"
                            value={currencyAmount}
                            onChange={(event) => setCurrencyAmount(event.target.value)}
                            required
                        />
                    </label>
                    <select
                        name="currency-input"
                        className="form__field form__field--secondary"
                        defaultValue={inputCurrency}
                        onChange={(event) => setInputCurrency(event.target.value)}
                    >
                        <option>PLN</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Wybierz walutę:</span>
                        <select
                            name="currency-output"
                            className="form__field"
                            defaultValue={outputCurrency}
                            onChange={(event) => setOutputCurrency(event.target.value)}
                        >
                            <option value="PLN">Złoty (PLN)</option>
                            <option value="USD">Dolar amerykański (USD)</option>
                            <option value="EUR">Euro (EUR)</option>
                        </select>
                    </label>
                </p>
                <button className="form__button">KONWERTUJ</button>
                <div className="form__resultText">
                    Wynik:
                </div>
            </fieldset>
        </form>

    )
};

export default Form;