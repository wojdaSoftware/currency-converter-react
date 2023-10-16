import { useState } from 'react';
import './style.css'

const Form = () => {
    const [currencyAmount, setCurrencyAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
    }

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
        </form>
    )
};

export default Form;