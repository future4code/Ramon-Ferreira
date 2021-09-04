import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "../components/Header/Header"
import { Home } from "../pags/HomePag/Home"
import { Feed } from "../pags/FeedPag/Feed"
import { Login } from "../pags/LoginPag/Login"
import { Post } from "../pags/PostPag/Post"


export const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/login">
                <Login/>
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
