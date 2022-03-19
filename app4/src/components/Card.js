import React from "react";
import SwimmerImage from '../images/1.png'
import StarImage from '../images/star.png'

export default function Card() {
    return (
        <div className="card--container">
            <div className="card--card">
                <img className="card--image" src={SwimmerImage}></img>
                <p className="card--content">
                    <img className="card--star" src={StarImage}></img>
                    5.0 <text className="card--content-light">(6).USA</text>
                    <br />
                    Life lessons with Katie Zaferes
                    <br />
                    <text className="bold">From $136</text> / person
                </p>
            </div>
        </div>
    )
}