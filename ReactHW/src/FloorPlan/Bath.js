import React from "react";

export default function Bath(props) {
    return (
        <div id={props.id + "-bath"} class="bath">
            <span>{props.size} Bath</span>
        </div>
    );
}