import React, { Component } from "react";

export default class FormularioSimple extends Component {
  state = {
    errors: {},
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
        [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { errors, ...formData } = this.state;
    if(this.validate(formData)) {
      console.log("enviado", this.state);
    } else {
      console.log("Hay campos con errores", this.state.errors);
    }
  };

  validate(formData) {
    const { nombre, apellidos } = formData;
    const errors = {};
    if (!nombre) errors.nombre = "El nombre es obligatorio";
    if (!apellidos) errors.apellidos = "El apellido es obligatorio";
    this.setState({ errors });
    return (Object.keys(errors).length === 0) ? true : false;
  };

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {errors.nombre && <p><small><mark>{errors.nombre}</mark></small></p>}
        <input
          name="nombre"
          onChange={this.handleChange}
          type="text"
          placeholder="Nombre"
          />
          {errors.apellidos && <p><small><mark>{errors.apellidos}</mark></small></p>}
        <input
          name="apellidos"
          onChange={this.handleChange}
          type="text"
          placeholder="Apellido"
        />
        <input type="submit" value="Enviar" />
      </form>
    );
  }
};
