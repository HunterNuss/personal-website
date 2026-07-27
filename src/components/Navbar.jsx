import {Link} from "react-router-dom"
import '../css/Navbar.css'
 

export default function Navbar() {
    return (
        <nav className="nav">
            {/* <div> */}
                <Link to="/" className="navbar-name">
                    HUNTER NUSS
                </Link>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/education" className="navbar-link">Education</Link>
                    <Link to="/work" className="navbar-link">Work</Link>
                    <Link to="/projects" className="navbar-link">Projects</Link>
                </div>
            {/* </div> */}
            <div className="hamburger-menu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}




const navSlide = () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    hamburgerMenu.addEventListener('click', ()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.2}s`;
            }
        });

        //Hamburger Menu Animation
        hamburgerMenu.classList.toggle('toggle');

    });


}

