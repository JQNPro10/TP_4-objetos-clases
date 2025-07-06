/*
10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
*/

class Avion {
  constructor(nombre, capacidad, destino) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaPasajeros = [];
  }

  abordar(pasajero) {
    if (this.listaPasajeros.length < this.capacidad) {
      this.listaPasajeros.push(pasajero);
      console.log(`El pasajero ${pasajero} ha abordado el avión ${this.nombre}.`);
    } else {
      console.log(`El avión ${this.nombre} está lleno. No se puede abordar más pasajeros.`);
    }
  }
}

class Aeropuerto {
  constructor(nombreAeropuerto) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaAviones = [];
  }

  agregarAvion(avion) {
    this.listaAviones.push(avion);
  }

  buscarAvion(nombreAvion) {
    const avionEncontrado = this.listaAviones.find(avion => avion.nombre === nombreAvion);
    if (avionEncontrado) {
      return `Avión encontrado: Nombre: ${avionEncontrado.nombre}, Capacidad: ${avionEncontrado.capacidad}, Destino: ${avionEncontrado.destino}, Pasajeros a bordo: ${avionEncontrado.listaPasajeros.length}`;
    } else {
      return `No se encontró el avión con nombre ${nombreAvion}.`;
    }
  }
}

const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");

const avion1 = new Avion("Avianca", 3, "Bogotá");
const avion2 = new Avion("Latam", 2, "Santiago");
const avion3 = new Avion("American Airlines", 4, "Miami");

aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);

console.log(aeropuertoInternacional.buscarAvion("Latam"));

avion2.abordar("Juan");
avion2.abordar("María");
avion2.abordar("Carlos");

console.log(aeropuertoInternacional.buscarAvion("Latam"));
