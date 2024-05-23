import {partida, EstadoPartida} from './modelo'

export const obtenerEstadoPartida = (): EstadoPartida => {
  if (partida.puntuacionJugador === 7.5) {
    partida.estadoPartida = "JUSTO_MAXIMA";
  }
  if (partida.puntuacionJugador > 7.5) {
    partida.estadoPartida = "TE_HAS_PASADO";
  }
  return partida.estadoPartida;
};

export function dameCarta() {
    return Math.ceil(Math.random() * 10);
  }

export const obtenerNumeroCarta = (numeroAleatorio: number) => {
    if (numeroAleatorio > 7) {
      return numeroAleatorio + 2; // 8 + 2 = 10; 9 + 2 = 11; 10 + 2 = 12
    }
    return numeroAleatorio // 1 a 7
  }
  
