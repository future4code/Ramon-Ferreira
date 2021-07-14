import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
                <Post
          nomeUsuario={'ramondf13'}
          fotoUsuario={'https://scontent-for1-1.xx.fbcdn.net/v/t1.6435-9/61628992_454204741820302_1122435148135006208_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=tWz499-Ob8AAX8CKGFz&_nc_ht=scontent-for1-1.xx&oh=0ec4e257d5d92b6c4660bfad08fd0eab&oe=60F39406'}
          fotoPost={'https://scontent.ffor10-1.fna.fbcdn.net/v/t1.6435-9/37392558_293777194529725_6989472319714361344_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9YlbS60Z1csAX-y5qPT&_nc_ht=scontent.ffor10-1.fna&oh=da10e61f65308121542d869d1c2a2e10&oe=60F3F5B7'}
        />
                <Post
          nomeUsuario={'d0b3m'}
          fotoUsuario={'https://scontent.ffor10-1.fna.fbcdn.net/v/t1.6435-9/209800309_2015220351949695_5920672827803615650_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Z3UhpmQyKuoAX_J72YJ&tn=eowOD1RED9kY5QwN&_nc_ht=scontent.ffor10-1.fna&oh=2286e7380a5370e279abf13c97cfdc3f&oe=60F4BCBF'}
          fotoPost={'https://scontent.ffor10-1.fna.fbcdn.net/v/t1.6435-9/87047955_1586906071447794_8182747296924958720_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=RgIuOT7KxwUAX8evJdr&_nc_ht=scontent.ffor10-1.fna&oh=b65444a9fcdce997cc2597901ca8707a&oe=60F46172'}
        />
      </MainContainer>
    );
  }
}

export default App;
