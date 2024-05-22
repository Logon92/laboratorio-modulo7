import {partida, EstadoPartida} from './modelo';
import { vi } from "vitest";
import {obtenerEstadoPartida} from './motor';

describe('obtenerEstadoPartida', () => {
    it("Debería devolver TE_HAS_PASADO si la puntuación sobrepasa 7.5 puntos", () => {
        //Arrange
        const estadoPartidaEsperado : EstadoPartida = "TE_HAS_PASADO";
        vi.spyOn(partida,"puntuacionJugador", "get").mockReturnValue(8);

        //Act
        const resultado = obtenerEstadoPartida();

        //Assert
        expect(resultado).toBe(estadoPartidaEsperado)
    });

    it("Debería devolver POR_DEBAJO_MAXIMO si la puntuación no sobrepasa 7.5 puntos", () => {
        //Arrange
        const estadoPartidaEsperado : EstadoPartida = "POR_DEBAJO_MAXIMO";
        vi.spyOn(partida,"puntuacionJugador", "get").mockReturnValue(6);

        //Act
        const resultado = obtenerEstadoPartida();

        //Assert
        expect(resultado).toBe(estadoPartidaEsperado)
        console.log(partida);
    });

    it("Debería devolver JUSTO_MAXIMA si la puntuación es 7.5 puntos", () => {
        //Arrange
        const estadoPartidaEsperado : EstadoPartida = "JUSTO_MAXIMA";
        vi.spyOn(partida,"puntuacionJugador", "get").mockReturnValue(7.5);

        //Act
        const resultado = obtenerEstadoPartida();

        //Assert
        expect(resultado).toBe(estadoPartidaEsperado)
        console.log(partida);
    });
})