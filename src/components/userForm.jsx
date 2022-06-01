import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import CustomInput from "./CustomInput";

const validate = (values) => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "First name is Required";
  }
  if (!values.lastName) {
    errors.lastName = "Last name is Required";
  }
  return errors;
};
class UserForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    console.log(this.props);
    return (
      <form onSubmit={handleSubmit}>
        <h3>UserForm</h3>
        <div styles="display:flex;">
          <Field
            label="Nombre"
            name="firstName"
            component={CustomInput}
            type="text"
            placeholder="First Name"
          />
          <Field
            label="Apellido"
            name="lastName"
            component={CustomInput}
            type="text"
            placeholder="Last Name"
          />
          <input type="submit" value="Enviar" />
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "userForm",
  validate,
})(UserForm);
