let listaDeEstudantes = [
    {
        nomeDoEstudante: 'João',
        primeiraNota: 6,
        segundaNota: 9,
    },

    {
        nomeDoEstudante: 'Fulano',
        primeiraNota: 5,
        segundaNota: 3,
    },

    {
        nomeDoEstudante: 'Cicrano',
        primeiraNota: 8,
        segundaNota: 8,
    }        
]

function calculaMedia(primeiraNota,segundaNota) {
let media = (primeiraNota + segundaNota) / 2
return media
}


for(let estudante of listaDeEstudantes){
    mediaIndividual = calculaMedia(estudante.primeiraNota, estudante.segundaNota)
    let aprovadoOuNao = mediaIndividual < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns pela sua aprovação'

    alert(`A média de ${estudante.nomeDoEstudante} é ${mediaIndividual}.
${aprovadoOuNao}`)
}      