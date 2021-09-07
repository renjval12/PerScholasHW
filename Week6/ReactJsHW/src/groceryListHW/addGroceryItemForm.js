import React, { Component } from "react"
import GroceryListObj from "./newGroceryItem.js";
import OriginalGroceryList from "./originalGroceryList.js";

export default class NewItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = { item: '', quantity: '', unit: '', unitOfMeas: '', isPurchased: false };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);

        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(event) {
        this.setState({ item: event.target.value })
    }
    handleChange2(event) {
        this.setState({ quantity: event.target.value })
    }
    handleChange3(event) {
        this.setState({ unit: event.target.value })
    }
    handleChange4(event) {
        this.setState({ unitOfMeas: event.target.value })
    }

    handleSubmit(event) {
        // <GroceryListObj item={this.state.item} quantity={this.state.quantity} unit={this.state.unit} unitOfMeas={this.state.unitOfMeas} />
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form id="add-new-item" onSubmit={this.handleSubmit} action="#">
                    <label htmlFor="item">Item Name: </label>
                    <input
                        id="item"
                        type="text"
                        minLength="3"
                        placeholder="Enter an item name"
                        onChange={this.handleChange1}
                        value={this.state.item}
                        required />
                    <label htmlFor="quantity">Quantity: </label>
                    <input
                        id="quantity"
                        type="number"
                        value=""
                        min="1"
                        onChange={this.handleChange2}
                        value={this.state.quantity}
                        required />

                    <label htmlFor="unit">Unit: </label>
                    <input
                        id="unit"
                        type="number"
                        value=""
                        min="1"
                        onChange={this.handleChange3}
                        value={this.state.unit}
                        required />

                    <select name="unit-of-measurement" id="unit-of-measurement" value="" onChange={this.handleChange4}
                        value={this.state.unitOfMeas}
                        required>
                        <option value="oz">oz</option>
                        <option value="lb">lb</option>
                    </select>

                    <button id="add-item">Add Item</button>
                </form>
                <h1>Grocery List</h1>
                <OriginalGroceryList />
                {/* <GroceryListObj/> */}
            </div>
        )
    }
}