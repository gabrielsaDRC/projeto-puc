import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";
import firebase from 'firebase';

import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: ""
    }

    this.acessar = this.acessar.bind(this);

  } 

  async acessar() {

    await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .then(() => {
       window.location.href = "./home"
    })
    .catch((erro) => {
      alert(erro)
    })

  }

  async cadastrar() {
    window.location.href = "./cadastro"
  }

  render() {
    return (
      <div>
        <h1>Página de Login</h1>
        <input type="text" placeholder="E-mail" onChange={(e) => this.setState({email: e.target.value})} />
        <br></br>
        <input type="password" placeholder="Senha" onChange={(e) => this.setState({senha: e.target.value})} />
        <br></br>
        <button onClick={this.acessar}>Acessar</button>
        <Link to="/cadastro"><button>Cadastrar</button></Link> <br/>
      </div>
    )
  }
}

export default Login;
