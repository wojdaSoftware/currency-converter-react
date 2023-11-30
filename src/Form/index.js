import { useState, useEffect } from 'react';
import { Fieldset, InputField, LabelText, Legend, ResultContainer, SelectField, StyledForm } from './styled.js';
import { exchangeRates } from './exchangeRates.js';

const useConverter = (currency, currencyAmount) => {
    const [conversionResult, setConversionResult] = useState("");

    useEffect(() => {
        const exchangeRate = exchangeRates[currency];
        const result = (currencyAmount * exchangeRate).toFixed(2);
        setConversionResult(result);
    }, [currencyAmount, currency]);

    return conversionResult;
}

const Form = () => {
    const [currencyAmount, setCurrencyAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");

    const conversionResult = useConverter(currency, currencyAmount);
    
    const handleSubmit = (event) => {
        event.preventDefault();
    };

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
                    <span>{` PLN`}</span>
                </p>
                <p>
                    <label>
                        <LabelText>Wybierz walutę:</LabelText>
                        <SelectField
                            name="currency"
                            defaultValue={currency}
                            onChange={(event) => setCurrency(event.target.value)}
                        >
                            <option value="EUR">Euro (EUR)</option>
                            <option value="USD">Dolar amerykański (USD)</option>
                            <option value="GBP">Funt brytyjski (GBP)</option>
                        </SelectField>
                    </label>
                </p>
                <ResultContainer>
                    {`${currencyAmount} PLN = ${conversionResult} ${currency}`}
                </ResultContainer>
            </Fieldset>
        </StyledForm>

    )
};

export default Form;