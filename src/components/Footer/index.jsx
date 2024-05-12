import logo from '../../assets/LOGO_blanc.svg';

function Footer() {
    const thisYear = new Date().getFullYear();
    return (
        <footer>
            <img src={logo} alt="Logo Kasa" />
            <p>&copy; 2020-{thisYear} Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer