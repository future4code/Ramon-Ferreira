import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Cadastro } from "../pags/CadastroPag/Cadastro"
import { Feed } from "../pags/FeedPag/Feed"
import { Login } from "../pags/LoginPag/Login"
import { Post } from "../pags/PostPag/Post"


export const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/cadastro">
                <Cadastro/>
            </Route>
            <Route exact path="/feed">
                <Feed/>
            </Route>
            <Route exact path="/post/:id">
                <Post/>
            </Route>
            <Route>
                <h1>Error</h1>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}
