function fahrenheitToCelsius (fah) {
    return (fah - 32) * 5 / 9;
}

function tiraDados(dados, caras) {
    // Math.floor((Math.random() * [Núm. Máx.]) + 1)
    var result = 0;

    for (var i = 0; i < dados; i++) {
        result = result + Math.floor((Math.random() * caras) + 1);
    }

    return result;
}

function tiraDadosV2(dados, caras, mayores) {
    // Math.floor((Math.random() * [Núm. Máx.]) + 1)
    var result = [];

    for (var i = 0; i < dados; i++) {
        result.push(tiraDados(1, caras));
    }

    result.sort(function(a, b) {
        return b - a
    });

    for (var j = 0; j < dados - mayores; j++) {
        result.pop();
    }

    return result;
}

function getRadioValue(radios) {
    var resultado = "empty";
    var porNombre = document.getElementsByName(radios);

    for (var i = 0; i < porNombre.length; i++) {
        if (porNombre[i].checked)
            resultado = porNombre[i].value;
    }

    return resultado;
}

function generaPj() {
    //4d6h3 x7h6 -> Tirada 1
    var tirada1 = [];
    var tirada2 = [];

    for (var i = 0; i < 7; i++) {
        var r = tiraDadosV2(4, 6, 3);
        var r1 = 0;

        for (var j = 0; j < r.length; j++) {
            r1 = r1 + r[j];
        }

        tirada1.push(r1);
    }

    tirada1.sort(function(a, b) {
        return b - a
    }).pop();

    for (var i = 0; i < 7; i++) {
        var r = tiraDadosV2(4, 6, 3);
        var r1 = 0;

        for (var j = 0; j < r.length; j++) {
            r1 = r1 + r[j];
        }

        tirada2.push(r1);
    }

    tirada2.sort(function(a, b) {
        return b - a
    }).pop();

    document.getElementById("caracteristicas").innerHTML =
    "<br />" + new Date().toLocaleTimeString('es-ES', { hour: "numeric", minute: "numeric", second: "numeric"})
      + " --> " + tirada1.toString() + " // " + tirada2.toString();
}

function test () {
    alert("Funciona!");
}
