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
            setProfile(res.data.profile)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const choosePerson = () => {
        console.log("Botão de escolha")
    }

    return(
    <div>
        {!profile ? <div>Acabaram os perfis! Aperte o botão limpar.</div> :
    <All>
        <img src={profile.photo}></img>
        <div>
            <p>{profile.name}, {profile.age}</p>
            <p>{profile.bio}</p>
            <button onClick={choosePerson}>❌</button>
            <button onClick={choosePerson}>❤</button>
        </div>

    </All>
        }
    </div>
    )
}