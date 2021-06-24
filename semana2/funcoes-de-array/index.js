//-------------------------Exercícios de interpretação de código
/*
1.  Leia o código abaixo

    ```jsx
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" }
    ]

    const novoArrayA = usuarios.map((item, index, array) => {
       console.log(item, index, array)
    })
    ```

    a) O que vai ser impresso no console?
//R: nome: "Amanda Rangel", apelido: "Mandi"
     nome: "Laís Petra", apelido: "Laura"
     nome: "Letícia Chijo", apelido: "Chijo"
2. Leia o código abaixo

    ```jsx
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]

    const novoArrayB = usuarios.map((item, index, array) => {
       return item.nome
    })

    console.log(novoArrayB)
    ```

    a) O que vai ser impresso no console?
    nome: "Amanda Rangel"
    nome: "Laís Petra"
    nome: "Letícia Chijo"
3. Leia o código abaixo

    ```jsx
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]

    const novoArrayC = usuarios.filter((item, index, array) => {
       return item.apelido !== "Chijo"
    })

    console.log(novoArrayC)
    ```

    a) O que vai ser impresso no console?
    nome: "Amanda Rangel", apelido: "Mandi"
    nome: "Laís Petra", apelido: "Laura"
*/

//-----------------------Exercícios de escrita de código

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const arrayNomePets = pets.map((item) => {
     return item.nome
 })
console.log(arrayNomePets)


const arraySalsicha = pets.filter((item) => {
    return item.raca === 'Salsicha'
})
console.log(arraySalsicha)

const arrayPoodle = pets.filter((item) => {
    return item.raca === 'Poodle'
})

const descontoPoodle = arrayPoodle.map((item) =>{
    return console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
})

//

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const nomeProdutos = produtos.map((item) => {
    return item.nome
})
console.log(nomeProdutos)

const produtosDesconto5 = produtos.map((item, index, array) => {
    const valor = 5 / 100
    const desconto = item.preco - valor
    const novoObjeto = {
        nome: item.nome, preco: desconto
    }
    return novoObjeto
})
console.log(produtosDesconto5)



