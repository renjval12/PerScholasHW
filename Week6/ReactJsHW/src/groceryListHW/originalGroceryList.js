import { Component } from "react";

export default class OriginalGroceryList extends Component {
    state = {
        groceries: [
            { item: 'Banana', unit: 2, unitOfMeas: 'lb', quantity: 5, isPurchased: false },
            { item: 'Apple', unit: 1, unitOfMeas: 'lb', quantity: 3, isPurchased: false },
            { item: 'Cereal', unit: 16, unitOfMeas: 'oz', quantity: 2, isPurchased: false },
        ]
    }
    render() {
        return (
            this.state.groceries.map(
                (index, position) =>
                    <div className="item" id={'item-' + position}>
                        <h2>{index.item.toUpperCase()}</h2>
                        <p>Quantity: {index.quantity}</p>
                        <p>Unit: {index.unit + index.unitOfMeas}</p>
                        <button onClick="isPurchased()">Purchased</button>
                    </div>
            )
        )
    }
}