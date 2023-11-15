/*1. Programa uma função simples que verifica se um número é 
par ou ímpar. Caso seja par, o computador deve imprimir "Par". 
Caso seja ímpar, o computador deve imprimir "Ímpar". 
2. Modifica o código para utilizar um operador ternário em vez de 
uma condição if completa*/

count isEven= (n: number)=>{
  const even=n %2==0
  if (even){
    console.log('Par')
  } else{
    console.log('impar')
  }
}
const messege = even? 'Par': 'impar'

///////////////////////

/* Exercicio 3.2*/

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
const computerNumber=generateRandom(0,100)

console.log(`Número escolhido:${computerNumber}')

const userChoise= Number.parseint(prompt('Escolha um número')


if ( userChoise>computerNumber){
  console.log(`Demasiado alto`)
} else if ( userChoise<computerNumber){
  console.log(`Demasiado baixo`)

} else {
  console.log('Certo, Acertaste!')
}
