import React from "react";
import GridImage from '../images/grid.png'

export default function Hero() {
    return (
        <div className="hero--container">
            <img className="hero--image" src={GridImage}></img>
            <h1 className="hero--heading">Online Experiences</h1>
            <p className="hero--content">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}