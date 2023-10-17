import './style.css';

const Header = ({title, subtitle}) => (
    <header className="header">
        <h1 className="header__title">{title}</h1>
        <p className="header__paragraph">{subtitle}</p>
    </header>
);

export default Header;