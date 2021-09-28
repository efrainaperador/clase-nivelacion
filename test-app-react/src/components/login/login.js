import React, { Component } from "react";
import ParseDate from "../../utils/ParseDate";
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        let parseDateUtil = new ParseDate();
        this.state = { tries: 0, usuario: '', password: '', fechaDeHoy: parseDateUtil.fechaLegible() };
        this.tryToLogin = this.tryToLogin.bind(this);
        this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
        this.onUserChangeHandler = this.onUserChangeHandler.bind(this);
    }

    tryToLogin() {
        let user = "efrain";
        let password = "contraseña";
        if(this.state.tries > 3) {
            alert("Maximo numero de intentos alcanzado")
        } else if(this.state.usuario !== user || this.state.password !== password){
            this.setState({tries: this.state.tries + 1});
        }
    }

    onUserChangeHandler(event) {
        this.setState({ usuario: event.target.value });
    }

    onPasswordChangeHandler(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <main>
                <p>{this.state.fechaDeHoy}</p>
                <input className="user-input" value={this.state.usuario} onChange={this.onUserChangeHandler} type="text" placeholder="Usuario" />
                <input className="user-input" value={this.state.password} onChange={this.onPasswordChangeHandler} type="password" placeholder="Contraseña" />
                <button className="submit-button" onClick={this.tryToLogin}>Ingresar</button>
                <button className="submit-button">Registro</button>
            </main>
        )
    }
}

export default Login;