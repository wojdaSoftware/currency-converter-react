import axios from "axios";

const getExchangeRates = () => {
    return axios.get('https://api.currencyapi.com/v3/latest?apikey=cur_live_rycdtBwznBtiZdlOVMz0OLXrcBYp1XIJV2EZYJhc&currencies=EUR%2CUSD%2CGBP&base_currency=PLN')
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};

export default getExchangeRates;