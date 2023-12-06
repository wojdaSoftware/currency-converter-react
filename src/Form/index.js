import { useState } from 'react';
import { Fieldset, InputField, LabelText, Legend, ResultContainer, SelectField, StyledForm } from './styled.js';

const calculateResult = (currencyAmount, exchangeRate) => currencyAmount * exchangeRate

const Form = ({ fetchData }) => {
    const [currencyAmount, setCurrencyAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");

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
                            {Object.keys(fetchData.data).map((key) => (
                                <option key={key}>
                                    {key}
                                </option>
                            ))}
                        </SelectField>
                    </label>
                </p>
                <ResultContainer>
                    {`${currencyAmount} PLN = ${calculateResult(currencyAmount, fetchData.data[currency].value).toFixed(2)} ${currency}`}
                </ResultContainer>
            </Fieldset>
        </StyledForm>
    )
};

export default Form;