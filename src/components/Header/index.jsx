import { Link } from "react-router-dom";
import logo from '../../assets/LOGO.svg';
import './index.scss';

function Header() {
    return (
        <header>
            <Link to="/" className="logo-link">
                <img src={logo} alt="Logo Kasa" />
            </Link>
            <nav className="navbar">
                <Link to="/" className="navbar__link">Accueil</Link>
                <Link to="/a-propos" className="navbar__link">À propos</Link>
            </nav>
        </header>
    )
}

export default Header