import React from "react"
import { useHistory } from "react-router"

export const LoginPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToListTrips = () => {
        history.push("/admin/list/trips")
    }
    return(
        <div>
            <p>LoginPage</p>
            <button onClick={goBack}>Voltar</button>
            <button>Entrar</button>
        </div>
    )
}