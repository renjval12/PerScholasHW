import React, { Component } from "react";

export default class GroceryList extends Component {
  state = {
    inputItem: '',
    inputUnitAmt: '',
    inputUnitType: '',
    inputQuantity: '',

    groceries: [
      { item: 'Banana', unitAmt: 2, unitType: 'lb', quantity: 5, isPurchased: false },
      { item: 'Apple', unitAmt: 1, unitType: 'lb', quantity: 3, isPurchased: true },
      { item: 'Cereal', unitAmt: 16, unitType: 'oz', quantity: 2, isPurchased: false },
    ],
  };

  handleChange = () => {
    this.setState({
      inputItem: document.getElementById("item").value,
      inputUnitAmt: document.getElementById("unit-amt").value,
      inputUnitType: document.getElementById('unit-type').value,
      inputQuantity: document.getElementById("quantity").value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((currentState) => {
      return {
        groceries: currentState.groceries.concat([
          {
            item: this.state.inputItem,
            unitAmt: this.state.inputUnitAmt,
            unitType: this.state.inputUnitType,
            quantity: this.state.inputQuantity,
            isPurchased: this.state.isPurchased,
          },
        ]),
      };
    });

    document.getElementById("item").value = "";
    document.getElementById("unit-amt").value = "";
    document.getElementById("unit-type").value = "";
    document.getElementById("quantity").value = "";
  };

  render() {
    return (
      <div id="form-and-list">
        <form onSubmit={this.handleSubmit} >
          <label htmlFor="item">Item Name:</label>
          <input
            type="text"
            id="item"
            minLength="3"
            onChange={this.handleChange}
            value={this.state.item}
          />


          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            onChange={this.handleChange}
            value={this.state.quantity}
          />


          <label htmlFor="unit-amt">Unit Amount:</label>

          <input
            type="number"
            id="unit-amt"
            min="1"
            onChange={this.handleChange}
            value={this.state.unitAmt}
          />
          <select name="unit-of-measurement-type" id="unit-type" onChange={this.handleChange}
            value={this.state.unitType}
            required>
            <option value="oz">oz</option>
            <option value="lb">lb</option>
          </select>

          <input type="submit" value="Add Item" />
        </form>

        <div id="grocery-list">
          <h1>Grocery List</h1>

          {this.state.groceries.map((listItem, position) =>
            !listItem.isPurchased ? (
              <div key={position} id={'item-' + position}>
                <h2>{listItem.item}</h2>
                <p>Quantity: {listItem.quantity}</p>
                <p>Unit: {listItem.unitAmt + listItem.unitType}</p>
              </div>
            ) : null
          )}
        </div>
      </div>
    );
  }
}
