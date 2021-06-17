//Exercícios de interpretação de código

// 1. Leia o código abaixo

//     ```jsx
//     function minhaFuncao(variavel) {
//     	return variavel * 5
//     }

//     console.log(minhaFuncao(2))
//     console.log(minhaFuncao(10))
//     ```

//     a) O que vai ser impresso no console?
//R: 10
//     b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//R: 50
// 2. Leia o código abaixo

//     ```jsx
//     let textoDoUsuario = prompt("Insira um texto");

//     const outraFuncao = function(texto) {
//     	return texto.toLowerCase().includes("cenoura")
//     }

//     const resposta = outraFuncao(textoDoUsuario)
//     console.log(resposta)
//     ```

//     a. Explique o que essa função faz e qual é sua utilidade
//R: De acordo com o que for escrito no prompt, a função ira deixar tudo em caixa baixa e verificar se existe os caracteres "ceboura"
//     b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//          i.   `Eu gosto de cenoura`
//R:true
//          ii.  `CENOURA é bom pra vista`
//R:true
//          iii. `Cenouras crescem na terra`
//R:false


//Exercícios de escrita de código


const informacoes = () => {
    console.log(`Eu sou Ramon, tenho 20 anos, moro em Salvador e sou estudante.`)
}

informacoes()

const nomeDeUsuario = prompt('Qual seu nome?')
const idadeUsuario = Number(prompt('Qual sua idade?'))
const cidadeUsuario = prompt('Qual cidade você mora?')
const profissaoUsuario = prompt('Qual sua profissão?')

const informacoesUsuario = (nome, idade, cidade, profissao) => {
    const texto = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
    return texto
}

const resultadoInformações =informacoesUsuario(nomeDeUsuario, idadeUsuario, cidadeUsuario, profissaoUsuario)

console.log(resultadoInformações)


const numeros = (numero1, numero2) => {
    const soma = numero1 + numero2
    return soma
}

const resultadoSoma = numeros(5, 5)
console.log(resultadoSoma)

const numerosMaiorOuIgual = (numero1, numero2) => {
    const IgualOuMaior = numero1 >= numero2
    return IgualOuMaior
}
const resultadoIgualOuMaior = numerosMaiorOuIgual(5, 5)
console.log(resultadoIgualOuMaior)


const numerosPar = (numero1) => {
    const numeroEPar = numero1 / 2 === 0
    return numeroEPar
}
const resultadoNumeroPar = numerosPar(5)
console.log(resultadoNumeroPar)

const letrasMaiusculas = (string) => {
const umaString = prompt('Escreva uma frase.').toUpperCase()
return umaString
}

const minhaString = letrasMaiusculas()
console.log(minhaString)

const numeroUsuario1 = Number(prompt('Escolha seu primeiro numero.'))
const numeroUsuario2 = Number(prompt('Escolha seu segundo numero.'))
const numerosParaSoma = (numero1, numero2) => {
    const soma = numero1 + numero2
    return soma
}
const resulUsuarioSoma = numerosParaSoma(numeroUsuario1, numeroUsuario2)
console.log('Soma:', resultadoSoma)

const numerosSubtração = (numero1, numero2) => {
    const subtração = numero1 - numero2
    return subtração
}
const resultadoUsuarioSubtração = numerosSubtração(numeroUsuario1, numeroUsuario2)
console.log('Subtração:', resultadoUsuarioSubtração)

const numerosMultiplicacao = (numero1, numero2) => {
    const multiplicacao = numero1 * numero2
    return multiplicacao
}
const resultadoMultiplicacao = numerosMultiplicacao(numeroUsuario1, numeroUsuario2)
console.log('Multiplicação:', resultadoMultiplicacao)

const numerosDivisao = (numero1, numero2) => {
    const divisao = numero1 / numero2
    return divisao
}
const resultadoDivisao = numerosDivisao(numeroUsuario1, numeroUsuario2)
console.log('Divisão:', resultadoDivisao)

