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

  newUser = (user) => {
    this.setState({
      route: "formulario"
    });
  }

  addNewUser = (user) => {
    axios.post('https://jsonplaceholder.typicode.com/users', user)
      .then(({data})=>{
        const newData = this.state.users.concat(data);
        this.setState({
          users: newData,
          route: 'lista'
        })
      })
  }

  updateUser = ( id, value) => {
    console.log('is update!!!');
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, value)
    .then(({data})=>{
      const updatedUserList = this.state.users.map(user => {
        if(user.id === id) return data;
        else return user;
      });
      this.setState({
        users: updatedUserList,
        route: 'lista',
        selectedUser: null
      })
    })
  };

  render() {
    const {route, users, selectedUser} = this.state;
    const initialValues = selectedUser && users.find(user => user.id === selectedUser);
    return (
      <div className="App">
        {route === "lista" && (
          <UserList
            users={this.state.users}
            handleClick={this.handleClick}
            newUser={this.newUser}
          />
        )}
        {route === "formulario" &&
          <UserForm
            initialValues={initialValues || {}}
            actualUser={this.state.selectedUser}
            addUser={this.addNewUser}
            handleUpdate={this.updateUser}/>}
      </div>
    );
  }
}

export default App;
