export class Jugador {
  constructor(nombrejugador, niveljugador) {
    this.nombre = nombrejugador;
    this.nivel = niveljugador;
  
  }

informacion(){
  console.log(`${this.nombre} ha alcanzado el Nivel ${this.nivel}!`);
}
}

const jugador1 = new Jugador("Tara", 6);
jugador1.informacion();

