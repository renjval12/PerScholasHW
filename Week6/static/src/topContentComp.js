//a react function component, that calls the TopComps react component 3 times inside of it.

export default function TopContent() {
    return (
        <div id="top-content">
            <TopComps idnum={1}title="Reviews" num1={1281} />
            <TopComps idnum={2}title="Average Rating" num1={4.6} />
            <TopComps idnum={3}title="Sentiment Analysis" num1={Math.floor(Math.random() * 900)} num2={Math.floor(Math.random() * 900)} num3={Math.floor(Math.random() * 900)} />
        </div>)
}

//react function component that returns a div
function TopComps(props) {
    return (
        <div id={'top-comp-'+ props.idnum}>
            <h3>{props.title}</h3>
            <p>{props.num1}</p>
            <p>{props.num2}</p>
            <p>{props.num3}</p>
        </div>
    )
}