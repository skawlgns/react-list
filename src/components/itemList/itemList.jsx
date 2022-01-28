import React, { Component } from "react";
import styles from "./itemList.module.css";

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
      <div className={styles.liFlex}>
        <li className={styles.li}>
          <div>
            <span className={styles.name}>{name}</span>
            <span className={styles.count}>{count}</span>
          </div>

          <div>
            <button className={styles.plusBtn} onClick={this.TapPlusBtn}>
              <i className="fas fa-plus-square"></i>
            </button>
            <button className={styles.minusBtn} onClick={this.TapMinusBtn}>
              <i className="fas fa-minus-square"></i>
            </button>
            <button className={styles.delBtn} onClick={this.TapDeleteBtn}>
              <i className=" fas fa-trash"></i>
            </button>
          </div>
        </li>
      </div>
    );
  }
}

export default ItemList;
