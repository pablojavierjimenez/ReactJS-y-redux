import React, { Component} from 'react';
import {Link} from 'react-router-dom';


export default class NavMenue extends Component {
    render() {
        return (
            <header>
                <Link to="/">Home</Link> | {" "}
                <Link to="/invoices">Invoices</Link> | {" "}
                <Link to="/test">tEST</Link>
            </header>
        );
    }
}