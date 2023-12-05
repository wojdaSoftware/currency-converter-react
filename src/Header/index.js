import { StyledHeader, Subtitle, Title } from './styled.js';
import { formatDate } from '../utils/formatDate.js';

const Header = ({ aboveTitleContent, fetchData }) => (
    <StyledHeader>
        {aboveTitleContent}
        <Title>$ KALKULATOR WALUT $</Title>
        {fetchData && <Subtitle>Kursy walut z dnia {formatDate(new Date(fetchData.meta.last_updated_at), {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        })}</Subtitle>}
    </StyledHeader>
);

export default Header;