import {partida, EstadoPartida} from './modelo';
import { vi } from "vitest";
import {obtenerEstadoPartida, dameCarta, obtenerNumeroCarta} from './motor';

describe('obtenerEstadoPartida', () => {
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

    it("Debería devolver TE_HAS_PASADO si la puntuación sobrepasa 7.5 puntos", () => {
        //Arrange
        const estadoPartidaEsperado : EstadoPartida = "TE_HAS_PASADO";
        vi.spyOn(partida,"puntuacionJugador", "get").mockReturnValue(8);

        //Act
        const resultado = obtenerEstadoPartida();

        //Assert
        expect(resultado).toBe(estadoPartidaEsperado)
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

describe('dameCarta', () => {
    it("Debería devolver un número aleatorio entre el 1 y el 10", () => {
        //Arrange
        const numeroAlAzar : number = 7;
        vi.spyOn(Math, "random").mockReturnValue(0.7);

        //Act
        const resultado = dameCarta();

        //Assert
        expect(resultado).toBe(numeroAlAzar)
    })
})

describe('obtenerNumeroCarta', () => {
    it("Debería devolver 10 cuando el número aleatorio es un 8", () => {
        //Arrange
        const numeroAleatorio = 8;
        const resultadoEsperado = 10;

        //Act
        const resultado = obtenerNumeroCarta(numeroAleatorio);

        //Assert
        expect(resultado).toBe(resultadoEsperado)
    })

    it("Debería devolver el mismo número cuando es un número menor a 7", () => {
        //Arrange
        const numeroAleatorio = 5;
        const resultadoEsperado = 5;

        //Act
        const resultado = obtenerNumeroCarta(numeroAleatorio);

        //Assert
        expect(resultado).toBe(resultadoEsperado)
    })
})