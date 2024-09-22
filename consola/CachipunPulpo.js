const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generarJugadaComputadora() {
    const opciones = ["Piedra", "Papel", "Tijera"];
    const indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}

function determinarGanador(jugadaUsuario, jugadaComputadora) {
    if ((jugadaUsuario === "Piedra" && jugadaComputadora === "Tijera") ||
        (jugadaUsuario === "Papel" && jugadaComputadora === "Piedra") ||
        (jugadaUsuario === "Tijera" && jugadaComputadora === "Papel")) {
        return "usuario";
    } else if ((jugadaComputadora === "Piedra" && jugadaUsuario === "Tijera") ||
               (jugadaComputadora === "Papel" && jugadaUsuario === "Piedra") ||
               (jugadaComputadora === "Tijera" && jugadaUsuario === "Papel")) {
        return "computadora";
    } else {
        return "empate";
    }
}

function jugarPartida() {
    rl.question("¿Piedra, Papel o Tijera?", (jugadaUsuario) => {
        const jugadaComputadora = generarJugadaComputadora();
        console.log("La computadora eligió:", jugadaComputadora);
        
        const ganador = determinarGanador(jugadaUsuario, jugadaComputadora);
        if (ganador === "usuario") {
            console.log("¡Ganaste!");
        } else if (ganador === "computadora") {
            console.log("Perdiste. La computadora ganó.");
        } else {
            console.log("¡Empate!");
        }

        rl.question("¿Quieres jugar de nuevo? (S/N)", (respuesta) => {
            if (respuesta.toUpperCase() === "S") {
                jugarPartida();
            } else {
                rl.close();
            }
        });
    });
}

// Iniciar el juego
jugarPartida();
