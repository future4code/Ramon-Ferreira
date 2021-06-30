/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   const boasVindas = console.log('Boas vindas ao jogo de Blackjack!')

    if (confirm('Quer iniciar uma nova rodada?')){

    const carta = comprarCarta()

   console.log(carta.texto) 
   console.log(carta.valor) 

    let cartaJogador = [comprarCarta(),comprarCarta()]
    let pontuacaoJogador = cartaJogador[0].valor + cartaJogador[1].valor
      console.log(`Usuário - cartas: ${cartaJogador[0].texto}, ${cartaJogador[1].texto} - pontuação ${pontuacaoJogador} `)
      console.log(cartaJogador) 

    let cartaComputador = [comprarCarta(),comprarCarta()]
    let pontuacaoComputador = cartaComputador[0].valor + cartaComputador[1].valor
      console.log(`Computador - cartas: ${cartaComputador[0].texto}, ${cartaComputador[1].texto} - pontuação ${pontuacaoComputador}`)
      console.log(cartaComputador) 
    
    if (pontuacaoJogador === pontuacaoComputador) {
   console.log('Empate!')
   }  else if  (pontuacaoJogador > pontuacaoComputador) {
   console.log('O usuário ganhou!')
   }  else if (pontuacaoJogador < pontuacaoComputador) {
   console.log('O computador ganhou!')
   } 
   }  else {
      console.log('O jogo acabou.') }
