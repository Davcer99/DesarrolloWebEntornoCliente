'use strict'

function mostrarHora() {
    const hora = new Date();
    var horaResult = hora.toLocaleTimeString().slice(0,5);
    alert(saludo(horaResult.slice(0,2)) + ", son las " + horaResult);
}
function saludo(hora) {
    switch (true) {
        case hora >= "07" && hora <= "14":
                return "Buenos dias";
            break;
        case hora > "14" && hora <= "20":
                return "Buenas tardes";
            break;
        case hora > "20" && hora < "07":
            return "Buenas noches";
        break;
        default:
            break;
    }
}