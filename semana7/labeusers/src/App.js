import "./App.css";
import React from "react";
import axios from "axios";

const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`;

const headers = {
  headers: {
    Authorization: "ramon-dias-lovelace",
  },
};

export default class App extends React.Component {
  state = {
    id: [],
    Lnomes: [],
    Lemail: [],
    InputNome: "",
    InputEmail: "",
  };

  componentDidMount = () => {
    this.pegarUsuarios();
  };

  mudaInputNome = (e) => {
    this.setState({ InputNome: e.target.value });
  };

  mudaInputEmail = (e) => {
    this.setState({ InputEmail: e.target.value });
  };

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
        this.pegarUsuarios();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }

    render() {
      const componenteCadastro = this.state.Lnomes.map((n) => {
        return <li key={n.id}>{n.name}</li>;
      })

      return (
        <div>
          <h1>LabeUsers</h1>
          <input
            value={this.state.InputNome}
            onChange={this.mudaInputNome}
          />
                    <input
            value={this.state.InputEmail}
            onChange={this.mudaInputEmail}
          />
          <button onClick={this.novoUsuario}>Enviar</button>
          {componenteCadastro}
        </div>
      )
    }
}
