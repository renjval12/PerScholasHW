import React from "react";

export default function Score(props) {
    return (
        props.object.scores.map((scoreInfo) =>
            <li>Score Date: {scoreInfo.date}
                <p class="score">Score: <strong>{scoreInfo.score}</strong></p>
            </li>
        )
    )
}