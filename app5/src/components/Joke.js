import React from "react";

export default function Joke(props) {
    return (
        <div className="joke--container">
            {props.setup && <h2>Setup: {props.setup}</h2>}
            <h2>Punchline: {props.punchline}</h2>
            {props.a}
            <hr></hr>
        </div>
    )
}