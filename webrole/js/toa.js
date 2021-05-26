function calculaTiempo() {
    var temperatura = tiraDados(1, 20);
    var viento = tiraDados(1, 20);
    var precipitaciones = tiraDados(1, 20);

    var result = new Date().toLocaleTimeString('es-ES', { hour: "numeric", minute: "numeric", second: "numeric"})
    + " --> Temperatura: ";

    if (temperatura <= 14) {
        result = result + "35º C / ";
    }
    else if (temperatura <= 17) {
        result = result + Math.round(fahrenheitToCelsius(95 - tiraDados(1, 4) * 10)) + "º C / ";
    }
    else {
        result = result + ">35º C / ";
    }

    if (viento <= 12) {
        result = result + "Viento: Nada / ";
    }
    else if (viento <= 17) {
        result = result + "Viento: Suave / ";
    }
    else {
        result = result + "Viento: Fuerte / ";
    }

    if (precipitaciones <= 12) {
        result = result + "Precipitaciones: Nada";
    }
    else if (precipitaciones <= 17) {
        result = result + "Precipitaciones: Lluvia leve";
    }
    else {
        if (tiraDados(1,4) == 1) {
            result = result + "Precipitaciones: Lluvia fuerte (Tormenta tropical)";
        }
        else {
            result = result + "Precipitaciones: Lluvia fuerte";
        }
    }

    document.getElementById("tiempo").innerHTML = "<br>" + result;
}

function testIvan() {
    var chars = document.getElementsByName("character");

    for (var i = 0; i < chars.length; i++) {

        document.getElementById("output").innerHTML =
        document.getElementById("output").innerHTML +
        chars[i].value + " ha sacado un " + tiraDados(1,20) + "<br>";
    }

    document.getElementById("output").innerHTML =
    document.getElementById("output").innerHTML + "<br>";
}

function addInput() {
    var inpt = document.createElement("INPUT");
    inpt.type = "text";
    inpt.name = "character";
    inpt.classList.add('form-control');
    inpt.classList.add('col-md-3');

    document.getElementById("input").appendChild(inpt);
}

function deleteInput() {
    if (document.getElementsByName("character").length > 1) {
        document.getElementById("input").removeChild(document.getElementById("input").lastChild);
    }
}

function calculaEncuentro() {
    var mod_enc = document.getElementById("mod_enc").value;
    var hay_enc = tiraDados(1,20);
    var sum_enc = Number(hay_enc) + Number(mod_enc);
    var encuent = tiraDados(1,100);
    var terreno = getRadioValue("terreno");

    var r1 = "EE";
    var result = new Date().toLocaleTimeString('es-ES', { hour: "numeric", minute: "numeric", second: "numeric"})
    + " --> (" + hay_enc + "+" + mod_enc + "=" + sum_enc +") / ";

    if (sum_enc >= 16) {
        switch (terreno) {
            case "1":
            if (encuent <= 07 ) { r1 = 'E01' }
            else if (encuent <= 08 ) { r1 = 'E06' }
            else if (encuent <= 10 ) { r1 = 'E10' }
            else if (encuent <= 12 ) { r1 = 'E12' }
            else if (encuent <= 14 ) { r1 = 'E15' }
            else if (encuent <= 16 ) { r1 = 'E19' }
            else if (encuent <= 21 ) { r1 = 'E21' }
            else if (encuent <= 28 ) { r1 = 'E22' }
            else if (encuent <= 31 ) { r1 = 'E23' }
            else if (encuent <= 37 ) { r1 = 'E27' }
            else if (encuent <= 40 ) { r1 = 'E29' }
            else if (encuent <= 42 ) { r1 = 'E31' }
            else if (encuent <= 46 ) { r1 = 'E33' }
            else if (encuent <= 49 ) { r1 = 'E36' }
            else if (encuent <= 52 ) { r1 = 'E37' }
            else if (encuent <= 55 ) { r1 = 'E38' }
            else if (encuent <= 57 ) { r1 = 'E39' }
            else if (encuent <= 63 ) { r1 = 'E43' }
            else if (encuent <= 67 ) { r1 = 'E45' }
            else if (encuent <= 71 ) { r1 = 'E52' }
            else if (encuent <= 74 ) { r1 = 'E60' }
            else if (encuent <= 84 ) { r1 = 'E62' }
            else if (encuent <= 87 ) { r1 = 'E69' }
            else if (encuent <= 89 ) { r1 = 'E71' }
            else if (encuent <= 94 ) { r1 = 'E74' }
            else if (encuent <= 100 ) { r1 = 'E76' }

            break;
            case "2":
            if (encuent <= 01 ) { r1 = 'E02' }
            else if (encuent <= 02 ) { r1 = 'E04' }
            else if (encuent <= 04 ) { r1 = 'E05' }
            else if (encuent <= 05 ) { r1 = 'E06' }
            else if (encuent <= 07 ) { r1 = 'E07' }
            else if (encuent <= 08 ) { r1 = 'E08' }
            else if (encuent <= 09 ) { r1 = 'E09' }
            else if (encuent <= 11 ) { r1 = 'E10' }
            else if (encuent <= 13 ) { r1 = 'E11' }
            else if (encuent <= 15 ) { r1 = 'E12' }
            else if (encuent <= 16 ) { r1 = 'E14' }
            else if (encuent <= 17 ) { r1 = 'E15' }
            else if (encuent <= 18 ) { r1 = 'E16' }
            else if (encuent <= 19 ) { r1 = 'E17' }
            else if (encuent <= 21 ) { r1 = 'E18' }
            else if (encuent <= 23 ) { r1 = 'E20' }
            else if (encuent <= 24 ) { r1 = 'E22' }
            else if (encuent <= 26 ) { r1 = 'E24' }
            else if (encuent <= 28 ) { r1 = 'E25' }
            else if (encuent <= 30 ) { r1 = 'E26' }
            else if (encuent <= 35 ) { r1 = 'E27' }
            else if (encuent <= 36 ) { r1 = 'E28' }
            else if (encuent <= 37 ) { r1 = 'E30' }
            else if (encuent <= 42 ) { r1 = 'E31' }
            else if (encuent <= 44 ) { r1 = 'E32' }
            else if (encuent <= 45 ) { r1 = 'E33' }
            else if (encuent <= 46 ) { r1 = 'E35' }
            else if (encuent <= 50 ) { r1 = 'E36' }
            else if (encuent <= 51 ) { r1 = 'E37' }
            else if (encuent <= 53 ) { r1 = 'E38' }
            else if (encuent <= 55 ) { r1 = 'E39' }
            else if (encuent <= 56 ) { r1 = 'E40' }
            else if (encuent <= 57 ) { r1 = 'E42' }
            else if (encuent <= 58 ) { r1 = 'E43' }
            else if (encuent <= 59 ) { r1 = 'E44' }
            else if (encuent <= 60 ) { r1 = 'E46' }
            else if (encuent <= 62 ) { r1 = 'E47' }
            else if (encuent <= 64 ) { r1 = 'E48' }
            else if (encuent <= 66 ) { r1 = 'E49' }
            else if (encuent <= 67 ) { r1 = 'E50' }
            else if (encuent <= 68 ) { r1 = 'E51' }
            else if (encuent <= 70 ) { r1 = 'E52' }
            else if (encuent <= 72 ) { r1 = 'E53' }
            else if (encuent <= 73 ) { r1 = 'E55' }
            else if (encuent <= 74 ) { r1 = 'E57' }
            else if (encuent <= 75 ) { r1 = 'E58' }
            else if (encuent <= 76 ) { r1 = 'E59' }
            else if (encuent <= 77 ) { r1 = 'E60' }
            else if (encuent <= 79 ) { r1 = 'E64' }
            else if (encuent <= 80 ) { r1 = 'E65' }
            else if (encuent <= 81 ) { r1 = 'E66' }
            else if (encuent <= 82 ) { r1 = 'E67' }
            else if (encuent <= 85 ) { r1 = 'E68' }
            else if (encuent <= 86 ) { r1 = 'E69' }
            else if (encuent <= 87 ) { r1 = 'E70' }
            else if (encuent <= 88 ) { r1 = 'E71' }
            else if (encuent <= 89 ) { r1 = 'E72' }
            else if (encuent <= 90 ) { r1 = 'E74' }
            else if (encuent <= 91 ) { r1 = 'E75' }
            else if (encuent <= 92 ) { r1 = 'E76' }
            else if (encuent <= 93 ) { r1 = 'E83' }
            else if (encuent <= 94 ) { r1 = 'E84' }
            else if (encuent <= 95 ) { r1 = 'E85' }
            else if (encuent <= 96 ) { r1 = 'E86' }
            else if (encuent <= 97 ) { r1 = 'E87' }
            else if (encuent <= 98 ) { r1 = 'E88' }
            else if (encuent <= 99 ) { r1 = 'E89' }
            else if (encuent <= 100 ) { r1 = 'E90' }

            break;
            case "3":
            if (encuent <= 01 ) { r1 = 'E02' }
            else if (encuent <= 02 ) { r1 = 'E06' }
            else if (encuent <= 05 ) { r1 = 'E07' }
            else if (encuent <= 06 ) { r1 = 'E08' }
            else if (encuent <= 08 ) { r1 = 'E10' }
            else if (encuent <= 10 ) { r1 = 'E11' }
            else if (encuent <= 11 ) { r1 = 'E15' }
            else if (encuent <= 12 ) { r1 = 'E16' }
            else if (encuent <= 13 ) { r1 = 'E18' }
            else if (encuent <= 14 ) { r1 = 'E20' }
            else if (encuent <= 15 ) { r1 = 'E22' }
            else if (encuent <= 16 ) { r1 = 'E24' }
            else if (encuent <= 17 ) { r1 = 'E25' }
            else if (encuent <= 18 ) { r1 = 'E26' }
            else if (encuent <= 20 ) { r1 = 'E31' }
            else if (encuent <= 22 ) { r1 = 'E32' }
            else if (encuent <= 23 ) { r1 = 'E33' }
            else if (encuent <= 26 ) { r1 = 'E36' }
            else if (encuent <= 27 ) { r1 = 'E38' }
            else if (encuent <= 28 ) { r1 = 'E43' }
            else if (encuent <= 29 ) { r1 = 'E46' }
            else if (encuent <= 31 ) { r1 = 'E47' }
            else if (encuent <= 33 ) { r1 = 'E48' }
            else if (encuent <= 35 ) { r1 = 'E49' }
            else if (encuent <= 39 ) { r1 = 'E53' }
            else if (encuent <= 41 ) { r1 = 'E55' }
            else if (encuent <= 42 ) { r1 = 'E57' }
            else if (encuent <= 44 ) { r1 = 'E58' }
            else if (encuent <= 45 ) { r1 = 'E59' }
            else if (encuent <= 46 ) { r1 = 'E60' }
            else if (encuent <= 48 ) { r1 = 'E64' }
            else if (encuent <= 49 ) { r1 = 'E65' }
            else if (encuent <= 50 ) { r1 = 'E66' }
            else if (encuent <= 52 ) { r1 = 'E67' }
            else if (encuent <= 55 ) { r1 = 'E68' }
            else if (encuent <= 57 ) { r1 = 'E69' }
            else if (encuent <= 59 ) { r1 = 'E70' }
            else if (encuent <= 62 ) { r1 = 'E71' }
            else if (encuent <= 65 ) { r1 = 'E72' }
            else if (encuent <= 66 ) { r1 = 'E76' }
            else if (encuent <= 67 ) { r1 = 'E77' }
            else if (encuent <= 72 ) { r1 = 'E78' }
            else if (encuent <= 77 ) { r1 = 'E79' }
            else if (encuent <= 79 ) { r1 = 'E80' }
            else if (encuent <= 80 ) { r1 = 'E81' }
            else if (encuent <= 89 ) { r1 = 'E82' }
            else if (encuent <= 91 ) { r1 = 'E83' }
            else if (encuent <= 92 ) { r1 = 'E84' }
            else if (encuent <= 93 ) { r1 = 'E85' }
            else if (encuent <= 94 ) { r1 = 'E86' }
            else if (encuent <= 96 ) { r1 = 'E87' }
            else if (encuent <= 98 ) { r1 = 'E88' }
            else if (encuent <= 99 ) { r1 = 'E89' }
            else if (encuent <= 100 ) { r1 = 'E90' }

            break;
            case "4":
            if (encuent <= 01 ) { r1 = 'E06' }
            else if (encuent <= 02 ) { r1 = 'E07' }
            else if (encuent <= 05 ) { r1 = 'E10' }
            else if (encuent <= 06 ) { r1 = 'E15' }
            else if (encuent <= 07 ) { r1 = 'E16' }
            else if (encuent <= 08 ) { r1 = 'E20' }
            else if (encuent <= 09 ) { r1 = 'E22' }
            else if (encuent <= 10 ) { r1 = 'E24' }
            else if (encuent <= 12 ) { r1 = 'E26' }
            else if (encuent <= 14 ) { r1 = 'E27' }
            else if (encuent <= 16 ) { r1 = 'E31' }
            else if (encuent <= 20 ) { r1 = 'E32' }
            else if (encuent <= 21 ) { r1 = 'E33' }
            else if (encuent <= 23 ) { r1 = 'E36' }
            else if (encuent <= 24 ) { r1 = 'E46' }
            else if (encuent <= 25 ) { r1 = 'E55' }
            else if (encuent <= 26 ) { r1 = 'E58' }
            else if (encuent <= 27 ) { r1 = 'E59' }
            else if (encuent <= 28 ) { r1 = 'E60' }
            else if (encuent <= 31 ) { r1 = 'E64' }
            else if (encuent <= 32 ) { r1 = 'E65' }
            else if (encuent <= 33 ) { r1 = 'E66' }
            else if (encuent <= 36 ) { r1 = 'E67' }
            else if (encuent <= 40 ) { r1 = 'E68' }
            else if (encuent <= 44 ) { r1 = 'E69' }
            else if (encuent <= 45 ) { r1 = 'E70' }
            else if (encuent <= 46 ) { r1 = 'E71' }
            else if (encuent <= 49 ) { r1 = 'E72' }
            else if (encuent <= 50 ) { r1 = 'E76' }
            else if (encuent <= 51 ) { r1 = 'E77' }
            else if (encuent <= 63 ) { r1 = 'E78' }
            else if (encuent <= 67 ) { r1 = 'E79' }
            else if (encuent <= 70 ) { r1 = 'E80' }
            else if (encuent <= 73 ) { r1 = 'E81' }
            else if (encuent <= 85 ) { r1 = 'E82' }
            else if (encuent <= 87 ) { r1 = 'E83' }
            else if (encuent <= 89 ) { r1 = 'E84' }
            else if (encuent <= 91 ) { r1 = 'E85' }
            else if (encuent <= 92 ) { r1 = 'E86' }
            else if (encuent <= 96 ) { r1 = 'E87' }
            else if (encuent <= 98 ) { r1 = 'E88' }
            else if (encuent <= 100 ) { r1 = 'E90' }

            break;
            case "5":
            if (encuent <= 11 ) { r1 = 'E01' }
            else if (encuent <= 17 ) { r1 = 'E02' }
            else if (encuent <= 20 ) { r1 = 'E05' }
            else if (encuent <= 22 ) { r1 = 'E09' }
            else if (encuent <= 25 ) { r1 = 'E10' }
            else if (encuent <= 27 ) { r1 = 'E12' }
            else if (encuent <= 29 ) { r1 = 'E14' }
            else if (encuent <= 38 ) { r1 = 'E22' }
            else if (encuent <= 42 ) { r1 = 'E23' }
            else if (encuent <= 45 ) { r1 = 'E29' }
            else if (encuent <= 47 ) { r1 = 'E31' }
            else if (encuent <= 50 ) { r1 = 'E32' }
            else if (encuent <= 53 ) { r1 = 'E33' }
            else if (encuent <= 59 ) { r1 = 'E37' }
            else if (encuent <= 61 ) { r1 = 'E38' }
            else if (encuent <= 62 ) { r1 = 'E40' }
            else if (encuent <= 63 ) { r1 = 'E43' }
            else if (encuent <= 65 ) { r1 = 'E46' }
            else if (encuent <= 70 ) { r1 = 'E47' }
            else if (encuent <= 73 ) { r1 = 'E57' }
            else if (encuent <= 80 ) { r1 = 'E58' }
            else if (encuent <= 81 ) { r1 = 'E60' }
            else if (encuent <= 84 ) { r1 = 'E66' }
            else if (encuent <= 87 ) { r1 = 'E69' }
            else if (encuent <= 90 ) { r1 = 'E71' }
            else if (encuent <= 92 ) { r1 = 'E74' }
            else if (encuent <= 97 ) { r1 = 'E77' }
            else if (encuent <= 100 ) { r1 = 'E84' }

            break;
            case "6":
            if (encuent <= 03 ) { r1 = 'E01' }
            else if (encuent <= 07 ) { r1 = 'E03' }
            else if (encuent <= 09 ) { r1 = 'E06' }
            else if (encuent <= 10 ) { r1 = 'E07' }
            else if (encuent <= 12 ) { r1 = 'E10' }
            else if (encuent <= 15 ) { r1 = 'E11' }
            else if (encuent <= 18 ) { r1 = 'E12' }
            else if (encuent <= 23 ) { r1 = 'E13' }
            else if (encuent <= 24 ) { r1 = 'E17' }
            else if (encuent <= 26 ) { r1 = 'E19' }
            else if (encuent <= 28 ) { r1 = 'E20' }
            else if (encuent <= 31 ) { r1 = 'E21' }
            else if (encuent <= 34 ) { r1 = 'E22' }
            else if (encuent <= 36 ) { r1 = 'E23' }
            else if (encuent <= 37 ) { r1 = 'E28' }
            else if (encuent <= 40 ) { r1 = 'E30' }
            else if (encuent <= 43 ) { r1 = 'E31' }
            else if (encuent <= 45 ) { r1 = 'E32' }
            else if (encuent <= 49 ) { r1 = 'E33' }
            else if (encuent <= 51 ) { r1 = 'E36' }
            else if (encuent <= 53 ) { r1 = 'E37' }
            else if (encuent <= 55 ) { r1 = 'E38' }
            else if (encuent <= 58 ) { r1 = 'E41' }
            else if (encuent <= 60 ) { r1 = 'E42' }
            else if (encuent <= 62 ) { r1 = 'E45' }
            else if (encuent <= 63 ) { r1 = 'E46' }
            else if (encuent <= 66 ) { r1 = 'E49' }
            else if (encuent <= 67 ) { r1 = 'E50' }
            else if (encuent <= 68 ) { r1 = 'E52' }
            else if (encuent <= 70 ) { r1 = 'E53' }
            else if (encuent <= 72 ) { r1 = 'E58' }
            else if (encuent <= 73 ) { r1 = 'E59' }
            else if (encuent <= 74 ) { r1 = 'E60' }
            else if (encuent <= 76 ) { r1 = 'E62' }
            else if (encuent <= 79 ) { r1 = 'E64' }
            else if (encuent <= 80 ) { r1 = 'E65' }
            else if (encuent <= 81 ) { r1 = 'E68' }
            else if (encuent <= 83 ) { r1 = 'E69' }
            else if (encuent <= 85 ) { r1 = 'E72' }
            else if (encuent <= 91 ) { r1 = 'E73' }
            else if (encuent <= 93 ) { r1 = 'E74' }
            else if (encuent <= 94 ) { r1 = 'E78' }
            else if (encuent <= 95 ) { r1 = 'E79' }
            else if (encuent <= 96 ) { r1 = 'E82' }
            else if (encuent <= 98 ) { r1 = 'E88' }
            else if (encuent <= 100 ) { r1 = 'E89' }

            break;
            case "7":
            if (encuent <= 02 ) { r1 = 'E02' }
            else if (encuent <= 03 ) { r1 = 'E04' }
            else if (encuent <= 06 ) { r1 = 'E05' }
            else if (encuent <= 08 ) { r1 = 'E06' }
            else if (encuent <= 12 ) { r1 = 'E07' }
            else if (encuent <= 14 ) { r1 = 'E09' }
            else if (encuent <= 18 ) { r1 = 'E10' }
            else if (encuent <= 19 ) { r1 = 'E12' }
            else if (encuent <= 21 ) { r1 = 'E14' }
            else if (encuent <= 22 ) { r1 = 'E18' }
            else if (encuent <= 23 ) { r1 = 'E27' }
            else if (encuent <= 26 ) { r1 = 'E31' }
            else if (encuent <= 28 ) { r1 = 'E32' }
            else if (encuent <= 31 ) { r1 = 'E33' }
            else if (encuent <= 33 ) { r1 = 'E35' }
            else if (encuent <= 36 ) { r1 = 'E36' }
            else if (encuent <= 38 ) { r1 = 'E37' }
            else if (encuent <= 39 ) { r1 = 'E38' }
            else if (encuent <= 41 ) { r1 = 'E39' }
            else if (encuent <= 42 ) { r1 = 'E43' }
            else if (encuent <= 45 ) { r1 = 'E44' }
            else if (encuent <= 48 ) { r1 = 'E46' }
            else if (encuent <= 50 ) { r1 = 'E47' }
            else if (encuent <= 52 ) { r1 = 'E48' }
            else if (encuent <= 54 ) { r1 = 'E50' }
            else if (encuent <= 57 ) { r1 = 'E51' }
            else if (encuent <= 58 ) { r1 = 'E52' }
            else if (encuent <= 60 ) { r1 = 'E53' }
            else if (encuent <= 61 ) { r1 = 'E57' }
            else if (encuent <= 62 ) { r1 = 'E59' }
            else if (encuent <= 63 ) { r1 = 'E60' }
            else if (encuent <= 66 ) { r1 = 'E66' }
            else if (encuent <= 68 ) { r1 = 'E67' }
            else if (encuent <= 73 ) { r1 = 'E68' }
            else if (encuent <= 75 ) { r1 = 'E69' }
            else if (encuent <= 77 ) { r1 = 'E71' }
            else if (encuent <= 78 ) { r1 = 'E74' }
            else if (encuent <= 80 ) { r1 = 'E76' }
            else if (encuent <= 81 ) { r1 = 'E77' }
            else if (encuent <= 84 ) { r1 = 'E78' }
            else if (encuent <= 87 ) { r1 = 'E79' }
            else if (encuent <= 89 ) { r1 = 'E80' }
            else if (encuent <= 91 ) { r1 = 'E81' }
            else if (encuent <= 93 ) { r1 = 'E82' }
            else if (encuent <= 94 ) { r1 = 'E85' }
            else if (encuent <= 95 ) { r1 = 'E86' }
            else if (encuent <= 96 ) { r1 = 'E87' }
            else if (encuent <= 98 ) { r1 = 'E88' }
            else if (encuent <= 100 ) { r1 = 'E89' }

            break;
            case "8":
            if (encuent <= 10 ) { r1 = 'E03' }
            else if (encuent <= 11 ) { r1 = 'E06' }
            else if (encuent <= 14 ) { r1 = 'E07' }
            else if (encuent <= 16 ) { r1 = 'E12' }
            else if (encuent <= 21 ) { r1 = 'E13' }
            else if (encuent <= 22 ) { r1 = 'E15' }
            else if (encuent <= 23 ) { r1 = 'E16' }
            else if (encuent <= 25 ) { r1 = 'E17' }
            else if (encuent <= 30 ) { r1 = 'E19' }
            else if (encuent <= 33 ) { r1 = 'E20' }
            else if (encuent <= 35 ) { r1 = 'E22' }
            else if (encuent <= 39 ) { r1 = 'E30' }
            else if (encuent <= 41 ) { r1 = 'E32' }
            else if (encuent <= 45 ) { r1 = 'E33' }
            else if (encuent <= 47 ) { r1 = 'E35' }
            else if (encuent <= 50 ) { r1 = 'E38' }
            else if (encuent <= 53 ) { r1 = 'E41' }
            else if (encuent <= 56 ) { r1 = 'E42' }
            else if (encuent <= 58 ) { r1 = 'E43' }
            else if (encuent <= 60 ) { r1 = 'E45' }
            else if (encuent <= 62 ) { r1 = 'E46' }
            else if (encuent <= 64 ) { r1 = 'E49' }
            else if (encuent <= 66 ) { r1 = 'E52' }
            else if (encuent <= 69 ) { r1 = 'E53' }
            else if (encuent <= 70 ) { r1 = 'E56' }
            else if (encuent <= 71 ) { r1 = 'E57' }
            else if (encuent <= 72 ) { r1 = 'E59' }
            else if (encuent <= 76 ) { r1 = 'E63' }
            else if (encuent <= 80 ) { r1 = 'E64' }
            else if (encuent <= 82 ) { r1 = 'E65' }
            else if (encuent <= 85 ) { r1 = 'E68' }
            else if (encuent <= 87 ) { r1 = 'E69' }
            else if (encuent <= 89 ) { r1 = 'E71' }
            else if (encuent <= 94 ) { r1 = 'E72' }
            else if (encuent <= 95 ) { r1 = 'E78' }
            else if (encuent <= 97 ) { r1 = 'E79' }
            else if (encuent <= 98 ) { r1 = 'E82' }
            else if (encuent <= 99 ) { r1 = 'E87' }
            else if (encuent <= 100 ) { r1 = 'E88' }

            break;
            case "9":
            if (encuent <= 01 ) { r1 = 'E06' }
            else if (encuent <= 05 ) { r1 = 'E10' }
            else if (encuent <= 09 ) { r1 = 'E29' }
            else if (encuent <= 18 ) { r1 = 'E32' }
            else if (encuent <= 19 ) { r1 = 'E33' }
            else if (encuent <= 37 ) { r1 = 'E34' }
            else if (encuent <= 45 ) { r1 = 'E44' }
            else if (encuent <= 54 ) { r1 = 'E54' }
            else if (encuent <= 71 ) { r1 = 'E56' }
            else if (encuent <= 78 ) { r1 = 'E57' }
            else if (encuent <= 79 ) { r1 = 'E68' }
            else if (encuent <= 83 ) { r1 = 'E77' }
            else if (encuent <= 85 ) { r1 = 'E78' }
            else if (encuent <= 95 ) { r1 = 'E79' }
            else if (encuent <= 97 ) { r1 = 'E81' }
            else if (encuent <= 98 ) { r1 = 'E82' }
            else if (encuent <= 100 ) { r1 = 'E89' }

            break;
            default:
        }

        //Si r1 sigue sin tener valor se devuelve un error
        if (r1 == "EE") {
            alert("Algo has roto, este mensaje no debería salir");
            return "-1";
        }

        // TEST
        // r1 = "E51";

        switch (r1) {
            // Primero los casos especiales
            case "E01":
            result = result + (Number(tiraDados(1,4)) + 1) + "x " + "ENCUENTRO-01";
            break;
            case "E02":
            result = result + (Number(tiraDados(1,4)) + 3) + "x " + "ENCUENTRO-02";
            break;
            case "E03":
            result = result + Number(tiraDados(1,4)) + "x " + "ENCUENTRO-03";
            break;
            case "E04":
            result = result + Number(tiraDados(1,6)) + "x " + "ENCUENTRO-04";
            break;
            case "E05":
            result = result + Number(tiraDados(2,4)) + "x " + "ENCUENTRO-05";
            break;
            case "E07":
            result = result + Number(tiraDados(1,3)) + "x " + "ENCUENTRO-07";
            break;
            case "E08":
            result = result + (Number(tiraDados(1,6)) + 3) + "x " + "ENCUENTRO-08";
            break;
            case "E09":
            result = result + Number(tiraDados(3,6)) + "x " + "ENCUENTRO-09";
            break;
            case "E10":
            result = result + " " + "ENCUENTRO-10 / " + tiraAlijos();
            break;
            case "E11":
            result = result + Number(tiraDados(3,6)) + "x " + "ENCUENTRO-11";
            break;
            case "E13":
            result = result + (Number(tiraDados(1,4)) + 1) + "x " + "ENCUENTRO-13";
            break;
            case "E14":
            result = result + " " + "ENCUENTRO-14 / " + tiraTesoros() + " + " + tiraTesoros();
            break;
            case "E15":
            result = result + Number(tiraDados(1,3)) + "x " + "ENCUENTRO-15";
            break;
            case "E18":
            result = result + (Number(tiraDados(1,4)) + 2) + "x " + "ENCUENTRO-18";
            break;
            case "E19":
            result = result + Number(tiraDados(2,6)) + "x " + "ENCUENTRO-19";
            break;
            case "E20":
            result = result + " " + "ENCUENTRO-20 / " + tiraDados(3,6) + " - " + tiraDados(1,6);
            break;
            case "E22":
            result = result + Number(tiraDados(2,6)) + "x " + "ENCUENTRO-22";
            break;
            case "E23":
            result = result + (Number(tiraDados(1,4)) + 1) + "x " + "ENCUENTRO-23";
            break;
            case "E27":
            result = result + Number(tiraDados(3,6)) + "x " + "ENCUENTRO-27";
            break;
            case "E29":
            result = result + Number(tiraDados(2,6)) + "x " + "ENCUENTRO-29";
            break;
            case "E30":
            result = result + " " + "ENCUENTRO-30 / " + (Number(tiraDados(1,4)) + 1) + " - "
            + tiraTesoros() + " + " + + tiraTesoros() + " + " + + tiraTesoros();
            break;
            case "E31":
            result = result + " " + "ENCUENTRO-31 / " + (Number(tiraDados(1,4)) + 1) + " - "
            + (Number(tiraDados(2,6)) * 5);
            break;
            case "E32":
            result = result + " " + "ENCUENTRO-32 / " + tiraRestos() + " + " + tiraTesoros();
            break;
            case "E33":
            result = result + " " + "ENCUENTRO-33 / " + tiraDados(1,6) + " - " + tiraDados(1,6);
            break;
            case "E34":
            result = result + " " + "ENCUENTRO-34 / " + tiraDados(1,4) + " - " + tiraDados(2,4);
            break;
            case "E36":
            result = result + " " + "ENCUENTRO-36 / " + tiraDados(2,6) + " - " + tiraDados(1,4);
            break;
            case "E37":
            result = result + Number(tiraDados(3,6)) + "x " + "ENCUENTRO-37";
            break;
            case "E39":
            result = result + " " + "ENCUENTRO-39 / " + tiraDados(1,2);
            if (tiraDados(1,100) < 20) {
                result = result + " - SON ELLOS";
            }
            break;
            case "E40":
            result = result + (Number(tiraDados(1,4)) + 1) + "x " + "ENCUENTRO-40";
            break;
            case "E42":
            result = result + Number(tiraDados(2,6)) + "x " + "ENCUENTRO-42";
            break;
            case "E43":
            result = result + Number(tiraDados(1,6)) + "x " + "ENCUENTRO-43";
            break;
            case "E44":
            result = result + Number(tiraDados(1,3)) + "x " + "ENCUENTRO-44";
            break;
            case "E46":
            result = result + Number(tiraDados(1,6)) + "x " + "ENCUENTRO-46";
            break;
            case "E47":
            result = result + " " + "ENCUENTRO-47 / " + tiraTesoros();
            break;
            case "E48":
            result = result + (Number(tiraDados(2,6)) + 3) + "x " + "ENCUENTRO-48";
            break;
            case "E49":
            result = result + " " + "ENCUENTRO-49 / " + tiraDados(2,6) + " - " + tiraAlijos();
            break;
            case "E50":
            result = result + (Number(tiraDados(1,4)) + 1) + "x " + "ENCUENTRO-50";
            break;
            case "E51":
            result = result + " " + "ENCUENTRO-51 / " + tiraDados(1,2);
            if (tiraDados(1,100) < 26) {
                result = result + " - " + tiraDados(1,3) + "x Pequeñas";
            }
            break;
            case "E52":
            result = result + Number(tiraDados(2,4)) + "x " + "ENCUENTRO-52";
            break;
            case "E53":
            result = result + Number(tiraDados(1,6)) + "x " + "ENCUENTRO-53";
            break;
            case "E54":
            result = result + Number(tiraDados(2,6)) + "x " + "ENCUENTRO-54";
            break;
            case "E55":
            result = result + (Number(tiraDados(1,4)) + 1) + "x " + "ENCUENTRO-55";
            break;
            case "E56":
            result = result + Number(tiraDados(2,6)) + "x " + "ENCUENTRO-56";
            break;
            case "E58":
            result = result + (Number(tiraDados(1,4)) + 2) + "x " + "ENCUENTRO-58";
            break;
            case "E59":
            break;
            case "E60":
            result = result + " " + "ENCUENTRO-60 / " + tiraDados(1,6) + " - " + tiraDados(1,6);
            break;
            case "E61":
            result = result + Number(tiraDados(1,6)) + "x " + "ENCUENTRO-61";
            break;
            case "E67":
            result = result + Number(tiraDados(1,6)) + "x " + "ENCUENTRO-67";
            break;
            case "E68":
            break;
            case "E69":
            result = result + Number(tiraDados(2,6)) + "x " + "ENCUENTRO-69";
            break;
            case "E70":
            result = result + " " + "ENCUENTRO-70 / " + (Number(tiraDados(1,4)) + 1) + " - "
            + tiraTesoros();
            break;
            case "E71":
            result = result + Number(tiraDados(1,4)) + "x " + "ENCUENTRO-71";
            break;
            case "E72":
            result = result + Number(tiraDados(1,4)) + "x " + "ENCUENTRO-72";
            break;
            case "E73":
            result = result + Number(tiraDados(1,4)) + "x " + "ENCUENTRO-73";
            break;
            case "E76":
            result = result + Number(tiraDados(1,4)) + "x " + "ENCUENTRO-76";
            break;
            case "E78":
            result = result + Number(tiraDados(2,6)) + "x " + "ENCUENTRO-78";
            break;
            case "E79":
            result = result + Number(tiraDados(3,6)) + "x " + "ENCUENTRO-79";
            break;
            case "E82":
            break;
            case "E83":
            result = result + Number(tiraDados(1,4)) + "x " + "ENCUENTRO-83";
            break;
            case "E87":
            result = result + Number(tiraDados(3,6)) + "x " + "ENCUENTRO-87";
            break;
            case "E88":
            result = result + " " + "ENCUENTRO-88 / " + (Number(tiraDados(1,6)) + 1) + " - "
            + tiraDados(1,4);
            break;
            case "E89":
            result = result + " " + "ENCUENTRO-89 / " + tiraDados(2,6) + " - " + tiraDados(1,6)
            + " - " + tiraTesoros();
            break;
            case "E90":
            result = result + Number(tiraDados(2,6)) + "x " + "ENCUENTRO-90";
            break;

            // Luego los que no necesitan tiradas extra
            case "E06":
            result = result + "ENCUENTRO-06"
            break;
            case "E12":
            result = result + "ENCUENTRO-12"
            break;
            case "E16":
            result = result + "ENCUENTRO-16"
            break;
            case "E17":
            result = result + "ENCUENTRO-17"
            break;
            case "E21":
            result = result + "ENCUENTRO-21"
            break;
            case "E24":
            result = result + "ENCUENTRO-24"
            break;
            case "E25":
            result = result + "ENCUENTRO-25"
            break;
            case "E26":
            result = result + "ENCUENTRO-26"
            break;
            case "E28":
            result = result + "ENCUENTRO-28"
            break;
            case "E35":
            result = result + "ENCUENTRO-35"
            break;
            case "E38":
            result = result + "ENCUENTRO-38"
            break;
            case "E41":
            result = result + "ENCUENTRO-41"
            break;
            case "E45":
            result = result + "ENCUENTRO-45"
            break;
            case "E57":
            result = result + "ENCUENTRO-57"
            break;
            case "E62":
            result = result + "ENCUENTRO-62"
            break;
            case "E63":
            result = result + "ENCUENTRO-63"
            break;
            case "E64":
            result = result + "ENCUENTRO-64"
            break;
            case "E65":
            result = result + "ENCUENTRO-65"
            break;
            case "E66":
            result = result + "ENCUENTRO-66"
            break;
            case "E74":
            result = result + "ENCUENTRO-74"
            break;
            case "E75":
            result = result + "ENCUENTRO-75"
            break;
            case "E77":
            result = result + "ENCUENTRO-77"
            break;
            case "E80":
            result = result + "ENCUENTRO-80"
            break;
            case "E81":
            result = result + "ENCUENTRO-81"
            break;
            case "E84":
            result = result + "ENCUENTRO-84"
            break;
            case "E85":
            result = result + "ENCUENTRO-85"
            break;
            case "E86":
            result = result + "ENCUENTRO-86"
            break;

            default:
        }

        document.getElementById("encuentro").innerHTML = result;
    } else {
        document.getElementById("encuentro").innerHTML =
        new Date().toLocaleTimeString('es-ES', { hour: "numeric", minute: "numeric", second: "numeric"})
        + " --> (" + hay_enc + "+" + mod_enc + "=" + sum_enc +") / No hay encuentro";
    }
}

function tiraAlijos () {
    var roll = tiraDados(1,20);

    switch (roll) {
        case 1:
        return "ALIJO-01";
        break;
        case 2:
        return "ALIJO-02";
        break;
        case 3:
        return "ALIJO-03";
        break;
        case 4:
        return "ALIJO-04";
        break;
        case 5:
        return "ALIJO-05";
        break;
        case 6:
        return "ALIJO-06";
        break;
        case 7:
        return "ALIJO-07";
        break;
        case 8:
        return "ALIJO-08";
        break;
        case 9:
        return "ALIJO-09";
        break;
        case 10:
        return "ALIJO-10";
        break;
        case 11:
        return "ALIJO-11";
        break;
        case 12:
        return "ALIJO-12";
        break;
        case 13:
        return "ALIJO-13";
        break;
        case 14:
        return "ALIJO-14";
        break;
        case 15:
        return "ALIJO-15";
        break;
        case 16:
        return "ALIJO-16";
        break;
        case 17:
        return "ALIJO-17";
        break;
        case 18:
        return "ALIJO-18";
        break;
        case 19:
        return "ALIJO-19";
        break;
        case 20:
        return "ALIJO-20";
        break;
        default:
        // alert("ENTRA AL default");
    }
}

function tiraRestos () {
    var roll = tiraDados(1,20);

    switch (roll) {
        case 1:
        return "RESTO-01";
        break;
        case 2:
        return "RESTO-02";
        break;
        case 3:
        return "RESTO-03";
        break;
        case 4:
        return "RESTO-04";
        break;
        case 5:
        return "RESTO-05";
        break;
        case 6:
        return "RESTO-06";
        break;
        case 7:
        return "RESTO-07";
        break;
        case 8:
        return "RESTO-08";
        break;
        case 9:
        return "RESTO-09";
        break;
        case 10:
        return "RESTO-10";
        break;
        case 11:
        return "RESTO-11";
        break;
        case 12:
        return "RESTO-12";
        break;
        case 13:
        return "RESTO-13";
        break;
        case 14:
        return "RESTO-14";
        break;
        case 15:
        return "RESTO-15";
        break;
        case 16:
        return "RESTO-16";
        break;
        case 17:
        return "RESTO-17";
        break;
        case 18:
        return "RESTO-18";
        break;
        case 19:
        return "RESTO-19";
        break;
        case 20:
        return "RESTO-20";
        break;
        default:
    }
}

function tiraTesoros () {
    var roll = tiraDados(1,100);

    if (roll <= 50) {
        return "TESORO-NADA"
    } else if (roll <= 52) {
        return "TESORO-01";
    } else if (roll <= 54) {
        return "TESORO-02";
    } else if (roll <= 56) {
        return "TESORO-03";
    } else if (roll <= 58) {
        return "TESORO-04";
    } else if (roll <= 60) {
        return "TESORO-05";
    } else if (roll <= 62) {
        return "TESORO-06";
    } else if (roll <= 64) {
        return "TESORO-07";
    } else if (roll <= 66) {
        return "TESORO-08";
    } else if (roll <= 68) {
        return "TESORO-09";
    } else if (roll <= 70) {
        return "TESORO-10";
    } else if (roll <= 72) {
        return "TESORO-11";
    } else if (roll <= 74) {
        return "TESORO-12";
    } else if (roll <= 76) {
        return "TESORO-13";
    } else if (roll <= 78) {
        return "TESORO-14";
    } else if (roll <= 80) {
        return "TESORO-15";
    } else if (roll <= 82) {
        return "TESORO-16";
    } else if (roll <= 84) {
        return "TESORO-17";
    } else if (roll <= 86) {
        return "TESORO-18";
    } else if (roll <= 88) {
        return "TESORO-19";
    } else if (roll <= 90) {
        return "TESORO-20";
    } else if (roll <= 92) {
        return "TESORO-21";
    } else if (roll <= 94) {
        return "TESORO-22";
    } else if (roll <= 96) {
        return "TESORO-23";
    } else if (roll <= 98) {
        return "TESORO-24";
    } else if (roll <= 100) {
        return "TESORO-25";
    }
}
