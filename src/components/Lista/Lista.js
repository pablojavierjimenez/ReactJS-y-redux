import React, { Component } from "react";

export default class Lista extends Component {
  render() {
    const { users } = this.props;
    console.log('lista', users);
    return (
      <ul>
        {users.map((user) => (
            <li key={user.id}>
              {user.name}<button>edit</button>
            </li>
          ))}
      </ul>
    );
  }
}
