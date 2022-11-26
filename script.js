/*
    Solicitar o nome do aluno e as 3 notas do bimestre, calcular a média daquele aluno.

    Se o aluno passou no bimestre, dar os parabéns.

    Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.

    Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.
*/
alert('Vamos calcular a média!')

let nota1 = prompt('Digite a nota 1:')
let nota2 = prompt('Digite a nota 2:')
let nota3 = prompt('Digite a nota 3:')

nota1 = Number(nota1)
nota2 = Number(nota2)
nota3 = Number(nota3)

let result = (nota1 + nota2 + nota3) / 3

if (result >= 5) {
    alert('Parabéns, você passou. Sua média é: ' + result)
} else {
    alert('Não foi desta vez, mas continua estudando. Sua média foi: ' + result)
}