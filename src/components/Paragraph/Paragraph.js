import React, { Component } from "react";

class Paragraph extends Component {
  render() {
    const { children } = this.props;
    return (
      <p className="App-intro">
        {children}
      </p>
    );
  }
}

export default Paragraph;
