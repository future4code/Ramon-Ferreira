import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
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
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <Card>
            <ImagemCard src={ props.imagem } />
            <Alinhar>
                <Texto>{ props.nome }</Texto>
                <p>{ props.descricao }</p>
            </Alinhar>
        </Card>
    )
}

export default CardGrande;