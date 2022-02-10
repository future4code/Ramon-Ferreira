import { useNavigate } from "react-router-dom";


const NavBar = () => {
const navigation = useNavigate()

    const getOnClick = (page) => () => navigation(page)

    

    return (
      <div className="App">
        <button onClick={getOnClick("/")}>Home</button>
        <button onClick={getOnClick("/list-page")}>Character Page</button>
      </div>
    );
  }
  
  export default NavBar;