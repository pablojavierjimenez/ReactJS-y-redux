import React, { Component } from "react";

class ParagraphDinamicProps extends Component {
  render() {
    return (
      <p  {...this.props} className="App-intro" />
    );
  }
}

export default ParagraphDinamicProps;
