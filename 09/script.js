/*
    Dada uma lista de pacientes, descruba o IMC de cada paciente e imprima

    "Paciente X possui o IMC de: Y"

    Onde X é o nome do paciente e Y ´o IMC desse paciente

    Crie uma função para fazer cálculo de IMC
    */

    /* peso / (altura*altura) */

    const patients = [
    {
        name: "Luiz",
        age: 20,
        weight: 100,
        height: 190,
    },
    {
        name: "Alexandre",
        age: 27,
        weight: 70,
        height: 170,
    },
    {
        name: "Carlos",
        age: 42,
        weight: 90,
        height: 180,
    },
]

    function printPatientIMC(patient) {
        return`
            Paciente ${patient.name} possui o IMC de
            ${(patient.weight / ((patient.height / 100) ** 2)).toFixed (2)}
        `
    }

    for (let patient of patients) {
        let IMCmessage = printPatientIMC(patient)
        alert(IMCmessage)
    }





