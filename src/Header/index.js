import { StyledHeader, Subtitle, Title } from './styled.js';

const Header = ({ aboveTitleContent }) => (
    <StyledHeader>
        {aboveTitleContent}
        <Title>$ KALKULATOR WALUT $</Title>
        <Subtitle>Kursy walut z dnia 24 lipca 2023 roku</Subtitle>
    </StyledHeader>
);

export default Header;