import {BrowserRouter, Routes, Route  } from "react-router-dom"
import NavBar from "../components/NavBar"
import CharacterDetailPage from "../pages/CharacterDetailPage/CharacterDetailPage"
import CharacterListPage from "../pages/CharacterListPage/CharacterListPage"
import Home from "../pages/Home/Home"

const Router = () => {

    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/detail/:id" element={<CharacterDetailPage/>}/>
                <Route path="/list-page" element={<CharacterListPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router