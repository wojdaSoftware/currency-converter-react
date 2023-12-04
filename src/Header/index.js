import { StyledHeader, Subtitle, Title } from './styled.js';
import { useState, useEffect } from 'react';
import useExchangeRates from '../useExchangeRates';

const Header = ({ aboveTitleContent }) => (
    <StyledHeader>
        {aboveTitleContent}
        <Title>$ KALKULATOR WALUT $</Title>
        <Subtitle>Kursy walut z dnia {}</Subtitle>
    </StyledHeader>
);

export default Header;