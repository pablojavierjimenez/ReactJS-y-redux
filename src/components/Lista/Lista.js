import React, { Component } from "react";

const styles = {
  ul: {
    maxWidth: '500px',
    width: '70%'
  },
  li: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button:{
    marginLeft:'10px',
    marginTop: '4px'
  }
}
export default class Lista extends Component {
  /**
   * @description Vamos a ver 2 formas de hacerlo
   *
   ** 1. Usando el patron ARROW FUNCTION
   *   lo extra que tiene este caso es que habra que agregar obien un
   *   un atributo data-id al boton, o en la propiedad id ponerle el id delñ usuario
   *   @example:
   *    <button id={user.id} onClick={this.handleClick}>edit</button>
   *
   ** 2. Usando el patron CURRING
   *  @example:
   *    const suma = a => b => a + b;
   *    const suma2 = suma(2);
   *    suma2(3);
   * @param {*} e
   */
  handleClick = (e) => {
    console.log('clicked id = ', e.target.getAttribute('id'));
  };
  handleClick_curryng = id => (e) => {
    const {handleClick} = this.props;
    handleClick(id);
    console.log('clicked id = ', id);
  };

  render() {
    const { users } = this.props;
    console.log('lista', users);
    return (
      <ul style={styles.ul}>
        {users.map((user) => (
            <li key={user.id} style={styles.li}>
              <span>
                {user.name}
              </span>
              <button style={styles.button} onClick={this.handleClick_curryng(user.id)}>edit</button>
            </li>
          ))}
      </ul>
    );
  }
}
