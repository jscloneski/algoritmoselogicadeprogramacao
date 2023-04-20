/*Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.*/


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
alert('Resultado do Resto da Divisão: ' + restDiv)



if (restDiv == 0){
    alert("A soma dos dois números é par")
} else {
    alert("A soma dos dois números é ímpar")
}

if (firstNumber == secondNumber){
    alert("Os dois números são iguais")
} else {
    alert("Os dois números são diferentes")
}