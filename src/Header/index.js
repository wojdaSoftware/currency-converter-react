import { StyledHeader, Subtitle, Title } from './styled.js';
import { useState, useEffect } from 'react';
import getExchangeRates from '../getExchangeRates';

const useFetchDate = () => {
    const [exchangeRates, setExchangeRates] = useState(null);
    const [fetchDate, setFetchDate] = useState(null);

    useEffect(() => {
        getExchangeRates().then(data => {
            setExchangeRates(data);
        });
    }, []);

    useEffect(() => {
        if (exchangeRates) {
            const date = new Date(exchangeRates.meta.last_updated_at);
            setFetchDate(formatDate(date));
        }
    }, [exchangeRates]);

    return fetchDate;
}

const formatDate = (date) => {
    return date.toLocaleString("pl-PL", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    });
};

const Header = ({ aboveTitleContent }) => (
    <StyledHeader>
        {aboveTitleContent}
        <Title>$ KALKULATOR WALUT $</Title>
        <Subtitle>Kursy walut z dnia {useFetchDate()}</Subtitle>
    </StyledHeader>
);

export default Header;