import React, {Component} from 'react';
import firebase from 'firebase';

class Home extends Component{
    constructor(props){
      super(props);
      this.state = {
        nome: "",
        sobrenome: "",
        nascimento: ""
      }
    }

    async componentDidMount() {

      await firebase.auth().onAuthStateChanged(async (usuario)=> {

        if(usuario){
          var uid = usuario.uid;
          await firebase.firestore().collection("usuario").doc(uid).get()
          .then((retorno) => {
            this.setState({
              nome: retorno.data().nome,
              sobrenome: retorno.data().sobrenome,
              nascimento: retorno.data().nascimento
            })
          })
        }
      })
    }

    render(){
      return(
        <div>
            <h1>Página principal</h1>
            <p>Logado como:{this.state.nome} {this.state.sobrenome} </p> <br/>
            <p>Nascido em:{this.state.nascimento} </p> <br/>
        </div>
      )
    }
}

export default Home;