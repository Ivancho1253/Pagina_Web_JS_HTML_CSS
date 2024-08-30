function TestCorrecto() {   
    var PreguntasCorrectas = {
        q1: "a",
        q2: "c",
        q3: "c",
        q4: "c",
        q5: "b",
        q6: "c",
        q7: "b"
    };

    var Puntaje = 0;
    var totalPuntaje = 7;
    var contestadas = true;

    for (var opciones in PreguntasCorrectas) {
        var seleccionarOpcion = document.querySelector('input[name="' + opciones + '"]:checked');
        if (!seleccionarOpcion) {
            contestadas = false; // Si alguna pregunta no está contestada, se marca como falso
            break; // Se detiene el bucle si se encuentra una pregunta sin responder
        }
        if (seleccionarOpcion.value === PreguntasCorrectas[opciones]) {
            Puntaje++;
        }
    }

    var result = document.getElementById('resultado');

    if (!contestadas) {
        result.innerHTML = "<h2>Por favor, contesta todas las preguntas antes de enviar.</h2>";
    } else {
        result.innerHTML = "<h2>Tu puntuación es: " + Puntaje + " de " + totalPuntaje + "</h2>";
    }
}
