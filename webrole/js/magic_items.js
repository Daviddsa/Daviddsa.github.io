function generaObjetos() {
    document.getElementById("objetos").innerHTML =
    "<br>" + new Date().toLocaleTimeString('es-ES', { hour: "numeric", minute: "numeric", second: "numeric"});

    if (document.getElementById("obj_menor").value > 0) {
        document.getElementById("objetos").innerHTML =  document.getElementById("objetos").innerHTML + " <br>Menores: ";

        randomMagicItem(1, document.getElementById("obj_menor").value);
    }

    if (document.getElementById("obj_medio").value > 0) {
        document.getElementById("objetos").innerHTML =  document.getElementById("objetos").innerHTML + " <br>Intermedios: ";

        randomMagicItem(2, document.getElementById("obj_medio").value);
    }

    if (document.getElementById("obj_mayor").value > 0) {
        document.getElementById("objetos").innerHTML =  document.getElementById("objetos").innerHTML + " <br>Mayores: ";

        randomMagicItem(3, document.getElementById("obj_mayor").value);
    }
}

function randomMagicItem(rareza, repeticiones) {
    for (var i = 0; i < repeticiones; i++) {
        var tirada = tiraDados(1,100);

        switch (rareza) {
            case 1:
                if (tirada <= 4) {
                    randomArmaduraEscudo();

                    console.log("Armaduras y escudos");
                } else if (tirada <= 9) {
                    randomArma();

                    console.log("Armas");
                } else if (tirada <= 44) {
                    randomPocion();

                    console.log("Pociones");
                } else if (tirada <= 46) {
                    randomAnillo();

                    console.log("Anillos");
                } else if (tirada <= 81) {
                    randomPergamino();

                    console.log("Pergaminos");
                } else if (tirada <= 91) {
                    randomVarita();

                    console.log("Varitas");
                } else {
                    randomObjetoMaravilloso();

                    console.log("Objetos maravillosos");
                }

                break;
            case 2:
                if (tirada <= 10) {
                    randomArmaduraEscudo();

                    console.log("Armaduras y escudos");
                } else if (tirada <= 20) {
                    randomArma();

                    console.log("Armas");
                } else if (tirada <= 30) {
                    randomPocion();

                    console.log("Pociones");
                } else if (tirada <= 40) {
                    randomAnillo();

                    console.log("Anillos");
                } else if (tirada <= 50) {
                    RandomCetro();

                    console.log("Cetros");
                } else if (tirada <= 65) {
                    randomPergamino();

                    console.log("Pergaminos");
                } else if (tirada <= 68) {
                    randomBaston();

                    console.log("Bastones");
                } else if (tirada <= 83) {
                    randomVarita();

                    console.log("Varitas");
                } else {
                    randomObjetoMaravilloso();

                    console.log("Objetos maravillosos");
                }
                break;
            case 3:
                if (tirada <= 10) {
                    randomArmaduraEscudo();

                    console.log("Armaduras y escudos");
                } else if (tirada <= 20) {
                    randomArma();

                    console.log("Armas");
                } else if (tirada <= 25) {
                    randomPocion();

                    console.log("Pociones");
                } else if (tirada <= 35) {
                    randomAnillo();

                    console.log("Anillos");
                } else if (tirada <= 45) {
                    RandomCetro();

                    console.log("Cetros");
                } else if (tirada <= 55) {
                    randomPergamino();

                    console.log("Pergaminos");
                } else if (tirada <= 75) {
                    randomBaston();

                    console.log("Bastones");
                } else if (tirada <= 80) {
                    randomVarita();

                    console.log("Varitas");
                } else {
                    randomObjetoMaravilloso();

                    console.log("Objetos maravillosos");
                }
                break;
            default:
                alert("Rareza errónea.");
        }
    }
}

function randomArmaduraEscudo() {

}

function randomArma() {

}

function randomPocion() {

}

function randomAnillo() {

}

function RandomCetro() {

}

function randomPergamino() {

}

function randomBaston() {

}

function randomVarita() {

}

function randomObjetoMaravilloso() {

}
