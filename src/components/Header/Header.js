import React, { Component } from 'react';
import logo from '../../logo.svg';


/**
 * STATELESS component
 * in this kind of component the principal difference is
 * that they
 * class Header extends Component {
 */
export default class Header extends Component {
  updateProps = () => {
    const {miau, manejaClick} = this.props;
    manejaClick(miau);
  }
  render() {
    const {miau, manejaClick} = this.props;

    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 onClick={this.updateProps} className='App-title'>{miau}</h2>
      </div>
    );
  }
}
