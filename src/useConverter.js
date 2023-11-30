import { useState, useEffect } from 'react';
import getExchangeRates from './getExchangeRates';

const useConverter = (currency, currencyAmount) => {
    const [conversionResult, setConversionResult] = useState("");
    const exchangeRates = {USD: 4, EUR: 3, GBP:2};

    useEffect(() => {
        const exchangeRate = exchangeRates[currency];
        const result = (currencyAmount * exchangeRate).toFixed(2);
        setConversionResult(result);
    }, [currencyAmount, currency]);

    return conversionResult;
}

export default useConverter;