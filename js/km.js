porAcumulado = 0;

function checkDatos() {
    if (getRadioValue("parte") == "1" && getRadioValue("terreno") != "bos" && getRadioValue("terreno") != "lag" && getRadioValue("terreno") != "lla" && getRadioValue("terreno") != "col") {
        return false;
    } else if (getRadioValue("parte") == "2" && getRadioValue("terreno") != "bos" && getRadioValue("terreno") != "lag" && getRadioValue("terreno") != "lla" && getRadioValue("terreno") != "col") {
        return false;
    } else if (getRadioValue("parte") == "3" && getRadioValue("terreno") != "mon" && getRadioValue("terreno") != "lag" && getRadioValue("terreno") != "lla" && getRadioValue("terreno") != "col") {
        return false;
    } else if (getRadioValue("parte") == "4" && getRadioValue("terreno") != "pan" && getRadioValue("terreno") != "lag" && getRadioValue("terreno") != "lla" && getRadioValue("terreno") != "col") {
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
        // var posEncuentro = tiraDados(1, 100);
        var posEncuentro = 1;
        var encuentro = tiraDados(1, 100);

        if (getRadioValue("accion") == "explorar") {
            if (posEncuentro + porAcumulado <= 15) {
                document.getElementById("encuentro").innerHTML =
                "<br>" + new Date().toLocaleTimeString('es-ES', { hour: "numeric", minute: "numeric", second: "numeric"})
                + " --> ¡Hay encuentro! El encuentro es: " + infoEncuentro(encuentro, getRadioValue("parte"), getRadioValue("terreno"));

                porAcumulado = 0;
            } else {
                document.getElementById("encuentro").innerHTML =
                "<br>" + new Date().toLocaleTimeString('es-ES', { hour: "numeric", minute: "numeric", second: "numeric"})
                + " --> No hay encuentro.";

                porAcumulado = porAcumulado - 15;
            }
        } else {
            if (posEncuentro + porAcumulado <= 5) {
                document.getElementById("encuentro").innerHTML =
                "<br>" + new Date().toLocaleTimeString('es-ES', { hour: "numeric", minute: "numeric", second: "numeric"})
                + " --> ¡Hay encuentro! El encuentro es: " + infoEncuentro(encuentro, getRadioValue("parte"), getRadioValue("terreno"));

                porAcumulado = 0;
            } else {
                document.getElementById("encuentro").innerHTML =
                "<br>" + new Date().toLocaleTimeString('es-ES', { hour: "numeric", minute: "numeric", second: "numeric"})
                + " --> No hay encuentro.";

                porAcumulado = porAcumulado - 5;
            }
        }
    }

}

function infoEncuentro(encuentro, libro, terreno) {
    switch (libro) {
        case "1":
        switch (terreno) {
            case "bos":
            if (encuentro <= 4) {
                return tiraDados(1, 6) + " bandido(s).";
            } else if (encuentro <= 11) {
                return tiraDados(1, 4) + " jabalí(es).";
            } else if (encuentro <= 14) {
                return tiraDados(1, 4) + " boggard(s).";
            } else if (encuentro <= 20) {
                return "1 lobo marsupial.";
            } else if (encuentro <= 29) {
                return tiraDados(1, 6) + " alce(s).";
            } else if (encuentro <= 35) {
                return "1 dragón feérico.";
            } else if (encuentro <= 42) {
                return tiraDados(1, 4) + " grig(s).";
            } else if (encuentro <= 47) {
                return "1 oso pardo.";
            } else if (encuentro <= 54) {
                return "1 cazador.";
            } else if (encuentro <= 57) {
                return tiraDados(1, 8) + " canijo(s).";
            } else if (encuentro <= 63) {
                return "1 oso lechuza.";
            } else if (encuentro <= 68) {
                return "1 broza movediza.";
            } else if (encuentro <= 71) {
                return "1 slurk.";
            } else if (encuentro <= 75) {
                return "1 tatzlwyrm.";
            } else if (encuentro <= 79) {
                return tiraDados(1, 4) + " troll(es).";
            } else if (encuentro <= 82) {
                return "1 hombre lobo.";
            } else if (encuentro <= 85) {
                return "1 ciempiés látigo gigante.";
            } else if (encuentro <= 90) {
                return "1 fuego fatuo.";
            } else if (encuentro <= 97) {
                return tiraDados(1, 6) + " lobo(s).";
            } else {
                return "1 huargo.";
            }
            break;
            case "lag":
            if (encuentro <= 5) {
                return tiraDados(1, 6) + " bandido(s).";
            } else if (encuentro <= 11) {
                return tiraDados(1, 4) + " jabalí(es).";
            } else if (encuentro <= 17) {
                return tiraDados(1, 4) + " boggard(s).";
            } else if (encuentro <= 21) {
                return "1 lobo marsupial.";
            } else if (encuentro <= 28) {
                return tiraDados(1, 6) + " alce(s).";
            } else if (encuentro <= 32) {
                return "1 dragón feérico.";
            } else if (encuentro <= 35) {
                return tiraDados(1, 4) + " grig(s).";
            } else if (encuentro <= 41) {
                return "1 oso pardo.";
            } else if (encuentro <= 49) {
                return "1 cazador.";
            } else if (encuentro <= 57) {
                return "1 nixie.";
            } else if (encuentro <= 62) {
                return "1 oso lechuza.";
            } else if (encuentro <= 69) {
                return "1 broza movediza.";
            } else if (encuentro <= 75) {
                return "1 slurk.";
            } else if (encuentro <= 79) {
                return "1 tatzlwyrm.";
            } else if (encuentro <= 83) {
                return tiraDados(1, 4) + " troll(es).";
            } else if (encuentro <= 90) {
                return "1 fuego fatuo.";
            } else if (encuentro <= 96) {
                return tiraDados(1, 6) + " lobo(s).";
            } else {
                return "1 huargo.";
            }
            break;
            case "lla":
            if (encuentro <= 6) {
                return tiraDados(1, 6) + " bandido(s).";
            } else if (encuentro <= 15) {
                return tiraDados(1, 4) + " jabalí(es).";
            } else if (encuentro <= 20) {
                return "1 lobo marsupial.";
            } else if (encuentro <= 28) {
                return tiraDados(1, 6) + " alce(s).";
            } else if (encuentro <= 32) {
                return "1 dragón feérico.";
            } else if (encuentro <= 38) {
                return tiraDados(1, 4) + " grig(s).";
            } else if (encuentro <= 40) {
                return "1 oso pardo.";
            } else if (encuentro <= 51) {
                return "1 cazador.";
            } else if (encuentro <= 55) {
                return tiraDados(1, 8) + " kóbold(s).";
            } else if (encuentro <= 57) {
                return tiraDados(1, 8) + " canijo(s).";
            } else if (encuentro <= 59) {
                return "1 oso lechuza.";
            } else if (encuentro <= 63) {
                return "1 broza movediza.";
            } else if (encuentro <= 66) {
                return "1 tatzlwyrm.";
            } else if (encuentro <= 71) {
                return tiraDados(1, 4) + " troll(es).";
            } else if (encuentro <= 75) {
                return "1 hombre lobo.";
            } else if (encuentro <= 80) {
                return "1 ciempiés látigo gigante.";
            } else if (encuentro <= 86) {
                return "1 fuego fatuo.";
            } else if (encuentro <= 95) {
                return tiraDados(1, 6) + " lobo(s).";
            } else {
                return "1 huargo.";
            }
            break;
            case "col":
            if (encuentro <= 8) {
                return tiraDados(1, 6) + " bandido(s).";
            } else if (encuentro <= 14) {
                return tiraDados(1, 4) + " jabalí(es).";
            } else if (encuentro <= 19) {
                return "1 lobo marsupial.";
            } else if (encuentro <= 27) {
                return tiraDados(1, 6) + " alce(s).";
            } else if (encuentro <= 30) {
                return "1 dragón feérico.";
            } else if (encuentro <= 35) {
                return tiraDados(1, 4) + " grig(s).";
            } else if (encuentro <= 45) {
                return "1 cazador.";
            } else if (encuentro <= 51) {
                return tiraDados(1, 8) + " kóbold(s).";
            } else if (encuentro <= 55) {
                return tiraDados(1, 8) + " canijo(s).";
            } else if (encuentro <= 59) {
                return "1 oso lechuza.";
            } else if (encuentro <= 62) {
                return "1 broza movediza.";
            } else if (encuentro <= 67) {
                return "1 tatzlwyrm.";
            } else if (encuentro <= 70) {
                return tiraDados(1, 4) + " troll(es).";
            } else if (encuentro <= 74) {
                return "1 hombre lobo.";
            } else if (encuentro <= 81) {
                return "1 ciempiés látigo gigante.";
            } else if (encuentro <= 86) {
                return "1 fuego fatuo.";
            } else if (encuentro <= 95) {
                return tiraDados(1, 6) + " lobo(s).";
            } else {
                return "1 huargo.";
            }
            break;
            default:
            alert("Respuesta incorrecta");
        }

        break;
        case "2":
        switch (terreno) {
            case "bos":
            if (encuentro <= 5) {
                return "1 barghest.";
            } else if (encuentro <= 13) {
                return tiraDados(1, 8) + " jabalí(es).";
            } else if (encuentro <= 17) {
                return tiraDados(2, 4) + " boggards.";
            } else if (encuentro <= 23) {
                return tiraDados(1, 6) + " lobo(s) marsupial(es) de la maleza.";
            } else if (encuentro <= 29) {
                return tiraDados(2, 6) + " alces.";
            } else if (encuentro <= 35) {
                return "1 dragón feérico.";
            } else if (encuentro <= 42) {
                return tiraDados(2, 4) + " arañas gigantes.";
            } else if (encuentro <= 49) {
                return tiraDados(1, 4) + " oso(s) pardo(s).";
            } else if (encuentro <= 53) {
                return "1 hidra.";
            } else if (encuentro <= 57) {
                return "1 mantícora.";
            } else if (encuentro <= 63) {
                return "1 oso lechuza.";
            } else if (encuentro <= 68) {
                return "1 broza movediza.";
            } else if (encuentro <= 71) {
                return tiraDados(1, 6) + " lagarto(s) electrizante(s).";
            } else if (encuentro <= 75) {
                return tiraDados(1, 6) + " tatzlwyrm(s).";
            } else if (encuentro <= 79) {
                return tiraDados(2, 4) + " trolles.";
            } else if (encuentro <= 82) {
                return "1 hombre lobo.";
            } else if (encuentro <= 85) {
                return "1 fuego fatuo.";
            } else if (encuentro <= 93) {
                return tiraDados(2, 6) + " lobos.";
            } else if (encuentro <= 97) {
                return tiraDados(2, 6) + " huargos.";
            } else {
                return "1 wyvern.";
            }
            break;
            case "lag":
            if (encuentro <= 3) {
                return "1 barghest.";
            } else if (encuentro <= 10) {
                return tiraDados(1, 8) + " jabalí(es).";
            } else if (encuentro <= 17) {
                return tiraDados(2, 4) + " boggards.";
            } else if (encuentro <= 21) {
                return tiraDados(1, 6) + " lobo(s) marsupial(es) de la maleza.";
            } else if (encuentro <= 28) {
                return tiraDados(2, 6) + " alces.";
            } else if (encuentro <= 32) {
                return "1 dragón feérico.";
            } else if (encuentro <= 35) {
                return tiraDados(2, 4) + " arañas gigantes.";
            } else if (encuentro <= 41) {
                return tiraDados(1, 4) + " oso(s) pardo(s).";
            } else if (encuentro <= 47) {
                return "1 hidra.";
            } else if (encuentro <= 54) {
                return "1 nixie.";
            } else if (encuentro <= 59) {
                return "1 oso lechuza.";
            } else if (encuentro <= 68) {
                return "1 broza movediza.";
            } else if (encuentro <= 75) {
                return tiraDados(1, 6) + " lagarto(s) electrizante(s).";
            } else if (encuentro <= 79) {
                return tiraDados(1, 6) + " tatzlwyrm(s).";
            } else if (encuentro <= 83) {
                return tiraDados(2, 4) + " trolles.";
            } else if (encuentro <= 88) {
                return "1 fuego fatuo.";
            } else if (encuentro <= 94) {
                return tiraDados(2, 6) + " lobos.";
            } else if (encuentro <= 98) {
                return tiraDados(2, 6) + " huargos.";
            } else {
                return "1 wyvern.";
            }
            break;
            case "lla":
            if (encuentro <= 4) {
                return "1 barghest.";
            } else if (encuentro <= 15) {
                return tiraDados(1, 8) + " jabalí(es).";
            } else if (encuentro <= 20) {
                return tiraDados(1, 6) + " lobo(s) marsupial(es) de la maleza.";
            } else if (encuentro <= 28) {
                return tiraDados(2, 6) + " alces.";
            } else if (encuentro <= 32) {
                return "1 dragón feérico.";
            } else if (encuentro <= 38) {
                return tiraDados(2, 4) + " arañas gigantes.";
            } else if (encuentro <= 40) {
                return tiraDados(1, 4) + " oso(s) pardo(s).";
            } else if (encuentro <= 51) {
                return tiraDados(2, 6) + " kóbolds.";
            } else if (encuentro <= 54) {
                return "1 mantícora.";
            } else if (encuentro <= 59) {
                return "1 oso lechuza.";
            } else if (encuentro <= 63) {
                return "1 broza movediza.";
            } else if (encuentro <= 66) {
                return tiraDados(1, 6) + " tatzlwyrm(s).";
            } else if (encuentro <= 71) {
                return tiraDados(2, 4) + " trolles.";
            } else if (encuentro <= 75) {
                return "1 hombre lobo.";
            } else if (encuentro <= 77) {
                return "1 fuego fatuo.";
            } else if (encuentro <= 86) {
                return tiraDados(2, 6) + " lobos.";
            } else if (encuentro <= 95) {
                return tiraDados(2, 6) + " huargos.";
            } else {
                return "1 wyvern.";
            }
            break;
            case "col":
            if (encuentro <= 7) {
                return "1 barghest.";
            } else if (encuentro <= 14) {
                return tiraDados(1, 8) + " jabalí(es).";
            } else if (encuentro <= 19) {
                return tiraDados(1, 6) + " lobo(s) marsupial(es) de la maleza.";
            } else if (encuentro <= 27) {
                return tiraDados(2, 6) + " alces.";
            } else if (encuentro <= 30) {
                return "1 dragón feérico.";
            } else if (encuentro <= 35) {
                return tiraDados(2, 4) + " arañas gigantes.";
            } else if (encuentro <= 43) {
                return tiraDados(2, 6) + " kóbolds.";
            } else if (encuentro <= 45) {
                return "1 mantícora.";
            } else if (encuentro <= 53) {
                return "1 oso lechuza.";
            } else if (encuentro <= 58) {
                return "1 broza movediza.";
            } else if (encuentro <= 65) {
                return tiraDados(1, 6) + " tatzlwyrm(s).";
            } else if (encuentro <= 70) {
                return tiraDados(2, 4) + " trolles.";
            } else if (encuentro <= 74) {
                    return "1 hombre lobo.";
            } else if (encuentro <= 81) {
                return "1 fuego fatuo.";
            } else if (encuentro <= 88) {
                return tiraDados(2, 6) + " lobos.";
            } else if (encuentro <= 95) {
                return tiraDados(2, 6) + " huargos.";
            } else {
                return "1 wyvern.";
            }
            break;
        }
        break;
        // TODO: Seguir aqui añadiendo el libro 3 en adelante
        case "3":
        break;
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
