import { useState, useEffect } from 'react';
import getExchangeRates from './getExchangeRates';

const useConverter = (currency, currencyAmount) => {
    const [conversionResult, setConversionResult] = useState("");

    useEffect(() => {
        getExchangeRates().then(exchangeRates => {
            const exchangeRate = exchangeRates.data.data[currency].value;
            const result = (currencyAmount * exchangeRate).toFixed(2);
            setConversionResult(result);
        });
    }, [currencyAmount, currency]);

    return conversionResult;
}

export default useConverter;