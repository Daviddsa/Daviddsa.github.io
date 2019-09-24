// tiraDados(1, 100);

function sacaCarta() {
    if (getRadioValue("tipo") == 1) {
        document.getElementById("carta").innerHTML =
        "<br>" + new Date().toLocaleTimeString('es-ES', { hour: "numeric", minute: "numeric", second: "numeric"})
         + " --> ¡Crítico! - " + miraCarta(getRadioValue("tipo"), getRadioValue("ataque"));
    } else {
        document.getElementById("carta").innerHTML =
        "<br>" + new Date().toLocaleTimeString('es-ES', { hour: "numeric", minute: "numeric", second: "numeric"})
         + " --> ¡Pifia! - " + miraCarta(getRadioValue("tipo"), getRadioValue("ataque"));
    }

}

function miraCarta(tipo, ataque) {
    var cartaP = tiraDados(1, 52);
    var cartaC = tiraDados(1, 34);

    if (tipo == 1) {
        // Critico
        if (ataque > 4) {
            return "¡Elige tipo de critico no de pifia!";
        }

        switch (cartaC) {
            case 1:
                return "<strong>Titulo</strong> Descripcion";

                switch (ataque) {
                    case 1:

                    break;
                    case 2:

                    break;
                    case 3:

                    break;
                    case 4:

                    break;
                    default:

                }
            break;
            case 2:

            break;
            case 3:

            break;
            case 4:

            break;
            case 5:

            break;
            case 6:

            break;
            case 7:

            break;
            case 8:

            break;
            case 9:

            break;
            case 10:

            break;
            case 11:

            break;
            case 12:

            break;
            case 13:

            break;
            case 14:

            break;
            case 15:

            break;
            case 16:

            break;
            case 17:

            break;
            case 18:

            break;
            case 19:

            break;
            case 20:

            break;
            case 21:

            break;
            case 22:

            break;
            case 23:

            break;
            case 24:

            break;
            case 25:

            break;
            case 26:

            break;
            case 27:

            break;
            case 28:

            break;
            case 29:

            break;
            case 30:

            break;
            case 31:

            break;
            case 32:

            break;
            case 33:

            break;
            case 34:

            break;
            default:
                return "¡No existe esa carta!";
        }
    } else {
        // Pifia
        if (ataque < 5) {
            return "¡Elige tipo de pifia no de critico!";
        }

        switch (cartaP) {
            case 1:

            break;
            case 2:

            break;
            case 3:

            break;
            case 4:

            break;
            case 5:

            break;
            case 6:

            break;
            case 7:

            break;
            case 8:

            break;
            case 9:

            break;
            case 10:

            break;
            case 11:

            break;
            case 12:

            break;
            case 13:

            break;
            case 14:

            break;
            case 15:

            break;
            case 16:

            break;
            case 17:

            break;
            case 18:

            break;
            case 19:

            break;
            case 20:

            break;
            case 21:

            break;
            case 22:

            break;
            case 23:

            break;
            case 24:

            break;
            case 25:

            break;
            case 26:

            break;
            case 27:

            break;
            case 28:

            break;
            case 29:

            break;
            case 30:

            break;
            case 31:

            break;
            case 32:

            break;
            case 33:

            break;
            case 34:

            break;
            case 35:

            break;
            case 36:

            break;
            case 37:

            break;
            case 38:

            break;
            case 39:

            break;
            case 40:

            break;
            case 41:

            break;
            case 42:

            break;
            case 43:

            break;
            case 44:

            break;
            case 45:

            break;
            case 46:

            break;
            case 47:

            break;
            case 48:

            break;
            case 49:

            break;
            case 50:

            break;
            case 51:

            break;
            case 52:

            break;
            default:
                return "¡No existe esa carta!";
        }
    }
}
