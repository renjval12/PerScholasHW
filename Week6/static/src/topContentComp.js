import React from 'react'

export default function TopContent() {
    return (
        <div id="top-content">
            <TopComps title="Reviews" num1={1281} />
            <TopComps title="Average Rating" num1={4.6} />
            <TopComps title="Sentiment Analysis" num1={Math.floor(Math.random() * 900)} num2={Math.floor(Math.random() * 900)} num3={Math.floor(Math.random() * 900)} />
        </div>)

}

function TopComps(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.num1}</p>
            <p>{props.num2}</p>
            <p>{props.num3}</p>
        </div>
    )
}