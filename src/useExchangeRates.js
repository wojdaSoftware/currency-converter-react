import axios from "axios";
import { useState, useEffect } from "react";

const useExchangeRates = () => {
    const [exchangeRates, setExchangeRates] = useState({ status: "pending", data: null });

    useEffect(() => {
        setTimeout(async () => {
            try {
                const response = await axios.get("https://raw.githubusercontent.com/Kvasir124/currency-converter-react/main/src/rates.json");
                setExchangeRates({
                    status: "success",
                    data: response.data,
                });
            } catch (error) {
                setExchangeRates({ status: "error" });
            }
        }, 1000)
    }, [])

    return { exchangeRates };
};


export default useExchangeRates;