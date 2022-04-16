import React, { Component } from "react";
import axios from "axios";
import "./App.css";

// COMPONENTS
import Home from "./components/Home";
import Header from "./components/Header/Header.js";
import Paragraph from "./components/Paragraph/Paragraph.js";
import ParagraphDinamicProps from "./components/Paragraph-dinamic-prop/Paragraph-dinamic-prop.js";
import FormularioSimple from "./components/FormularioSimple/FormularioSimple";

class App extends Component {
  constructor(){
    super()
    /**
     * @description: El metodo 'FETCH' puede utilizarse con los siguientes vervos de HTTP:
     *    GET, POST, PUT, DELETE
     *    https://jsonplaceholder.typicode.com/users
     *
     * @example de uso: GET
         fetch("https://jsonplaceholder.typicode.com/users")
           .then(response => response.json())
           .then(data => console.log(data))
     * @example de uso: POST
        fetch("https://jsonplaceholder.typicode.com/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "Cornelio del rancho",
            username: "corneldelrancho",
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
     */

    /**
     * @description: El metodo 'AXIOS' es una libreria de javascript que permite hacer peticiones HTTP
     * @documentation: https://axios-http.com/docs/example
     */
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then( ({data}) => console.log(data));

  }

  state = {
    miau: "bienvenido a Miau",
  };

  cambiarTextoDelEstado = () => {
    this.setState({
      miau: "Hola Mundo",
    });
  };

  render() {
    const { miau } = this.state;
    const texto = "texto texto";
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

        <Header miau={texto} manejaClick={clickHandler} homeLink="Home" />
        <Header miau={miau} manejaClick={clickHandler} homeLink="Home" />

        <p onClick={this.cambiarTextoDelEstado} className="App-intro">
          {miau}
        </p>

        <Paragraph>{miau}</Paragraph>

        <ParagraphDinamicProps onClick={this.cambiarTextoDelEstado}>
          {texto}
        </ParagraphDinamicProps>

        {/**
         * Seccion Nº5: formularios en react
         */}
         <FormularioSimple />
      </div>
    );
  }
}

export default App;
