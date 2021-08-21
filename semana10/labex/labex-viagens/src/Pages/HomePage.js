import React from "react"
import { useHistory } from "react-router"

export const HomePage = () => {
    const history = useHistory()

    const goToLoginPage = () => {
        history.push("/login")
    }
    return(
        <div>
            <p>HomePage</p>
            <button>Viagens</button>
            <button onClick={goToLoginPage}>Area Admin</button>
        </div>
    )
}









