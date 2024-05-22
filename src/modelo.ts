interface Partida{
    puntuacionJugador: number;
    estadoPartida: EstadoPartida;
}
export const partida : Partida = {
    puntuacionJugador : 0,
    estadoPartida : "POR_DEBAJO_MAXIMO"
};


interface mp{
    maximaPuntuacion:number;
}

export const mP:mp = {
    maximaPuntuacion : 7.5
}

export type EstadoPartida =
  | "POR_DEBAJO_MAXIMO"
  | "JUSTO_MAXIMA"
  | "TE_HAS_PASADO";


export const obtenerUrlCarta = (carta: number) => {
    switch (carta) {
        case 1:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg`;
        case 2:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg`;
        case 3:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg`;
        case 4:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg`;
        case 5:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg`;
        case 6:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg`;
        case 7:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg`;
        case 10:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg`;
        case 11:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg`;
        case 12:
            return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg`;
        default:
            return `¡Opps, algo ha fallado!`;
    }
  }
