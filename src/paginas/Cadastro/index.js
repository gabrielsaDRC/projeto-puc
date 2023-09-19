import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../Firebase";
import './cadastro.css'

class Cadastro extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: "",
            nome: "",
            sobrenome: "",
            nascimento: "",
            dados:[]
        }

        this.gravar = this.gravar.bind(this);
        this.listar = this.listar.bind(this);
    }

    async gravar() {

        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .then(async (retorno) => {
            await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                nascimento: this.state.nascimento
            })

            alert("Cadastro realizado com sucesso");
            window.location.href = "./"
        });

    }

    async listar(){
        firebase.firestore().collection("usuario").get().then((retorno) => {
          var state = this.state;
          retorno.forEach((item) => {
        
            state.dados.push({
              id: item.id,
              nome: item.data().nome,
              sobrenome: item.data().sobrenome,
              nascimento: item.data().nascimento
            });
    
          });
          this.setState(state);
        });
    }

    render(){
        return(
            <div>
                <h1>Página de Cadastro</h1>
                <input type="text" placeholder="E-mail" onChange={(e) => this.setState({email: e.target.value})} />
                <br></br>
                <input type="password" placeholder="Senha" onChange={(e) => this.setState({senha: e.target.value})} />
                <br></br>
                <input type="text" placeholder="Nome" onChange={(e) => this.setState({nome: e.target.value})} />
                <br></br>
                <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({sobrenome: e.target.value})} />
                <br></br>
                <input type="date" onChange={(e) => this.setState({nascimento: e.target.value})} />
                <br></br>
                <button onClick={this.gravar}>Salvar</button>
                <Link to="/"><button>Login</button></Link> <br/><br/>
                <ul>
                    {this.state.dados.map((item)=>{
                    return(
                        <li> {item.nome + " " + item.sobrenome} </li> 
                    )
                    })}
                </ul>
            </div>
        )
    }
}

export default Cadastro;