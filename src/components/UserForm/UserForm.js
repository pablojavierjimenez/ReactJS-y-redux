import React, {Component } from "react";
import { act } from "react-dom/test-utils";

export default class UserForm extends Component {
  state = {};

  handleChange = ({target}) => {
    this.setState({
      [target.name]: target.value
    });
    console.log(this.state);
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    const { actualUser } = this.props;
    return (
      <form>
        <h2>User Form {actualUser}</h2>
        <input name="name" type="text" placeholder="Nombre" onChange={this.handleChange}/>
        <input name="email" type="email" placeholder="email" onChange={this.handleChange}/>
        <input name="website" type="text" placeholder="website" onChange={this.handleChange}/>
        <input name="submit" type="submit" value="send new User" onClick={this.onSubmitForm}/>
      </form>
    );
  }
}
