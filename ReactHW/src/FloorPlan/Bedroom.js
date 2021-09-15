import React from "react";

export default function Bedroom(props) {
    return (
        <div id={"bedroom-" + props.id} class="bedroom">
            <span>Bedroom {props.bedNum}</span>
        </div>
    );
}