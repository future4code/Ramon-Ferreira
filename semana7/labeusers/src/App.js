import "./App.css";
import React from "react";
import axios from "axios";
import Cadastro from "./components/CadastroUsuario";
import Lista from "./components/ListaUsuario";

export default class App extends React.Component {
  state = {
    home: true,
  };

  renderizaTela = () => {
    if (this.state.home) {
      return <Cadastro cadastro={this.telaCadastro} />;
    } else {
      return <Lista listaUsuario={this.telaUsuarios} />;
    }
  };

  telaCadastro = () => {
    this.setState({ home: false });
  };

  telaUsuarios = () => {
    this.setState({ home: true });
  };

  render() {
    return (
      <div>
        <h1>LabeUsers</h1>
        <hr />
        {this.renderizaTela()}
      </div>
    );
  }
}
