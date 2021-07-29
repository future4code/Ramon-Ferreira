import React from "react";
import axios from "axios";
import App from "../App";
import Lista from "./ListaUsuario";

const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`;

const headers = {
  headers: {
    Authorization: "ramon-dias-lovelace",
  },
};

export default class Cadastro extends React.Component {
  state = {
    InputNome: "",
    InputEmail: "",
  };

  mudaInputNome = (e) => {
    this.setState({ InputNome: e.target.value });
  };

  mudaInputEmail = (e) => {
    this.setState({ InputEmail: e.target.value });
  };



  novoUsuario = () => {
    const body = {
      name: this.state.InputNome,
      email: this.state.InputEmail,
    };
    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Usuario cadastrado com sucesso!");
        this.setState({ InputNome: "" });
        this.setState({ InputEmail: "" });
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  render() {
      return (
        <div>
          <button onClick={this.props.cadastro}>Lista de Usuarios</button>
          <input value={this.state.InputNome} onChange={this.mudaInputNome} />
          <input value={this.state.InputEmail} onChange={this.mudaInputEmail} />
          <button onClick={this.novoUsuario}>Enviar</button>
        </div>
      );
  }
}
