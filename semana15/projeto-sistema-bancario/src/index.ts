import express, {Express, Request, Response} from "express"
import cors from "cors"
import { accounts } from "./accounts"

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post("/users/create", (req: Request, res: Response)=>{
    try {
        //Validar as entras da requisição
        //Consultar ou alterar a base de dados
        const {name, CPF, dateOfBirth} = req.body

        accounts.push({cd
            name,
            CPF,
            dateOfBirth,
            balance: 0,
            statement: []
        })

        //Validar os dados da consulta
        //Enviar a resposta
    } catch (error) {
        
    }
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})