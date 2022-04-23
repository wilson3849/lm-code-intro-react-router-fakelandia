function Navbar() : JSX.Element {
    return (
        <nav className="nav__container">
            <ul className="nav__container ul ul__navbar">
                <li><a className="links" href="home">Home</a></li>
                <li><a className="links" href="mews">Misdemeanours</a></li>
                <li><a className="links" href="contact">Confess To Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;