import React from "react";
import InputNumber from "./index";

class TestInput extends React.Component {
  state = {
    value: "1",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <InputNumber
        max={30}
        suffix=" Night"
        isSuffixPlural
        onChange={this.handleChange}
        name="value"
        value={this.state.value}
      />
    );
  }
}

export default TestInput;
