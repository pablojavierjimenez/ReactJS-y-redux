import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class UserForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <h3>UserForm</h3>
        <Field
          name="firstName"
          component="input"
          type="text"
          placeholder="First Name"
        />
        <Field
          name="lastName"
          component="input"
          type="text"
          placeholder="Last Name"
        />
        <input type="submit" value="Enviar"/>
      </form>
    );
  }
}

export default reduxForm({
  form: "userForm",
})(UserForm);
