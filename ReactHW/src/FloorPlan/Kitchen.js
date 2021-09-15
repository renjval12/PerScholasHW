import React from "react";
import Oven from "./Oven";
import Sink from "./Sink";

export default function Kitchen() {
    return (
        <div id="kitchen">
            <span id="kitchen-section">Kitchen</span>
            <Oven/>
            <Sink/>
        </div>
    );
}