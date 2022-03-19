import React from "react"
import femaleImg from "../images/female.png"

export default function Info () {
    return (
        <div className="info--container">
            <img className="info--img" src={femaleImg}></img>
            <h1 className="info--header">Laura Smith</h1>
            <h3 className="info--subtitle">Frontend Developer</h3>
            <h3 className="info--subtitle2">laurasmith.website</h3>

            <button className="info--btn-email"><i class="fa-solid fa-envelope info--icon"></i>Email</button>
            <button className="info--btn-social"><i class="fa-brands fa-linkedin info--icon"></i>LinkedIn</button>
        </div>
        
    )
}