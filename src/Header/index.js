import { StyledHeader, Subtitle, Title } from './styled.js';
import { formatDate } from '../utils/formatDate.js';

const Header = ({ aboveTitleContent, fetchDateData }) => (
    <StyledHeader>
        {aboveTitleContent}
        <Title>$ KALKULATOR WALUT $</Title>
        {fetchDateData && <Subtitle>Kursy walut z dnia {formatDate(new Date(fetchDateData.meta.last_updated_at), {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        })}</Subtitle>}
    </StyledHeader>
);

export default Header;