//------------------------------Exercícios de interpretação de código----------------------------------------
/*
1. Leia o código abaixo:

    ```jsx
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)

    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    ```

    a) Explique o que o código faz. Qual o teste que ele realiza? 
//R: Ele verifica se o resto do numero é igual a zero, se sim, passsa no teste; se não, não passa no teste.
    b) Para que tipos de números ele imprime no console "Passou no teste"? 
//R: Numeros pares
    c) Para que tipos de números a mensagem é "Não passou no teste"? 
//R: Numeros imapares

2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

    ```jsx
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    ```

    a) Para que serve o código acima?
//R: Armazenar objetos para o carrinho.
    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//R: O preço da fruta , maçã é, R$ 2.25
    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//R: Undefined 

3. Leia o código abaixo:

    ```jsx
    const numero = Number(prompt("Digite o primeiro número."))

    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }

    console.log(mensagem)
    ```

    a) O que a primeira linha está fazendo?
//R: armazenando um number de um prompt
    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//R: Esse numero passou no teste. Essa mensagem é secreta
    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//R: 
    */

//--------------------------------------Exercícios de escrita de código--------------------------------------------

const idadeUsuario = Number(prompt('Qual sua idade?'))

if (idadeUsuario >= 18) {
    console.log('Pode dirigir.')
} else {
    console.log('Não pode dirigir.')
}

const turno = prompt('Qual seu turno? Digite: *M** (matutino) ou *V* (Vespertino) ou *N* (Noturno).').toLocaleUpperCase()

if (turno === 'M') {
    console.log('Bom dia!')
} else if (turno === 'V') {
    console.log('Boa tarde!')
} else if (turno === 'N') {
    console.log('Boa noite!')
} else {
   console.log('Tenha um otimo dia!') 
}

//-------------------------------------------------------------------------------------------------------------
const turno2 = prompt('Qual seu turno? Digite: *M** (matutino) ou *V* (Vespertino) ou *N* (Noturno).').toLocaleUpperCase()

switch (turno2) {
    case 'M':
        console.log('Bom dia!')
        break
    case 'V':
        console.log('Boa tarde!')
        break
    case 'N':
        console.log('Boa noite!')
        break
    default:
        console.log('Tenha um otimo dia!')
        break
}


const filme = prompt('Qual o genero do filme?').toLowerCase()
const ingresso = Number(prompt('Qual o valor do ingresso?'))

if (filme === 'fantasia' && ingresso <= 15) {
    console.log('Bom filme.')
} else {
    console.log('Escolha outro filme.')
}










