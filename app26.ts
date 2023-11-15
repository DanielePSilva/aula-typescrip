/* Exercicio 2.6
O nosso site está com vários utilizadores internacionais, pelo que vamos precisar de uma funcionalidade de conversão de moeda.

Criar uma função que ao receber um preço no formato "€ 11,23", separe a string no seu valor numérico e moeda correspondente. O símbolo da moeda está sempre no início da string, e deve ser convertido para o código 'EUR', 'USD' ou 'GBP'.
Armazenar os seguintes valores de conversão: EUR: 1 / USD: 1.07 / GBP: 0.87
Criar uma função capaz de receber um valor numérico, uma moeda base e uma moeda final e que retorne o valor formatado na moeda final.
Exemplo:

convert(10, 'USD', 'GBP') // => "$ 12.30"*/

const value = "€ 11.23"
const currencySymbol=value.charAt(0)
const number=value.slice(2)

value splitValue= value.split(' ')
const[curencySymbol, strNumber]= splitValue
const number= Number.parseFloat(strNumber)

console.log({currencySymbol,number})

const currencyCodeMap: Record<string,  string={

  '€':'EUR',
  '$':'USD',
  '£':'GBP',
}

console.log(currencyCodeMap)