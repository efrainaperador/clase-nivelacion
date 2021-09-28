import React, { Component } from "react";

class Prueba extends Component {
    constructor(props) {

    }

    render() {
        return (
            <div class="App">
                <h1>Hola <span id="saludo">extraño!!</span></h1>
                <label>Escriba su nombre:</label>
                <input type="text" onchange="sayMyName()" />
            </div>
        );
    }
}

export default Prueba;