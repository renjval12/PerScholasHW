import { Component } from 'react';
import './App.css';
import OriginalGroceryList from './originalGroceryList';
import NewItemForm from './addGroceryItemForm';
import GroceryListObj from './newGroceryItem.js';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <NewItemForm />
        {/* <GroceryListObj/> */}
      </main>
    );
  }
}


