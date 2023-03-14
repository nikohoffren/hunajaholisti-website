import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleSideNav = () => {
        setIsOpen(!isOpen)
    }
    return <>

    <nav class="black small-margin-top">
        <div className={`${!isOpen ? 'nav-links' : 'nav-links-2'}`}>
            <i class="fa fa-times" onClick={toggleSideNav}></i>
            <ul id="navLinks" class="right center">
                <li onClick={toggleSideNav}><CustomLink to="/"><img className="header-logo" src="HHlogo.jpg" alt="" /></CustomLink></li>
                <li onClick={toggleSideNav}><CustomLink className="btn yellow black-text custom-buttons" to="/tarinamme">TARINAMME</CustomLink></li>
                <li onClick={toggleSideNav}><CustomLink className="btn yellow black-text custom-buttons" to="/tuotteemme">TUOTTEEMME</CustomLink></li>
                <li onClick={toggleSideNav}><a href="https://holvi.com/shop/WbXD2B/" class="btn yellow black-text custom-buttons" target="_blank">VERKKOKAUPPA</a></li>
             </ul>
        </div>
        <i class="fa fa-bars right" onClick={toggleSideNav}></i>
     </nav>
    <br />
    <br />
    <br />
    <br />
    </>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
