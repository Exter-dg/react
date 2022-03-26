import React from "react";
import StarImage from '../images/star.png'

export default function Card(props) {
    return (
        <div className="card--container">
            <div className="card--card">
                <img className="card--image" src={require(`../images/${props.img}`)}></img>
                <p className="card--content">
                    <img className="card--star" src={StarImage}></img>
                    {props.rating} <text className="card--content-light">({props.reviewCount}).{props.country}</text>
                    <br />
                    <text className="card--title">{props.title}</text>
                    <br />
                    <text className="bold card--subtitle">From ${props.price}</text> / person
                </p>
            </div>
        </div>
    )
}