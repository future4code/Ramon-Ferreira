//--------------------------------Exercícios de interpretação de código----------------------------------------
// 1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

//     ```jsx
    // let array
    // console.log('a. ', array)
// R: a. undefined
    // array = null
    // console.log('b. ', array)
//R: b. null
    // array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    // console.log('c. ', array.length)
//R: c. 11
    // let i = 0
    // console.log('d. ', array[i])
//R: d. 3
    // array[i+1] = 19
    // console.log('e. ', array)
//R: e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    // const valor = array[i+6]
    // console.log('f. ', valor)
//R: f. 9
//     ```

// 2. Leia o código abaixo com atenção 

//     ```jsx
    // const frase = prompt("Digite uma frase")

    // console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//     ```

//     Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

//R: "SUBI NUM ÔNIBUS EM MIRROCOS" 27

//----------------------------------Exercícios de interpretação de código-----------------------------------------

const nomeDoUsuario = prompt('Qual o seu nome?')
const emailDoUsuario = prompt('Qual seu e-mail?')
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)

const comidas = ['Pipoca', 'Pizza', 'Lasanha', 'Macarrão', 'Purê de batata']
// console.log(comidas)
console.log('Essas são as minhas comidas preferidas:', comidas)

const suaComidaPreferida = prompt('Qual sua comida favorita?')
comidas[1] = suaComidaPreferida
console.log(comidas)

const listaDeTarefas = []
const tarefa1 = prompt('Qual sua primeira tarefa?')
listaDeTarefas[0] = tarefa1

const tarefa2 = prompt('Qual sua segunda tarefa?')
listaDeTarefas[1] = tarefa2

const tarefa3 = prompt('Qual sua terceira tarefa?')
listaDeTarefas[2] = tarefa3

console.log('Minha lista de tarefas', listaDeTarefas)

const tarefaFeita = Number(prompt('Qual tarefa você ja realizou, 1/2/3 ?'))
listaDeTarefas.splice(tarefaFeita, 1) -1
console.log('Falta essas tarefas: ', listaDeTarefas)



