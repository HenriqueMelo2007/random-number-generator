let intervalo
let intervalo2

let numero

const botao = document.querySelector('#button')
botao.addEventListener('click', iniciar)

function iniciar () {
  numero = 0
  intervalo = setInterval(contagem1a100, 10)
  intervalo2 = setInterval(atribuindoAoHTML, 10)
  setTimeout(limparIntervalo, 999)
  setTimeout(limparIntervalo2, 999)
  setTimeout(gerarNumeroAleatorio, 1010)
}

function gerarNumeroAleatorio () {
  let numeroAleatorio = parseInt(Math.random() * 101)
  document.querySelector('#numero').innerHTML = numeroAleatorio
}



function limparIntervalo () {
  clearInterval(intervalo)
}

function limparIntervalo2 () {
  clearInterval(intervalo2)
}



function contagem1a100 () {
  numero++
  console.log(numero)
}

function atribuindoAoHTML () {
  document.querySelector('#numero').innerHTML = numero
}