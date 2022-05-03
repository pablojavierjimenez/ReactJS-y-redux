import React, { Component } from "react";
import axios from "axios";
import "./App.css";

// COMPONENTS
import UserList from "./components/UserList/UserList";
import UserForm from "./components/UserForm/UserForm";

class App extends Component {
  constructor() {
    super();
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => this.setState({ users: data }));
  }

  state = {
    route: "lista", // formulario
    users: [],
  };

  handleClick = (userId) => {
    this.setState({
      route: "formulario",
      selectedUser: userId,
    });
  };

  render() {
    const ruta = this.state.route;
    return (
      <div className="App">
        {ruta === "lista" && (
          <UserList users={this.state.users} handleClick={this.handleClick} />
        )}
        {ruta === "formulario" && <UserForm actualUser={this.state.selectedUser}/>}
      </div>
    );
  }
}

export default App;
