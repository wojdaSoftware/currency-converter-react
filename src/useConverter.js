import { useState, useEffect } from 'react';
import getExchangeRates from './getExchangeRates';

const useConverter = (currency, currencyAmount) => {
    const [conversionResult, setConversionResult] = useState("");
    const [exchangeRates, setExchangeRates] = useState(null);

    useEffect(() => {
        getExchangeRates().then(data => {
            setExchangeRates(data);
        });
    }, []);

    useEffect(() => {
        if (exchangeRates) {
            const exchangeRate = exchangeRates.data[currency].value;
            const result = (currencyAmount * exchangeRate).toFixed(2);
            setConversionResult(result);
        }
    }, [currencyAmount, currency, exchangeRates]);

    return conversionResult;
}

export default useConverter;