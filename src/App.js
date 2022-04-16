import React, { Component } from "react";
import axios from "axios";
import "./App.css";

// COMPONENTS
import UserList from "./components/UserList/UserList";
import UserForm from "./components/UserForm/UserForm";


class App extends Component {

  state = {
    route: 'lista'
  };

  render() {

    return (
      <div className="App">
        <UserList />
        <UserForm />
      </div>
    );
  }
}

export default App;
