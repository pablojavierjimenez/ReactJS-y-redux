import React, {Component} from "react";

export default class UserList extends Component {

  render() {
    const { users } = this.props;
    return (
      <div>
        <h2>User List</h2>
      </div>
    );
  }
}
