import React, {Component } from "react";
import { act } from "react-dom/test-utils";

const validate = values => {
  const errors = {};
  if (!values.name){
    errors.name = 'Nombre campo es obligatorio'
  }
  if (!values.email){
    errors.email = 'Email campo es obligatorio'
  }
  if (!values.website){
    errors.website = 'Website campo es obligatorio'
  }
  return errors;
}

export default class UserForm extends Component {
  state = {
    errors:{}
  };

  handleChange = ({target}) => {
    this.setState({
      [target.name]: target.value
    });
    // console.log(this.state);
  }

  onSubmitForm = (e) => {
    // console.log(e.target);
    e.preventDefault();
    const {errors, ...sinErrors} = this.state;
    const result = validate(sinErrors);
    this.setState({ errors: result });

    if (!Object.keys(result).length) {
      // envio
      const {addUser} = this.props;
      addUser(this.state);
      e.target.reset();
    }
  }
  render() {
    const { actualUser } = this.props;
    const {errors} = this.state;
    return (
      <form onSubmit={this.onSubmitForm}>
        <h2>User Form {actualUser}</h2>
        <div>
          <input name="name" type="text" placeholder="Nombre" onChange={this.handleChange}/><br/>
          {errors.name && <small><mark>{errors.name}</mark></small>}
        </div>
        <div>
          <input name="email" type="email" placeholder="email" onChange={this.handleChange}/><br/>
          {errors.email && <small><mark styles="background-color:red">{errors.email}</mark></small>}
        </div>
        <div>
          <input name="website" type="text" placeholder="website" onChange={this.handleChange}/><br/>
          {errors.website && <small><mark>{errors.website}</mark></small>}
        </div>
        <input name="submit" type="submit" value="send new User"/>
      </form>
    );
  }
}
