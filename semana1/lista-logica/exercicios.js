// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  const trianguloAltura = Number(prompt('Qual a altura do triangulo?'))
  const trianguloLargura = Number(prompt('Qual a largura do triangulo?'))
  const resultadoArea = trianguloAltura * trianguloLargura
  console.log(resultadoArea)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Em que ano estamos?'))
  const anoDeNascimento = Number(prompt('Em que ano você nasceu?'))
  const idadeAtual = anoAtual - anoDeNascimento
  console.log(idadeAtual)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const alturaMetros = altura
  const seuPeso = peso
  const seuIMC = seuPeso / (alturaMetros * alturaMetros)
  return seuIMC

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const seuNome = prompt('Qual seu nome?')
  const suaIdade = prompt('Qual sua idade?')
  const seuEmail = prompt('Qual seu e-mail?')
  console.log(`Meu nome é ${seuNome}, tenho ${suaIdade} anos, e o meu email é ${seuEmail}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Qual sua primeira cor favorita?')
  const cor2 = prompt('Qual sua segunda cor favorita?')
  const cor3 = prompt('Qual sua terceira cor favorita?')
  console.log([cor1, cor2, cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const minhaString = string.toUpperCase()
  return minhaString

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const ingressosParaVender = custo / valorIngresso
  return ingressosParaVender

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const compararStrings = string1.length === string2.length
  return compararStrings

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  return primeiroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array.pop()
  return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const array1 = array[0]
  const array2 = array[array.length -1]

  array.splice(array[array.length -1], 1, 0)
  array.splice(0, 1, array[array.length -1])

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}