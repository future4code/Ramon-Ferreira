import axios from "axios"
import { useEffect, useState } from "react"
import {BASE_URL} from "../../routes/Coodinator"
import { useNavigate } from "react-router-dom";
import "./index.css"

function CharacterListPage() {
    const [list, setList] = useState([])
    console.log(list)
    const getList = () => {
        axios.get(BASE_URL)
        .then((res) => {setList(res.data.results);})
        .catch((error) => {console.log(error)})
    }
    useEffect(() => {getList()},[]) 

    const navigation = useNavigate()

    const getOnClick = (page) => () => navigation(page)

    const renderList = list.map((character) => {
        return (
        <button onClick={getOnClick("/detail-page")}>{character.name}</button>
        )
    })

    return (
      <div className="page">
        <h1>List Page</h1>
        
        {renderList}
        
        
      </div>
    );
  }
  
  export default CharacterListPage;