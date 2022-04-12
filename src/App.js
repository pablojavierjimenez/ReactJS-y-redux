import React, { Component } from "react";
import "./App.css";

// COMPONENTS
import Home from "./components/Home";
import Header from "./components/Header/Header.js";
import Paragraph from './components/Paragraph/Paragraph.js';

class App extends Component {
  state = {
    miau: "bienvenido a Miau",
  }

  cambiarTextoDelEstado = () => {
    this.setState({
      miau: "Hola Mundo",
    });
  }

  render() {
    const { miau } = this.state;
    const texto = "Hola Gatos";
    const clickHandler = (text) => {
      console.log(text);
    };
    let textFromApp = "como este que viene directo del componente app.js";
    let user = {
      name: "jey jey",
      hobbies: ["running", "play violin"],
    };
    return (
      <div className="App">
        {/**
         * **Header** is an example of an stateLess component
         */}
        <Header miau={texto} manejaClick={clickHandler} homeLink="Home" />
        <Header miau={miau} manejaClick={clickHandler} homeLink="Home" />
        <Paragraph>
          {miau}
        </Paragraph>
        <p onClick={this.cambiarTextoDelEstado} className="App-intro">
          {miau}
        </p>
        {/**
         * _Acerca de lo elemento hijos de un componente_
         * los componentes pueden utilizarse como un cierre en si mismos,
         * eg: *<Home />*
         * o tambien como elementos tag de apertura y cierre, los cuales pueden incluir
         * otros elementos html, o componentes
         * estos seran recibidos en en la clase en el objeto _this.props.children_
         * eg:
         *    *<Home>*
         *      *<p>soy hijo de home</p>*
         *    *</Home>*
         */}
        {/* <Home name={"Chaboncito"} initialAge={34} /> */}
      </div>
    );
  }
}

export default App;