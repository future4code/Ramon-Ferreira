//-------------------------------------Exercícios de interpretação de código-------------------------------------


// Leia o código abaixo
// ```jsx
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])
// ```

//a)O que vai ser impresso no console?

//R:Matheus Nachtergaele
//Virginia Cavendish
//Canal Brasil", horario: "19h

// Leia o código abaixo
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a)O que vai ser impresso no console?

//R:nome: "Juba", 
// 	idade: 3, 
// 	raca: "SRD"

//nome: "Jubo", 
// 	idade: 3, 
// 	raca: "SRD"

//nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"

// b)O que faz a sintaxe dos três pontos antes do nome de um objeto?
//R: faz uma copia.

// Leia o código abaixo
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a)O que vai ser impresso no console?
//R:false
// undefined
// b)Explique o valor impresso no console. Você sabe por que isso aconteceu?
//R:imprime o boleano, pois foi a informação que pedimos, retonar undefined pois não ah nenhuma variavel de altura.


//---------------------------------------------Exercícios de escrita de código-------------------------------------

const pessoa = {
    nome: 'Ramon',
    apelidos: ['Ramonzinho', 'Mon', 'Ramonzito']
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)

//b)
const copiaPessoa = {
    ...pessoa,
    apelidos: ['Monmon','Maça','Branquelo']
}
console.log(copiaPessoa)

//2)

const pessoa1 = {
    nome: 'João',
    idade: 26,
    profissao: 'Streamer'
}
console.log(pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length)

const pessoa2 = {
    nome: 'Gessica',
    idade: 31,
    profissao: 'Psicologa'
}
console.log(pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length)

// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

//3)

let carrinho = []

const produtos1 = {
    nome: 'Maça',
    disponibilidade: true
}

const produtos2 = {
    nome: 'Uva',
    disponibilidade: true
}

const produtos3 = {
    nome: 'Kiwi',
    disponibilidade: true
}

carrinho.push(produtos1, produtos2, produtos3)

console.log(carrinho)




