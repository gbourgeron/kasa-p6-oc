import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/LOGO.svg';
import './index.scss';

function Header() {
    const location = useLocation();
    
    return (
        <header>
            <Link to="/" className="logo-link">
                <img src={logo} alt="Logo Kasa" />
            </Link>
            <nav className="navbar">
                <Link to="/" className={`navbar__link ${location.pathname === "/" ? "active" : ""}`}>Accueil</Link>
                <Link to="/a-propos" className={`navbar__link ${location.pathname === "/a-propos" ? "active" : ""}`}>À Propos</Link>
            </nav>
        </header>
    )
}

export default Header