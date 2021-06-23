//-----------------Exercícios de interpretação de código-----------------------
/*
1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

    ```jsx
    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)
    ```
//R: Está adicionando +1 a variavel valor e imprimindo ate o valor 4
2. Leia o código abaixo:

    ```jsx
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
    		console.log(numero)
    	}
    }
    ```

    a) O que vai ser impresso no console?
//R: 30
    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
//R: Teria que especificar a impressão da array no console
3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

    ```jsx
    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
      }
      console.log(linha)
      quantidadeAtual++
    }

    ````
//R: ****
*/

//-----------------------------Exercícios de escrita de código
/*
1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

    - 💡 Dica

        Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

    c) Por fim, imprima o array com os nomes dos bichinhos no console

2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

    a) Escreva um programa que **imprime** cada um dos valores do array original.

    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
*/

const arrayEstimacao = []
const animaisDeEstimacao = Number(prompt('Quantos bichos de estimação você tem?'))

if (animaisDeEstimacao === 0) {
    console.log('Que pena! Você pode adotar um pet!')
} else
    {
    const listaPets = []
    for (let i = 0; i < animaisDeEstimacao; i++) {
        const nomePets = prompt('Qual o nome dos seus pets?')
        listaPets.push(nomePets)
        console.log(listaPets)
    }
}

const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let valores of arrayOriginal) {
    console.log(valores)
} for (let i = 0; i < arrayOriginal ; i++) {
    let = arrayOriginal / 10
    console.log(arrayOriginal)
}









