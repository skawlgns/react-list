import React, { Component } from "react";

class ItemList extends Component {
  TapPlusBtn = () => {
    this.props.TapPlusBtn(this.props.item);
  };
  TapMinusBtn = () => {
    this.props.TapMinusBtn(this.props.item);
  };
  TapDeleteBtn = () => {
    this.props.TapDeleteBtn(this.props.item);
  };

  render() {
    const { name, count } = this.props.item;
    return (
      <li>
        <span>{name}</span>
        <span>{count}</span>
        <button onClick={this.TapPlusBtn}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button onClick={this.TapMinusBtn}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button onClick={this.TapDeleteBtn}>
          <i className=" fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default ItemList;
