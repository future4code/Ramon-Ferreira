import axios from "axios"
import { useEffect, useState } from "react"
import {BASE_URL} from "../../routes/Coodinator"


function CharacterListPage() {
    const [list, setList] = useState([])
    console.log(list)
    const getList = () => {
        axios.get(BASE_URL)
        .then((res) => {setList(res.data.results);})
        .catch((error) => {})
    }
    useEffect(() => {getList()},[]) 

    const renderList = list.map((character) => {
        return character.name
    })
    return (
      <div className="App">
        <h1>List Page</h1>
        {renderList}
      </div>
    );
  }
  
  export default CharacterListPage;