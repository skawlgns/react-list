import React, { Component } from "react";

class AddItemBtn extends Component {
  inputRef = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.AddItems(name);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="text" />
        <button>추가</button>
      </form>
    );
  }
}

export default AddItemBtn;
