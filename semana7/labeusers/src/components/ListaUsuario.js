import React from "react";
import axios from "axios";
import App from "../App";
import Cadastro from "./CadastroUsuario";

export default class Lista extends React.Component {
    render () {
        const componenteCadastro = this.state.Lnomes.map((n) => {
            return <li key={n.id}>{n.name}</li>;
          })
        return (
        <div>
        <button onClick={this.props.telaCadastro}>Lista de Usuarios</button>
        {componenteCadastro}
        </div>
        )
    }
}