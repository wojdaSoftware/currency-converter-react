import './style.css';

const Header = ({aboveTitleContent}) => (
    <header className="header">
        {aboveTitleContent}
        <h1 className="header__title">$ KALKULATOR WALUT $</h1>
        <h2 className="header__subtitle">Kursy walut z dnia 24 lipca 2023 roku</h2>
    </header>
);

export default Header;