import axios from "axios";
import { useState, useEffect } from "react";

const exchangeRateURL = {
    static: "https://raw.githubusercontent.com/Kvasir124/currency-converter-react/main/public/rates.json",
    dynamic: "https://api.currencyapi.com/v3/latest?apikey=cur_live_rycdtBwznBtiZdlOVMz0OLXrcBYp1XIJV2EZYJhc&currencies=EUR%2CUSD%2CGBP&base_currency=PLN",
}

const useExchangeRates = () => {
    const [exchangeRates, setExchangeRates] = useState({ status: "pending", data: null });

    useEffect(() => {
        setTimeout(async () => {
            try {
                const response = await axios.get(exchangeRateURL.static);
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