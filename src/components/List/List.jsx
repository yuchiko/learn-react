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
      <span className="item__remove" onClick={this.deleteItem(item)}>Remove</span></li>
  }

  addItem = () => {
    this.setState(prevState => {
      const { items } = prevState;
      const newItems = items.concat(`${items.length}`);

      return {
        items: newItems
      }
    });
  }

  render() {
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
