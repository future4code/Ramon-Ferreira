let nome = prompt('Qual o seu nome?')
let idade = Number(prompt('Qual sua idade?'))

console.log(typeof nome,typeof idade)
console.log('Olá', nome,'você tem', idade, 'anos.')

/*d) O termo undefined aparece de forma automatica quando não se atribui um valor a variavel,
mas por pratica de bons habitos optei em colocar manualmente*/

let perguntas = prompt('Você esta bem?')
console.log('Você esta bem?', perguntas)
let perguntas2 = prompt('Bebeu agua hoje?')
console.log('Bebeu agua hoje?', perguntas2)
let perguntas3 = prompt('Ja foi olhar o sol hoje?')
console.log('Ja foi olhar o sol hoje?', perguntas3)

let a = 10
let b = 25
let c = undefined

c = b
b = a
a = c

console.log('O novo valor de a é', a)
console.log('O novo valor de b é', b)
