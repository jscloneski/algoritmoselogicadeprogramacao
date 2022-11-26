/*
    Capturar 2 números e fazer as operações matemáticas
    de soma, subtração, multiplicação, divisão e resto da divisão.

    E para cada operação, mostrar um alerta com o resultado.
*/

let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Resultado da Soma: ' + sum)
alert('Resultado da Subtração: ' + sub)
alert('Resultado da Multiplicação: ' + multi)
alert('Resultado da Divisão: ' + div)
alert('Resultado do Resto da divisão: ' + restDiv)
