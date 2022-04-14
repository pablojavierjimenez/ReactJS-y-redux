import React, { Component } from "react";
import logo from "../../logo.svg";

/**
 * @description Definiendo estilos en linea encapsulados dentro de el mismo componente
 * @example Nº1:
 *    en este ejemplo definimos las propiedades de css dentro de un objeto
 *    estatico el cual luego pasamos como variable al atributo 'style={}'
 *
 */
const styles = {
  header: {
    backgroundColor: "#282c34",
    minHeight: "10vh",
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "space-around",
    fontSize: "calc(10px + 1vmin)",
    color: "white",
  },
};
/**
 * STATELESS component
 * in this kind of component the principal difference is
 * that they
 * class Header extends Component {
 */
export default class Header extends Component {
  updateProps = () => {
    const { miau, manejaClick } = this.props;
    manejaClick(miau);
  };
  render() {
    const { miau, manejaClick } = this.props;

    return (
      <div style={styles.header}>
        <img src={logo} className="App-logo" alt="logo" />
        <h2 onClick={this.updateProps} className="App-title">
          {miau}
        </h2>
      </div>
    );
  }
}
