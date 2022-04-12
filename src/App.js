import React, { Component } from "react";
import "./App.css";

// COMPONENTS
import Home from "./components/Home";
import Header from "./components/Header/Header.js";
import Paragraph from "./components/Paragraph/Paragraph.js";
import ParagraphDinamicProps from "./components/Paragraph-dinamic-prop/Paragraph-dinamic-prop.js";

class App extends Component {
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
      </div>
    );
  }
}

export default App;
