var porAcumulado = 0;

function checkDatos() {
    if (getRadioValue("parte") == "1"
    && getRadioValue("terreno") != "10"
    && getRadioValue("terreno") != "20"
    && getRadioValue("terreno") != "30"
    && getRadioValue("terreno") != "40") {
        return false;
    } else if (getRadioValue("parte") == "2"
    && getRadioValue("terreno") != "10"
    && getRadioValue("terreno") != "20"
    && getRadioValue("terreno") != "30"
    && getRadioValue("terreno") != "40") {
        return false;
    } else if (getRadioValue("parte") == "3"
    && getRadioValue("terreno") != "20"
    && getRadioValue("terreno") != "30"
    && getRadioValue("terreno") != "40"
    && getRadioValue("terreno") != "50") {
        return false;
    } else if (getRadioValue("parte") == "4"
    && getRadioValue("terreno") != "20"
    && getRadioValue("terreno") != "30"
    && getRadioValue("terreno") != "40"
    && getRadioValue("terreno") != "60") {
        return false;
    } else if (getRadioValue("parte") == "5"
    && getRadioValue("terreno") != "10"
    && getRadioValue("terreno") != "20"
    && getRadioValue("terreno") != "30"
    && getRadioValue("terreno") != "40"
    && getRadioValue("terreno") != "50") {
        return false;
    } else {
        return true;
    }
}

function hayEncuentro() {
    if (!checkDatos()) {
        document.getElementById("encuentro").innerHTML =
        "<br>" + new Date().toLocaleTimeString('es-ES', { hour: "numeric", minute: "numeric", second: "numeric"})
        + " --> LOS DATOS INTRODUCIDOS NO SON CORRECTOS";
    } else {
        let posEncuentro = tiraDados(1, 100);
        // var encuentro = tiraDados(1, 100);
        let siEncuentro = 0;

        switch (getRadioValue("accion")) {
            case "viasal":
            siEncuentro = 5;
            break;
            case "viarei":
            siEncuentro = 1;
            break;
            case "expsal":
            siEncuentro = 15;
            break;
            case "exprei":
            siEncuentro = 5;
            break;
            default:
            siEncuentro = 0;
        }

        if (posEncuentro <= siEncuentro + porAcumulado) {
            document.getElementById("encuentro").innerHTML =
            "<br>" + new Date().toLocaleTimeString('es-ES', { hour: "numeric", minute: "numeric", second: "numeric"})
            + " --> ¡Hay encuentro! " + infoEncuentro(tiraDados(1, 100), getRadioValue("parte"), getRadioValue("terreno"));

            console.log("SI // Porcentajes: " + posEncuentro + "<="  + siEncuentro + "+" + porAcumulado);

            porAcumulado = 0;
        } else {
            document.getElementById("encuentro").innerHTML =
            "<br>" + new Date().toLocaleTimeString('es-ES', { hour: "numeric", minute: "numeric", second: "numeric"})
            + " --> No hay encuentro.";

            console.log("NO // Porcentajes: " + posEncuentro + "<="  + siEncuentro + "+" + porAcumulado);

            porAcumulado += siEncuentro;
        }
    }
}

function infoEncuentro(encuentro, libro, terreno) {
    switch (libro) {
        case "1":
        switch (terreno) {
            case "10":
            if (encuentro <= 4) {
                return tiraDados(1, 6) + " bandido(s). [KM 1, 12]" + encuentroEspecial(10,5);
            } else if (encuentro <= 11) {
                return tiraDados(1, 4) + " jabalí(es). [Bestiario 1, 187]" + encuentroEspecial(20,0);
            } else if (encuentro <= 14) {
                return tiraDados(1, 4) + " boggard(s). [Bestiario 1, 41]" + encuentroEspecial(20,10);
            } else if (encuentro <= 20) {
                return "1 lobo marsupial. [KM 1,84]" + encuentroEspecial(5,0);
            } else if (encuentro <= 29) {
                return tiraDados(1, 6) + " alce(s). [KM 1, 76]" + encuentroEspecial(40,0);
            } else if (encuentro <= 35) {
                return "1 dragón feérico." + encuentroEspecial(5,2);
            } else if (encuentro <= 42) {
                return tiraDados(1, 4) + " grig(s). " + encuentroEspecial(5,2);
            } else if (encuentro <= 47) {
                return "1 oso pardo. [Bestiario 1, 230]" + encuentroEspecial(25,15);
            } else if (encuentro <= 54) {
                return "1 cazador. [KM 1, 12]" + encuentroEspecial(10,5);
            } else if (encuentro <= 57) {
                return tiraDados(1, 8) + " canijo(s). [Bestiario 1, 49]" + encuentroEspecial(10,5);
            } else if (encuentro <= 63) {
                return "1 oso lechuza. [Bestiario 1, 229]" + encuentroEspecial(0,0);
            } else if (encuentro <= 68) {
                return "1 broza movediza. [Bestiario 1, 42]" + encuentroEspecial(60,0);
            } else if (encuentro <= 71) {
                return "1 slurk." + encuentroEspecial(60,10);
            } else if (encuentro <= 75) {
                return "1 tatzlwyrm. [KM 1, 86]" + encuentroEspecial(30,5);
            } else if (encuentro <= 79) {
                return tiraDados(1, 4) + " troll(es). [Bestiario 1, 277]" + encuentroEspecial(50,0);
            } else if (encuentro <= 82) {
                return "1 hombre lobo. [Bestiario 1, 197]" + encuentroEspecial(10,5);
            } else if (encuentro <= 85) {
                return "1 ciempiés látigo gigante." + encuentroEspecial(70,5);
            } else if (encuentro <= 90) {
                return "1 fuego fatuo. [Bestiario 1, 151]" + encuentroEspecial(5,1);
            } else if (encuentro <= 97) {
                return tiraDados(1, 6) + " lobo(s). [Bestiario 1, 204]" + encuentroEspecial(10,5);
            } else {
                return "1 huargo. [Bestiario 1, 186]" + encuentroEspecial(5,1);
            }
            break;
            case "20":
            if (encuentro <= 5) {
                return tiraDados(1, 6) + " bandido(s). [KM 1, 12]";
            } else if (encuentro <= 11) {
                return tiraDados(1, 4) + " jabalí(es). [Bestiario 1, 187]";
            } else if (encuentro <= 17) {
                return tiraDados(1, 4) + " boggard(s). [Bestiario 1, 41]";
            } else if (encuentro <= 21) {
                return "1 lobo marsupial. [KM 1,84]";
            } else if (encuentro <= 28) {
                return tiraDados(1, 6) + " alce(s). [KM 1, 76]";
            } else if (encuentro <= 32) {
                return "1 dragón feérico.";
            } else if (encuentro <= 35) {
                return tiraDados(1, 4) + " grig(s).";
            } else if (encuentro <= 41) {
                return "1 oso pardo. [Bestiario 1, 230]";
            } else if (encuentro <= 49) {
                return "1 cazador. [KM 1, 12]";
            } else if (encuentro <= 57) {
                return "1 nixie.";
            } else if (encuentro <= 62) {
                return "1 oso lechuza. [Bestiario 1, 229]";
            } else if (encuentro <= 69) {
                return "1 broza movediza. [Bestiario 1, 42]";
            } else if (encuentro <= 75) {
                return "1 slurk.";
            } else if (encuentro <= 79) {
                return "1 tatzlwyrm. [KM 1, 86]";
            } else if (encuentro <= 83) {
                return tiraDados(1, 4) + " troll(es). [Bestiario 1, 277]";
            } else if (encuentro <= 90) {
                return "1 fuego fatuo. [Bestiario 1, 151]";
            } else if (encuentro <= 96) {
                return tiraDados(1, 6) + " lobo(s). [Bestiario 1, 204]";
            } else {
                return "1 huargo. [Bestiario 1, 186]";
            }
            break;
            case "30":
            if (encuentro <= 6) {
                return tiraDados(1, 6) + " bandido(s). [KM 1, 12]";
            } else if (encuentro <= 15) {
                return tiraDados(1, 4) + " jabalí(es). [Bestiario 1, 187]";
            } else if (encuentro <= 20) {
                return "1 lobo marsupial. [KM 1,84]";
            } else if (encuentro <= 28) {
                return tiraDados(1, 6) + " alce(s). [KM 1, 76]";
            } else if (encuentro <= 32) {
                return "1 dragón feérico.";
            } else if (encuentro <= 38) {
                return tiraDados(1, 4) + " grig(s).";
            } else if (encuentro <= 40) {
                return "1 oso pardo. [Bestiario 1, 230]";
            } else if (encuentro <= 51) {
                return "1 cazador. [KM 1, 12]";
            } else if (encuentro <= 55) {
                return tiraDados(1, 8) + " kóbold(s).";
            } else if (encuentro <= 57) {
                return tiraDados(1, 8) + " canijo(s). [Bestiario 1, 49]";
            } else if (encuentro <= 59) {
                return "1 oso lechuza. [Bestiario 1, 229]";
            } else if (encuentro <= 63) {
                return "1 broza movediza. [Bestiario 1, 42]";
            } else if (encuentro <= 66) {
                return "1 tatzlwyrm. [KM 1, 86]";
            } else if (encuentro <= 71) {
                return tiraDados(1, 4) + " troll(es). [Bestiario 1, 277]";
            } else if (encuentro <= 75) {
                return "1 hombre lobo. [Bestiario 1, 197]";
            } else if (encuentro <= 80) {
                return "1 ciempiés látigo gigante.";
            } else if (encuentro <= 86) {
                return "1 fuego fatuo. [Bestiario 1, 151]";
            } else if (encuentro <= 95) {
                return tiraDados(1, 6) + " lobo(s). [Bestiario 1, 204]";
            } else {
                return "1 huargo. [Bestiario 1, 186]";
            }
            break;
            case "40":
            if (encuentro <= 8) {
                return tiraDados(1, 6) + " bandido(s). [KM 1, 12]";
            } else if (encuentro <= 14) {
                return tiraDados(1, 4) + " jabalí(es). [Bestiario 1, 187]";
            } else if (encuentro <= 19) {
                return "1 lobo marsupial. [KM 1,84]";
            } else if (encuentro <= 27) {
                return tiraDados(1, 6) + " alce(s). [KM 1, 76]";
            } else if (encuentro <= 30) {
                return "1 dragón feérico.";
            } else if (encuentro <= 35) {
                return tiraDados(1, 4) + " grig(s).";
            } else if (encuentro <= 45) {
                return "1 cazador. [KM 1, 12]";
            } else if (encuentro <= 51) {
                return tiraDados(1, 8) + " kóbold(s).";
            } else if (encuentro <= 55) {
                return tiraDados(1, 8) + " canijo(s). [Bestiario 1, 49]";
            } else if (encuentro <= 59) {
                return "1 oso lechuza. [Bestiario 1, 229]";
            } else if (encuentro <= 62) {
                return "1 broza movediza. [Bestiario 1, 42]";
            } else if (encuentro <= 67) {
                return "1 tatzlwyrm. [KM 1, 86]";
            } else if (encuentro <= 70) {
                return tiraDados(1, 4) + " troll(es). [Bestiario 1, 277]";
            } else if (encuentro <= 74) {
                return "1 hombre lobo. [Bestiario 1, 197]";
            } else if (encuentro <= 81) {
                return "1 ciempiés látigo gigante.";
            } else if (encuentro <= 86) {
                return "1 fuego fatuo. [Bestiario 1, 151]";
            } else if (encuentro <= 95) {
                return tiraDados(1, 6) + " lobo(s). [Bestiario 1, 204]";
            } else {
                return "1 huargo. [Bestiario 1, 186]";
            }
            break;
            default:
            alert("Respuesta incorrecta");
        }
        break;
        case "2":
        switch (terreno) {
            case "10":
            if (encuentro <= 5) {
                return "1 barghest.";
            } else if (encuentro <= 13) {
                return tiraDados(1, 8) + " jabalí(es). [Bestiario 1, 187]";
            } else if (encuentro <= 17) {
                return tiraDados(2, 4) + " boggards. [Bestiario 1, 41]";
            } else if (encuentro <= 23) {
                return tiraDados(1, 6) + " lobo(s) marsupial(es) de la maleza. [KM 1,84]";
            } else if (encuentro <= 29) {
                return tiraDados(2, 6) + " alces. [KM 1, 76]";
            } else if (encuentro <= 35) {
                return "1 dragón feérico.";
            } else if (encuentro <= 42) {
                return tiraDados(2, 4) + " arañas gigantes.";
            } else if (encuentro <= 49) {
                return tiraDados(1, 4) + " oso(s) pardo(s). [Bestiario 1, 230]";
            } else if (encuentro <= 53) {
                return "1 hidra.";
            } else if (encuentro <= 57) {
                return "1 mantícora.";
            } else if (encuentro <= 63) {
                return "1 oso lechuza. [Bestiario 1, 229]";
            } else if (encuentro <= 68) {
                return "1 broza movediza. [Bestiario 1, 42]";
            } else if (encuentro <= 71) {
                return tiraDados(1, 6) + " lagarto(s) electrizante(s).";
            } else if (encuentro <= 75) {
                return tiraDados(1, 6) + " tatzlwyrm(s). [KM 1, 86]";
            } else if (encuentro <= 79) {
                return tiraDados(2, 4) + " trolles. [Bestiario 1, 277]";
            } else if (encuentro <= 82) {
                return "1 hombre lobo. [Bestiario 1, 197]";
            } else if (encuentro <= 85) {
                return "1 fuego fatuo. [Bestiario 1, 151]";
            } else if (encuentro <= 93) {
                return tiraDados(2, 6) + " lobos. [Bestiario 1, 204]";
            } else if (encuentro <= 97) {
                return tiraDados(2, 6) + " huargos. [Bestiario 1, 186]";
            } else {
                return "1 wyvern.";
            }
            break;
            case "20":
            if (encuentro <= 3) {
                return "1 barghest.";
            } else if (encuentro <= 10) {
                return tiraDados(1, 8) + " jabalí(es). [Bestiario 1, 187]";
            } else if (encuentro <= 17) {
                return tiraDados(2, 4) + " boggards. [Bestiario 1, 41]";
            } else if (encuentro <= 21) {
                return tiraDados(1, 6) + " lobo(s) marsupial(es) de la maleza. [KM 1,84]";
            } else if (encuentro <= 28) {
                return tiraDados(2, 6) + " alces. [KM 1, 76]";
            } else if (encuentro <= 32) {
                return "1 dragón feérico.";
            } else if (encuentro <= 35) {
                return tiraDados(2, 4) + " arañas gigantes.";
            } else if (encuentro <= 41) {
                return tiraDados(1, 4) + " oso(s) pardo(s). [Bestiario 1, 230]";
            } else if (encuentro <= 47) {
                return "1 hidra.";
            } else if (encuentro <= 54) {
                return "1 nixie.";
            } else if (encuentro <= 59) {
                return "1 oso lechuza. [Bestiario 1, 229]";
            } else if (encuentro <= 68) {
                return "1 broza movediza. [Bestiario 1, 42]";
            } else if (encuentro <= 75) {
                return tiraDados(1, 6) + " lagarto(s) electrizante(s).";
            } else if (encuentro <= 79) {
                return tiraDados(1, 6) + " tatzlwyrm(s). [KM 1, 86]";
            } else if (encuentro <= 83) {
                return tiraDados(2, 4) + " trolles. [Bestiario 1, 277]";
            } else if (encuentro <= 88) {
                return "1 fuego fatuo. [Bestiario 1, 151]";
            } else if (encuentro <= 94) {
                return tiraDados(2, 6) + " lobos. [Bestiario 1, 204]";
            } else if (encuentro <= 98) {
                return tiraDados(2, 6) + " huargos. [Bestiario 1, 186]";
            } else {
                return "1 wyvern.";
            }
            break;
            case "30":
            if (encuentro <= 4) {
                return "1 barghest.";
            } else if (encuentro <= 15) {
                return tiraDados(1, 8) + " jabalí(es). [Bestiario 1, 187]";
            } else if (encuentro <= 20) {
                return tiraDados(1, 6) + " lobo(s) marsupial(es) de la maleza. [KM 1,84]";
            } else if (encuentro <= 28) {
                return tiraDados(2, 6) + " alces. [KM 1, 76]";
            } else if (encuentro <= 32) {
                return "1 dragón feérico.";
            } else if (encuentro <= 38) {
                return tiraDados(2, 4) + " arañas gigantes.";
            } else if (encuentro <= 40) {
                return tiraDados(1, 4) + " oso(s) pardo(s). [Bestiario 1, 230]";
            } else if (encuentro <= 51) {
                return tiraDados(2, 6) + " kóbolds.";
            } else if (encuentro <= 54) {
                return "1 mantícora.";
            } else if (encuentro <= 59) {
                return "1 oso lechuza. [Bestiario 1, 229]";
            } else if (encuentro <= 63) {
                return "1 broza movediza. [Bestiario 1, 42]";
            } else if (encuentro <= 66) {
                return tiraDados(1, 6) + " tatzlwyrm(s). [KM 1, 86]";
            } else if (encuentro <= 71) {
                return tiraDados(2, 4) + " trolles. [Bestiario 1, 277]";
            } else if (encuentro <= 75) {
                return "1 hombre lobo. [Bestiario 1, 197]";
            } else if (encuentro <= 77) {
                return "1 fuego fatuo. [Bestiario 1, 151]";
            } else if (encuentro <= 86) {
                return tiraDados(2, 6) + " lobos. [Bestiario 1, 204]";
            } else if (encuentro <= 95) {
                return tiraDados(2, 6) + " huargos. [Bestiario 1, 186]";
            } else {
                return "1 wyvern.";
            }
            break;
            case "40":
            if (encuentro <= 7) {
                return "1 barghest.";
            } else if (encuentro <= 14) {
                return tiraDados(1, 8) + " jabalí(es). [Bestiario 1, 187]";
            } else if (encuentro <= 19) {
                return tiraDados(1, 6) + " lobo(s) marsupial(es) de la maleza. [KM 1,84]";
            } else if (encuentro <= 27) {
                return tiraDados(2, 6) + " alces. [KM 1, 76]";
            } else if (encuentro <= 30) {
                return "1 dragón feérico.";
            } else if (encuentro <= 35) {
                return tiraDados(2, 4) + " arañas gigantes.";
            } else if (encuentro <= 43) {
                return tiraDados(2, 6) + " kóbolds.";
            } else if (encuentro <= 45) {
                return "1 mantícora.";
            } else if (encuentro <= 53) {
                return "1 oso lechuza. [Bestiario 1, 229]";
            } else if (encuentro <= 58) {
                return "1 broza movediza. [Bestiario 1, 42]";
            } else if (encuentro <= 65) {
                return tiraDados(1, 6) + " tatzlwyrm(s). [KM 1, 86]";
            } else if (encuentro <= 70) {
                return tiraDados(2, 4) + " trolles. [Bestiario 1, 277]";
            } else if (encuentro <= 74) {
                return "1 hombre lobo. [Bestiario 1, 197]";
            } else if (encuentro <= 81) {
                return "1 fuego fatuo. [Bestiario 1, 151]";
            } else if (encuentro <= 88) {
                return tiraDados(2, 6) + " lobos. [Bestiario 1, 204]";
            } else if (encuentro <= 95) {
                return tiraDados(2, 6) + " huargos. [Bestiario 1, 186]";
            } else {
                return "1 wyvern.";
            }
            break;
            default:
            alert("Respuesta incorrecta");
        }
        break;
        case "3":
        switch (terreno) {
            case "20":
            if (encuentro <= 6) {
                return tiraDados(1, 4) + " tatzlwyrm(s). [KM 1, 86]";
            } else if (encuentro <= 14) {
                return "1 oso pardo. [Bestiario 1, 230]";
            } else if (encuentro <= 17) {
                return tiraDados(1, 4) + " cocatrices.";
            } else if (encuentro <= 26) {
                return "1 mantícora.";
            } else if (encuentro <= 35) {
                return tiraDados(1, 4) + " spriggan(s).";
            } else if (encuentro <= 41) {
                return "1 fuego fatuo. [Bestiario 1, 151]";
            } else if (encuentro <= 49) {
                return tiraDados(2, 4) + " huargos. [Bestiario 1, 186]";
            } else if (encuentro <= 64) {
                return tiraDados(1, 6) + " alce(s). [KM 1, 76]";
            } else if (encuentro <= 70) {
                return tiraDados(1, 4) + " blodeuwedd(s).";
            } else if (encuentro <= 83) {
                return "1 mastodonte";
            } else if (encuentro <= 91) {
                return "1 roc.";
            } else if (encuentro <= 98) {
                return "1 peluda.";
            } else {
                return "1 dragón de plata.";
            }
            break;
            case "30":
            if (encuentro <= 4) {
                return tiraDados(1, 4) + " cocatrices.";
            } else if (encuentro <= 10) {
                return tiraDados(1, 4) + " águilas gigantes.";
            } else if (encuentro <= 23) {
                return "1 mantícora.";
            } else if (encuentro <= 31) {
                return tiraDados(1, 4) + " spriggan(s).";
            } else if (encuentro <= 34) {
                return "1 wyvern.";
            } else if (encuentro <= 40) {
                return tiraDados(2, 4) + " huargos. [Bestiario 1, 186]";
            } else if (encuentro <= 51) {
                return tiraDados(1, 6) + " alce(s). [KM 1, 76]";
            } else if (encuentro <= 55) {
                return "1 quimera.";
            } else if (encuentro <= 59) {
                return "1 bulette.";
            } else if (encuentro <= 63) {
                return tiraDados(1, 6) + " cíclope(s).";
            } else if (encuentro <= 75) {
                return tiraDados(2, 6) + " centauros.";
            } else if (encuentro <= 80) {
                return tiraDados(1, 4) + " blodeuwedd(s).";
            } else if (encuentro <= 87) {
                return "1 mastodonte";
            } else if (encuentro <= 93) {
                return "1 roc.";
            } else {
                return "1 peluda.";
            }
            break;
            case "40":
            if (encuentro <= 8) {
                return "1 oso pardo. [Bestiario 1, 230]";
            } else if (encuentro <= 14) {
                return tiraDados(1, 4) + " águilas gigantes.";
            } else if (encuentro <= 17) {
                return "1 mantícora.";
            } else if (encuentro <= 26) {
                return tiraDados(1, 4) + " spriggan(s).";
            } else if (encuentro <= 32) {
                return "1 wyvern.";
            } else if (encuentro <= 36) {
                return "1 fuego fatuo. [Bestiario 1, 151]";
            } else if (encuentro <= 40) {
                return tiraDados(2, 4) + " huargos. [Bestiario 1, 186]";
            } else if (encuentro <= 43) {
                return tiraDados(1, 6) + " alce(s). [KM 1, 76]";
            } else if (encuentro <= 45) {
                return "1 quimera.";
            } else if (encuentro <= 51) {
                return "1 bulette.";
            } else if (encuentro <= 57) {
                return tiraDados(1, 6) + " gárgola(s).";
            } else if (encuentro <= 62) {
                return tiraDados(1, 6) + " cíclope(s).";
            } else if (encuentro <= 67) {
                return tiraDados(2, 6) + " centauros.";
            } else if (encuentro <= 75) {
                return "1 mastodonte";
            } else if (encuentro <= 82) {
                return "1 roc.";
            } else if (encuentro <= 86) {
                return tiraDados(1, 4) + " stygiras.";
            } else if (encuentro <= 93) {
                return "1 peluda.";
            } else if (encuentro <= 96) {
                return "1 gran cíclope.";
            } else {
                return "1 dragon de plata.";
            }
            break;
            case "50":
            if (encuentro <= 3) {
                return tiraDados(1, 4) + " tatzlwyrm(s). [KM 1, 86]";
            } else if (encuentro <= 11) {
                return "1 oso pardo. [Bestiario 1, 230]";
            } else if (encuentro <= 17) {
                return tiraDados(1, 4) + " cocatrices.";
            } else if (encuentro <= 26) {
                return tiraDados(1, 4) + " águilas gigantes.";
            } else if (encuentro <= 35) {
                return "1 mantícora.";
            } else if (encuentro <= 42) {
                return "1 wyvern.";
            } else if (encuentro <= 47) {
                return tiraDados(2, 4) + " huargos. [Bestiario 1, 186]";
            } else if (encuentro <= 53) {
                return "1 quimera.";
            } else if (encuentro <= 63) {
                return tiraDados(1, 6) + " gárgola(s).";
            } else if (encuentro <= 70) {
                return tiraDados(1, 6) + " cíclope(s).";
            } else if (encuentro <= 78) {
                return "1 roc.";
            } else if (encuentro <= 84) {
                return tiraDados(1, 4) + " stygiras.";
            } else if (encuentro <= 91) {
                return "1 peluda.";
            } else if (encuentro <= 96) {
                return "1 gran cíclope.";
            } else {
                return "1 dragon de plata.";
            }
            break;
            default:
            alert("Respuesta incorrecta");
        }
        break;
        // TODO: Seguir rellenando tablas de Encuentros
        case "4":
        break;
        case "5":
        break;
        case "6":
        break;
        default:
        alert("Respuesta incorrecta");
    }
}

function encuentroEspecial(rastros, guarida) {
    let evEspecial = tiraDados(1, 100);
    let evento = "";

    if (tiraDados(1, 100) <= rastros) {
        return " (Rastro, hace " + tiraDados(1,10) + " horas)";
    } else if (tiraDados(1, 100) <= guarida) {
        return " (Guarida)";
    }

    if (evEspecial<10) {
        evento = " herido (-" + tiraDados(1,4)*10 + "% de PG)";
    } else if (evEspecial<20) {
        evento = " luchando contra " + infoEncuentro(tiraDados(1, 100), getRadioValue("parte"), getRadioValue("terreno"));
    } else if (evEspecial<30) {

    }

    return evento;
}
