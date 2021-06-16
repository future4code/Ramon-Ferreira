//Exercícios de interpretação de código

/*
1) const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
resultado será = false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
resultado será = false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
resultado será = true

console.log("d. ", typeof resultado)
resultado será = boleam

2)
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

Será uma soma de string, deveria usar a sintexe Number() no prompt.

3)
Usar a sintexe Number() no prompt
Ex: 
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
*/

//--------------------------------------------Exercícios de escrita de código------------------------------------------------

//1)
const idadeDoUsuario = prompt('Qual sua idade?')
console.log(idadeDoUsuario)

const idadeAmizade = prompt('Qual a idade do seu melhor amigo(a)?')
console.log(idadeAmizade)

console.log('Sua idade é maior do que a do seu amigo(a)?', idadeDoUsuario>idadeAmizade)

console.log('Diferença de idade.', idadeDoUsuario - idadeAmizade)

//2)

const numeroPar = Number(prompt('Insira um número par.'))
console.log('O resto é: ', numeroPar % 2)

//c) A respota sempre será 0 para numeros pares.

//d) A respota sempre será diferente de 0.

//3)

const idadeEmAnos = Number(prompt('Qual sua idade?'))

console.log('Idade em meses:', idadeEmAnos * 12)

console.log('Idade em dias:', idadeEmAnos * 365)

console.log('Idade em horas:', idadeEmAnos * 8760 )

//4)

const numero1 = Number(prompt('Insira um número.'))
const numero2 = Number(prompt('Insira outro número.'))

console.log('O primeiro numero é maior que segundo?', numero1 > numero2)
console.log('O primeiro numero é igual ao segundo?', numero1 === numero2)
console.log('O primeiro numero é divisível pelo segundo?', numero1 % numero2 === 0)
console.log('O segundo numero é divisível pelo primeiro?', numero2 % numero1 === 0)

