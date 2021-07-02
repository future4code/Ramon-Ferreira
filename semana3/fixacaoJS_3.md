```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let exercicio = ex * 1
  let prova1 = p1 * 2
  let prova2 = p2 * 3
  let pesoTotal = 1 + 2 + 3
  let nota = exercicio + prova1 + prova2
  let mediaPonderada = nota / pesoTotal
  if (mediaPonderada >= 9) {
    return "A"
  }else if (mediaPonderada < 9 && mediaPonderada >= 7.5) {
    return "B"
  }else if (mediaPonderada < 7.5 && mediaPonderada >= 6){
    return "C"
  }else if (mediaPonderada < 6){
    return "D"
  }
}
```