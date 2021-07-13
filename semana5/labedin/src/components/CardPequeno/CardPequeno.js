import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    width: 87vh;
`
const ImagemCard = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const Texto = styled.h4`
    margin-bottom: 15px;
`
const Alinhar = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
`

function CardPequeno(props) {
    return (
        <Card>
            <ImagemCard src={ props.imagem } />
            <Alinhar>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </Alinhar>
        </Card>
    )
}

export default CardPequeno;