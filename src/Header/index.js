import { StyledHeader, Subtitle, Title } from './styled.js';
import { useState, useEffect } from 'react';
import useExchangeRates from '../useExchangeRates';

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
        <Subtitle>Kursy walut z dnia {}</Subtitle>
    </StyledHeader>
);

export default Header;