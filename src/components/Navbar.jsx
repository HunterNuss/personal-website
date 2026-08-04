import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { slide as Menu } from 'react-burger-menu'
import '../css/Navbar.css'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const closeMenu = () => setIsMenuOpen(false)

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

            <Menu
                right
                width={ 300 }
                itemListElement="div"
                isOpen={isMenuOpen}
                onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
                customBurgerIcon={
                    <button type="button" className={`hamburger-button ${isMenuOpen ? 'open' : ''}`} aria-label="Toggle menu">
                        <span className="hamburger-icon" aria-hidden="true">
                            <span className="hamburger-bar hamburger-bar-1" />
                            <span className="hamburger-bar hamburger-bar-2" />
                            <span className="hamburger-bar hamburger-bar-3" />
                        </span>
                    </button>
                }
                customCrossIcon={false}
                className="hamburger-menu"
                styles={{
                    bmItemList: {
                        height: '50%'
                    },
                    bmBurgerButton: {
                        position: 'absolute',
                        right: '18px',
                        top: '50%',
                        transform: 'translateY(-50%)'
                    }
                }}
            >
                <Link to="/" className="menu-item" onClick={closeMenu}>Home</Link>
                <Link to="/education" className="menu-item" onClick={closeMenu}>Education</Link>
                <Link to="/work" className="menu-item" onClick={closeMenu}>Work</Link>
                <Link to="/projects" className="menu-item" onClick={closeMenu}>Projects</Link>
            </Menu>
        </nav>
    )
}




