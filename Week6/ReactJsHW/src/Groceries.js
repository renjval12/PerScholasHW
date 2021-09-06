import React, { Component, useState } from 'react';
import './index.css';

state = {
    groceries: {
        [
            { item: 'Banana', unit: 2, quantity: 5, isSelected: false },
            { item: 'Apple', unit: 3, quantity: 3, isSelected: true },
            { item: 'Cereal', unit: 7, quantity: 2, isSelected: false },
]
}
}
























/* export default class GroceriesList extends Component {
    state = {
        groceries: [
            {
                item: 'Bananas',
                units: '1 lb',
                quantity: 1,
                isPurchased: false
            },
            {
                item: 'Cereal',
                units: '6 oz',
                quantity: 2,
                isPurchased: false
            },
            {
                item: 'Chicken',
                units: '5 lbs',
                quantity: 1,
                isPurchased: false
            },
        ]
    }


    handleChange = event => {
        // computed property names
        setItem
    }

    handleSubmit = event => {
        const newItem = {
            itemName: this.value,
            quantity: 1,
            isSelected: false,
        };
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <label htmlFor="item">Item Name:</label>
                <input
                    id="item"
                    onChange={this.handleChange}
                    value={this.state.item}
                    type='text'
                />

                <label htmlFor="units">Units of Measurement:</label>
                <input
                    id="units"
                    onChange={this.handleChange}
                    value={this.state.units}
                    type='text'

                />

                <label htmlFor="quantity">Quantity:</label>
                <input
                    id="quantity"
                    onChange={this.handleChange}
                    value={this.state.quantity}
                    type='text'

                />

                <button>Submit</button>

            </form>

        )
    }
} */