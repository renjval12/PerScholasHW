import { Component } from "react";

export default class GroceryListObj extends Component {
    // isPurchasedToggle = (props) => {
    //     if (props.isPurchased === false) {
    //         props.isPurchased = true
    //         //then this div is striked through and turned red
    //     } else {
    //         props.isPurchased = false
    //     }
    // }
    render(props) {
        return (
            <div className="item" id="">
                <h2>{props.item.toUpperCase()}</h2>
                <p>Quantity: {props.quantity}</p>
                <p>Unit: {props.unit + props.unitOfMeas}</p>
                {/* <button onClick={props.isPurchased = true}>Purchased</button> */}
            </div>
        )
    }
}