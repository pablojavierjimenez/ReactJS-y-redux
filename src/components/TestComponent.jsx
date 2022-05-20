import React, { Component} from 'react';
import NavMenue from './NavMenu';


export default class TestComponent extends Component {
    render() {
        return (
            <main className="App">
                <NavMenue/>
                <h1>Test componente</h1>
            </main>
        );
    }
}