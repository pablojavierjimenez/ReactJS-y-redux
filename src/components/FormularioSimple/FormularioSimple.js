import React, { Component } from "react";

export default class FormularioSimple extends Component {
  state = {
    errors: {},
    formData: {},
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      formData: {
        [name]: value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { nombre, apellidos } = this.state;
    if(this.validate(this.state.formData)) {
      console.log("enviado", this.state.formData);
    } else {
      console.log("Hay campos con errores", this.state.errors);
    }
  };

  validate({ nombre, apellidos }) {
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
        {errors.nombre && <p>{errors.nombre}</p>}
        <input
          name="nombre"
          onChange={this.handleChange}
          type="text"
          placeholder="Nombre"
          />
          {errors.apellidos && <p>{errors.apellidos}</p>}
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
