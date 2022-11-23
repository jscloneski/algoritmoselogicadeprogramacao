/*
    Capturar 2 números e fazer as operações matemáticas
    de soma, subtração, multiplicação, divisão e resto da divisão.

    E para cada operação, mostrar um alerta com o resultado.
*/

let firstNumber = prompt(firstNumber)
let secondNumber = prompt(secondNumber)

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)
