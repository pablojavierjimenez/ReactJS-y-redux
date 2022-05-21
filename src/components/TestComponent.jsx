import React, { Component} from 'react';
import NavMenue from './NavMenu';

export default class TestComponent extends Component {
    render() {
        function handleClick() {
            console.log('hola');
        } 
        return (
            <main className="App">
                <NavMenue/>
                <h1>Test componente</h1>
                <div onClick={handleClick}>ver props</div>
            </main>
        );
    }
}