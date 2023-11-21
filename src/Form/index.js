import { useState, useEffect } from 'react';
import { Fieldset, InputField, LabelText, Legend, ResultContainer, SelectField, StyledForm } from './styled.js';
import { exchangeRates } from './exchangeRates.js';

const Form = () => {
    const [currencyAmount, setCurrencyAmount] = useState("");
    const [inputCurrency, setInputCurrency] = useState("PLN");
    const [outputCurrency, setOutputCurrency] = useState("EUR");
    const [conversionResult, setConversionResult] = useState("");

    const convertCurrency = (currencyAmount, inputCurrency, outputCurrency) => {
        const exchangeRate = exchangeRates[inputCurrency][outputCurrency];
        return (currencyAmount * exchangeRate).toFixed(2);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        setConversionResult(convertCurrency(currencyAmount, inputCurrency, outputCurrency));
    }, [currencyAmount, inputCurrency, outputCurrency]);

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Fieldset>
                <Legend>Wprowadź dane</Legend>
                <p>
                    <label>
                        <LabelText>Wpisz kwotę:</LabelText>
                        <InputField
                            type="number"
                            name="amount"
                            step="0.01"
                            min="0.01"
                            value={currencyAmount}
                            onChange={(event) => setCurrencyAmount(event.target.value)}
                            required
                        />
                    </label>
                    <SelectField
                        secondary
                        name="currency-input"
                        defaultValue={inputCurrency}
                        onChange={(event) => setInputCurrency(event.target.value)}
                    >
                        <option>PLN</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </SelectField>
                </p>
                <p>
                    <label>
                        <LabelText>Wybierz walutę:</LabelText>
                        <SelectField
                            name="currency-output"
                            defaultValue={outputCurrency}
                            onChange={(event) => setOutputCurrency(event.target.value)}
                        >
                            <option value="PLN">Złoty (PLN)</option>
                            <option value="USD">Dolar amerykański (USD)</option>
                            <option value="EUR">Euro (EUR)</option>
                        </SelectField>
                    </label>
                </p>
                <ResultContainer>
                    {`${currencyAmount} ${inputCurrency} = ${conversionResult} ${outputCurrency}`}
                </ResultContainer>
            </Fieldset>
        </StyledForm>

    )
};

export default Form;