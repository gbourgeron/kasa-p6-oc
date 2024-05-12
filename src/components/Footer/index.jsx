function Footer() {
    const thisYear = new Date().getFullYear();
    return (
        <footer>
            <h3>Kasa</h3>
            <p>&copy; 2020-{thisYear} Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer