import React, { Component } from "react";
import logo from "../../logo.svg";
import H1 from "../H1/H1";

/**
 * @description Definiendo estilos en linea encapsulados dentro de el mismo componente
 * @example Nº1: logo
 *    en este ejemplo definimos las propiedades de css dentro de un objeto,
 *    estatico el cual luego pasamos como variable al atributo 'style={}'.
 *    con lo que logramos que todo lo propio de el componente quede encapsulado
 *    dentro del mismo, con lo que ganamos muchamayor consistencia
 *    en la implementacion y reutilizacion del mismo.
 * @example Nº2: Header
 *    en este caso lo que hacemos es crear la propiedad como una funcion
 *    para que podamos manejar las propiedadesd dinamicamente, en este caso el background-color
 *    el cual en conbinacion con los estados del componente pueden actualizarse dinamicamente
 *
 */
const styles = {
  header: ({backgroundColor}) => ({
    backgroundColor,
    minHeight: "10vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    fontSize: "calc(10px + 1vmin)",
    color: "white",
  }),
  logo: {
    height: "10vmin",
    pointerEvents: "none",
  },
};

/**
 * STATELESS component
 * in this kind of component the principal difference is
 * that they
 * class Header extends Component {
 */
export default class Header extends Component {
  state = {
    backgroundColor: "#282c34"
  }

  updateBackground = () => {
    const randomColor = Math.floor(Math. random()*999999);
    this.setState({
      backgroundColor: '#'+randomColor
    })
  }

  updateProps = () => {
    const { miau, manejaClick } = this.props;
    manejaClick(miau);
  };

  render() {
    const { miau, manejaClick } = this.props;
    const {backgroundColor} = this.state;

    return (
      <div style={styles.header({backgroundColor})} onClick={this.updateBackground}>
        <img src={logo} style={styles.logo} className="App-logo" alt="logo" />
        <H1 onClick={this.updateProps} className="App-title">
          {miau}
        </H1>
      </div>
    );
  }
}
