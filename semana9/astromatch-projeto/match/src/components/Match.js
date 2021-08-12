import React, {useEffect, useState} from "react"
import styled from "styled-components"
import axios from "axios"

const All = styled.div `
display: flex;
flex-direction: column;
align-items: center;
border-style: solid;
padding: 10px;
box-shadow: 10px 10px 20px black;

img {
    width: 50%;
    height: 50%;
}
`

export const Match = () => {
    const [profile, setProfile] = useState({})

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ramon-dias-lovelace/person"

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = () => {
        axios.get(url)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    return(
    <All>
        <img src="https://i.picsum.photos/id/980/200/200.jpg?hmac=6XJlc3jZzO4_ikuKGQFXIuERlW0eZx82q3xiC-b3Tso"></img>
        <div>
            <p>Nome</p>
            <p>Descrição</p>
            <button>❌</button>
            <button>❤</button>
        </div>
    </All>
    )
}