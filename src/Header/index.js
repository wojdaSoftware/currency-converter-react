import './style.css';

const Header = ({title, subtitleText}) => (
    <header className="header">
        <h1 className="header__title">{title}</h1>
        <p className="header__paragraph">{subtitleText}</p>
    </header>
);

export default Header;