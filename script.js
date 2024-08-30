function TestCorrecto() {   
    var PreguntasCorrectas = {
        q1: "a",
        q2: "c",
        q3: "c",
        q4: "a",
        q5: "b",
        q6: "c",
        q7: "b"
    };

    var Puntaje = 0;
    var totalPuntaje = 7;

    for (var opciones in PreguntasCorrectas) {
        var seleccionarOpcion = document.querySelector('input[name="' + opciones + '"]:checked');
        if (seleccionarOpcion && seleccionarOpcion.value === PreguntasCorrectas[opciones]) {
            Puntaje++;
        }
    }

    var result = document.getElementById('resultado');
    result.innerHTML = "<h2>Tu puntuación es: " + Puntaje + " de " + totalPuntaje + "</h2>";
}

