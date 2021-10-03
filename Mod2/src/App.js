import React from "react";
import './App.css';
import Div1 from "./DivOne";

export default function App() {
const MyContext = React.createContext()
    return (
        <div>

            <Div1/>
        </div>
    );
}
