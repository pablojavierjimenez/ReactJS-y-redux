import React, {Component } from "react";
import { act } from "react-dom/test-utils";

export default class UserForm extends Component {
  render() {
    const { actualUser } = this.props;
    return (
      <form>
        <h2>User Form {actualUser}</h2>
      </form>
    );
  }
}
