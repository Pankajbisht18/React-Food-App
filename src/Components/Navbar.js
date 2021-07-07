import { Link } from 'react-router-dom';
import './css/Navbar.css'
const Navbar = () => {
    const resNav = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu1");
        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }
        mobileMenu();
    }
    const closeRes = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu1");
        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
        closeMenu();
    }
    return(
        <header className="header">
            <nav className="navbar1">
                <h3 className="nav-logo1">Food Club</h3>
                <ul className="nav-menu1">
                    <li className="nav-item1">
                        <Link to="/" className="nav-link1" onClick={closeRes}>Home</Link>
                    </li>
                    <li className="nav-item1">
                        <Link to="/search" className="nav-link1" onClick={closeRes}>Search</Link>
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