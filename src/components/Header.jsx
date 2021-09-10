import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"

const Header = ()=> {
    const navStyle = {
        color: "white",
        textDecoration: "none",
        listStyle: "none"
    }

    return (
        <header>
            <nav>
                <h3 className="logo">FLAGS<i class='bx bxs-flag-alt'></i></h3>
                <ul className="nav-links">
                    <Link style={navStyle} to="/">
                        <li>home</li>
                    </Link>
                    <Link style={navStyle} to="/flags">
                        <li>flags</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header 