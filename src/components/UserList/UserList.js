import React, {Component} from "react";
import Header from "../Header/Header";
import Lista from "../Lista/Lista";

export default class UserList extends Component {

  render() {
    const { users, handleClick } = this.props;
    return (
      <div>
        <h2>User List</h2>
        <Header />
        <Lista users={users} handleClick={handleClick}/>
      </div>
    );
  }
}
