import React, { Component} from 'react';
import NavMenue from './NavMenu';


export default class Invoices extends Component {
    render() {
        return (
            <main className="App">
                <NavMenue/>
                <h1>Invoices</h1>
            </main>
        );
    }
}