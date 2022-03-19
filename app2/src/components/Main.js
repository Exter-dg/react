import React from "react";
import "../styles.css"

export default function Main() {
    return (
        <div className="main--container">
            <h1 className="main--heading">Fun facts about React</h1>
            <div className="main--content">
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enerprise apps, including mobile apps</li>
                </ul>
            </div>
        </div>
    )
}