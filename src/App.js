import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementar, disminuir, setear } from "./reducers";
import logo from "./logo.svg";
import "./App.css";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";

// FORMS
import userForm from "./components/userForm";
import UserForm from "./components/userForm";

const styles = {
  header: {
    maxHeigh: "200px",
    bacdkgroundColor: "red",
  },
  img: {
    width: "100%",
    maxHeigh: "200px",
  },
};
class App extends Component {
  state = {};
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSetear = (e) => {
    const { setear } = this.props;
    const { value } = this.state;
    setear(Number(value));
  };

  /**
   * USERFORM
   */
  handleUserFormSubmit = payload => {
    console.log('userForm', payload);
  };
  render() {
    const { incrementar, disminuir, value } = this.props;
    return (
      <div className="App">
        <header className="App-header" style={styles.header}>
          <img src={logo} className="App-logo" alt="logo" style={styles.img} />
          <p>Sección 10: Eliminando boilerplate: redux-form</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <UserForm onSubmit={this.handleUserFormSubmit} />
        <section>
          <h4>{value}</h4>
          <button onClick={incrementar}>Incrementar</button>
          <button onClick={disminuir}>Disminuir</button>
          <input name="value" onChange={this.handleChange} />
          <button onClick={this.handleSetear}>Setear</button>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log({ state });
  return {
    value: state.contador,
  };
};

const mapDispatchToProps = (dispatch) => ({
  incrementar: () => dispatch(incrementar()),
  disminuir: () => dispatch(disminuir()),
  setear: (payload) => dispatch(setear(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
