import { StyledHeader, Subtitle, Title } from './styled.js';
import useExchangeRates from '../useExchangeRates';
import { formatDate } from '../utils/formatDate.js';

const Header = ({ aboveTitleContent, fetchDate }) => (
    <StyledHeader>
        {aboveTitleContent}
        <Title>$ KALKULATOR WALUT $</Title>
        <Subtitle>Kursy walut z dnia {formatDate(fetchDate, {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        })}</Subtitle>
    </StyledHeader>
);

export default Header;