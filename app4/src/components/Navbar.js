import React from "react";
import Logo from '../images/logo.png'
import '../App.css'

export default function Navbar() {
    return (
        <div className="navbar--container">
            <img className="navbar--logo" src={Logo}></img>
        </div>
    )
}