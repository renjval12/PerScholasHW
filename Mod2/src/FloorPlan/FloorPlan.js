import React from "react";
import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

export default function FloorPlan() {
    return (
        <>
            <h1>Floor Plan</h1>
            <div id="floor-plan">
                <Kitchen />
                <LivingRoom />
                <Bedroom id="1" bedNum="1" />
                <Bedroom id="2" bedNum="2" />
                <Bedroom id="3" bedNum="3" />
                <Bath id="half" size="Half" />
                <Bath id="full" size="Full" />
            </div>
        </>
    );
}