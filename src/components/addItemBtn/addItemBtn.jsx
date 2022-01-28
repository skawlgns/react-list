import React, { PureComponent } from "react";
import styles from "./addItemBtn.module.css";

class AddItemBtn extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.AddItems(name);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form className={styles.form} ref={this.formRef} onSubmit={this.onSubmit}>
        <input
          className={styles.input}
          ref={this.inputRef}
          type="text"
          placeholder="목록을 입력하세요"
        />
        <button className={styles.button}>Add</button>
      </form>
    );
  }
}

export default AddItemBtn;
