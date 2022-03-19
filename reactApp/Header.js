import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-icon.png" class = "nav-logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
