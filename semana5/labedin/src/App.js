import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from 'styled-components'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent-for1-1.xx.fbcdn.net/v/t1.6435-9/56161319_423400954900681_1898145111246635008_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=djkolHjpX-UAX8Cutz2&tn=eowOD1RED9kY5QwN&_nc_ht=scontent-for1-1.xx&oh=86640f3fdb9ddd601ab85709d4094e01&oe=60F2F252" 
          nome="Ramon Dias Ferreira" 
          descricao="Oi, eu sou o Ramon Dias. Sou estudante na Labenu. Iniciando carreira como desenvolvedor web full stack."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
        imagem="https://img2.gratispng.com/20180328/gie/kisspng-email-logo-irregular-exposure-showroom-fashion-a-circle-5abb3e7b5154c5.4368389815222206673331.jpg"
        nome="E-mail:"
        descricao="ramondf@gmail.com"
        />

<CardPequeno
        imagem="https://i.pinimg.com/originals/1b/d5/61/1bd5614a975851333008f294f6af94d1.png"
        nome="Endereço:"
        descricao="Salvador-BA"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Dev Web Full-Stack" 
          descricao="Cursando na Labenu!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Debugando." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
