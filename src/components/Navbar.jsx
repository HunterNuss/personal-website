import {Link} from "react-router-dom"
import '../css/Navbar.css'
 

export default function Navbar() {
    return (
        <nav className="nav">
                <Link to="/" className="navbar-name">
                    HUNTER NUSS
                </Link>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/education" className="navbar-link">Education</Link>
                    <Link to="/work" className="navbar-link">Work</Link>
                    <Link to="/projects" className="navbar-link">Projects</Link>
                </div>
        </nav>
    )
}