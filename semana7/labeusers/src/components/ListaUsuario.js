import React from "react";
import axios from "axios";
import App from "../App";
import Cadastro from "./CadastroUsuario";

const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`;

const headers = {
  headers: {
    Authorization: "ramon-dias-lovelace",
  },
};

export default class Lista extends React.Component {
    state = {
        Lnomes: [],
        Lemail: [],
    }

    pegarUsuarios = () => {
        axios
          .get(url, headers)
          .then((res) => {
            this.setState({ Lnomes: res.data });
            console.log(res);
          })
          .catch((error) => {
            alert(error.response.data);
          });
      };

      componentDidMount = () => {
        this.pegarUsuarios();
      };

  render() {
        const componenteCadastro = this.state.Lnomes.map((n) => {
          return <li key={n.id}>{n.name}</li>;
        });
    return (
      <div>
          {componenteCadastro}
        <button onClick={this.props.listaUsuario}>Ir para Cadastro</button>
        
      </div>
    );
  }
}
