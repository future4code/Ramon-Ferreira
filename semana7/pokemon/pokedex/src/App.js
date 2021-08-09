import React from "react";
import styled from "styled-components";

const BorderTop = styled.div`
  border-top: 3.5px solid var(--main-buttons-color);
  position: absolute;
  top: -3px;
  left: 20px;
  right: 19.5px;
`;

const BorderBottom = styled.div`
  border-top: 3.5px solid var(--main-buttons-color);
  position: absolute;
  top: 11px;
  left: 20px;
  right: 19.5px;
`;

export default class App extends React.Component {
  render() {
    return (
      <div className="nav">
        <h1>Pokedex</h1>
        <div className="nav-center-circle"></div>
        <div className="nav-button-vertical"></div>
        <div className="nav-button-horizontal">
          <BorderTop />
          <BorderBottom />
        </div>
      </div>
    );
  }
}
