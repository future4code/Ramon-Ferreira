import React from "react"
import {useEffect, useState} from "react"
import { List } from "./components/List"
import { Match } from "./components/Match"

const App = () => {
const [currentPage, setCurrentPage] = useState("home")

const changePage = () => {
  if (currentPage === "home"){
    setCurrentPage("matches")
  } else {
    setCurrentPage("home")
  }
}

const cleanMatches = () => {
  console.log("Esse botão vai limpar os matches")
}

  return (
    <div>Match
      {currentPage ==="home" ? <Match/> : <List/>}
      <button onClick={changePage}>{currentPage === "home" ? "Ir para Matches" : "Ir para Home"}</button>
      <button onClick={cleanMatches}>Limpar Matches</button>
    </div>
    
  )
}

export default App