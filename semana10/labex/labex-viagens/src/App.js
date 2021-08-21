import './App.css';
import { HomePage } from './Pages/HomePage';
import { LoginPage } from './Pages/LoginPage';
import {BrowserRouter, Switch , Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/viagens">
          
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
