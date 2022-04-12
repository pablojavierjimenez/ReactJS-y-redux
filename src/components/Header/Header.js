import React, { Component } from 'react';
import logo from '../../logo.svg';


/**
 * STATELESS component
 * in this kind of component the principal difference is
 * that they
 * class Header extends Component {
 */
export default class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className='App-title'>Bienvenido a React</h2>
      </div>
    );
  }
}
