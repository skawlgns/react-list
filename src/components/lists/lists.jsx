import React, { Component } from "react";
import ItemList from "../itemList/itemList";
import AddItemBtn from "../addItemBtn/addItemBtn";

class Lists extends Component {
  state = {
    items: [
      { id: 0, name: "사과", count: 0 },
      { id: 1, name: "라면", count: 0 },
      { id: 2, name: "과자", count: 0 },
    ],
  };

  TapPlusBtn = (itemsValue) => {
    const items = [...this.state.items];
    const index = items.indexOf(itemsValue);
    items[index].count++;
    this.setState({ items: items });
  };

  TapMinusBtn = (itemsValue) => {
    const items = [...this.state.items];
    const index = items.indexOf(itemsValue);
    const count = items[index].count - 1;
    items[index].count = count < 0 ? 0 : count;
    this.setState({ items: items });
  };

  TapDeleteBtn = (itemsValue) => {
    const items = [...this.state.items];
    const index = items.indexOf(itemsValue);
    items.splice(index, 1);
    this.setState({ items: items });
  };

  AddItems = (name) => {
    const items = [
      ...this.state.items,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ items: items });
  };

  render() {
    return (
      <>
        <AddItemBtn AddItems={this.AddItems} />
        <ul>
          {this.state.items.map((v) => (
            <ItemList
              key={v.id}
              item={v}
              TapPlusBtn={this.TapPlusBtn}
              TapMinusBtn={this.TapMinusBtn}
              TapDeleteBtn={this.TapDeleteBtn}
            />
          ))}
        </ul>
      </>
    );
  }
}
export default Lists;
