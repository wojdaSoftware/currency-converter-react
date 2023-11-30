import axios from "axios";
import './exchangeRates.json';

const getExchangeRates = async () => {
    try {
        const exchangeRates = await axios.get('exchangeRates.json');
        console.log(exchangeRates);
        return exchangeRates;
    } catch (error) {
        console.error(error);
    }
};

export default getExchangeRates;