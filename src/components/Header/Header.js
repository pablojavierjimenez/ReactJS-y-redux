import React, { Component } from "react";

const styles ={
  inline:{
    display: 'inline',
  }
}


export default class Header extends Component {
  render() {
    return (
      <div>
        <h2 style={styles.inline}>Usuarios</h2>
        <button style={styles.inline}>Nuevo Usuario</button>
      </div>
    )
  }
}
