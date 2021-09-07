import { Component } from 'react';
import './App.css';
import GroceryList from './GroceryList';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <GroceryList /> 
      </main>
    );
  }
}


