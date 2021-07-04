import { Link } from 'react-router-dom';
import './css/Navbar.css'
const Navbar = () => {
    const resNav = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }
        mobileMenu();
    }
    const closeRes = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
        closeMenu();
    }
    return(
        <header className="header">
            <nav className="navbar">
                <h3 className="nav-logo">Food Club</h3>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={closeRes}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/food" className="nav-link" onClick={closeRes}>Food</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/recipe" className="nav-link" onClick={closeRes}>Recipe</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search" className="nav-link" onClick={closeRes}>Search</Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={resNav}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;