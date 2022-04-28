import React, { Component } from "react";
import axios from "axios";
import "./App.css";

// COMPONENTS
import UserList from "./components/UserList/UserList";
import UserForm from "./components/UserForm/UserForm";


class App extends Component {

  state = {
    route: 'lista' // formulario
  };

  render() {
    const ruta = this.state.route;
    return (
      <div className="App">
        {ruta === 'lista' && <UserList />}
        {ruta === 'formulario' && <UserForm />}
      </div>
    );
  }
}

export default App;
