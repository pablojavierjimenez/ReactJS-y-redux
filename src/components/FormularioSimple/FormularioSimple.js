import React, { Component  } from 'react';

export default class FormularioSimple extends Component {
  state = {};

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('enviado', this.state);
  }

  render() {
    return(
    <form onSubmit={this.handleSubmit}>
      <input name='nombre' onChange={this.handleChange} type="text" placeholder="Nombre" />
      <input name='apellidos' onChange={this.handleChange} type="text" placeholder="Apellido" />
      <input type="submit" value="Enviar" />
    </form>
    )
  }
}
