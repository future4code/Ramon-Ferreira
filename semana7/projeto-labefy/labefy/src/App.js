import logo from './logo.svg';
import './App.css';
import React from 'react';

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
  headers: {
    Authorizathion: "ramon-dias-lovelace"
  }
}

export default class App extends React.Component {
  state= {
    nome: [],
    link: []
  }

  adicionaMusica = (e) => {
    this.setState({nome: e.target.value})
  }

  adicionaLink = (e) => {
    this.setState({link: e.target.value})
  }

  render () {
  return (
    <div>
      <h1>Labefy</h1>
      <input placeholder="Nome da Música" onChange={this.adicionaMusica}></input>
      <input placeholder="Link da Música" onChange={this.adicionaLink}></input>
    </div>
  )}
  }

