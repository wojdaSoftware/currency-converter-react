import { useState, useEffect } from 'react';
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

export default useConverter;