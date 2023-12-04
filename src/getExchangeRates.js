import axios from "axios";

const getExchangeRates = async () => {
    try {
        const exchangeRates = await axios.get('https://api.currencyapi.com/v3/latest?apikey=cur_live_rycdtBwznBtiZdlOVMz0OLXrcBYp1XIJV2EZYJhc');
        console.log(exchangeRates);
        return exchangeRates;
    } catch (error) {
        console.error(error);
    }
};

export default getExchangeRates;