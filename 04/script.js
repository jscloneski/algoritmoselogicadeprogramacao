/*
    Solicitar o nome do aluno e as 3 notas do bimestre, calcular a média daquele aluno.

    Se o aluno passou no bimestre, dar os parabéns.

    Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.

    Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.
*/
alert('Vamos calcular a média!')

let nome = prompt('Qual o seu nome?')

let nota1 = prompt(nome + ', digite a nota 1:')
let nota2 = prompt(nome + ', digite a nota 2:')
let nota3 = prompt(nome + ', digite a nota 3:')

nota1 = Number(nota1)
nota2 = Number(nota2)
nota3 = Number(nota3)

let result = (nota1 + nota2 + nota3) / 3

result = result.toFixed(2)

if (result >= 6) {
    alert('Parabéns, ' + nome + '. Você passou. Sua média é: ' + result)
} else {
    alert('Não foi desta vez, ' + nome + '. Mas continue estudando. Sua média foi: ' + result)
}