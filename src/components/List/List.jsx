import React, { Component } from "react";
import './List.scss';
// import Button from "../Button";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  deleteItem = removedItem => {
    const filteredItems = this.state.items.filter(item => {
      return item !== removedItem
    })
    this.setState({
      items: filteredItems,
    })
  }

  createTasks = item => {
    return <li key={item.toString()}>Item {item}
      <span className="item__remove" onClick={() => this.deleteItem(item)}>Remove</span></li>
  }

  addItem = e => {
    e.preventDefault();

    // Do we need a prevState here ?
    this.setState(prevState => (prevState.items.push(prevState.items.length)));
  }

  render() {
    // must have
    const { items } = this.state;
    const listItems = items.map(this.createTasks)

    return (
      <div>
        TodoList({this.state.items.length})
        <button type="button" onClick={this.addItem}>Add</button>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default List;
