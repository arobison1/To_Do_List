import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItems from "./TodoItems";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
      this._inputElement.value = "";
    }
    console.log(this.state.items);

    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            To Do List
          </p>
        </header>
        <p>Enter a Task</p>
        <form onSubmit={this.addItem}>
          <input ref={(a) => this._inputElement = a}></input>
          <button type="submit">Add</button>
        </form>
        <TodoItems entries={this.state.items}/>
      </div>
    );
  }
}

export default App;
