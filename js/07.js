/*
7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class Agenda {
  constructor(tamanio = 10) {
    this.contactos = [];
    this.tamanio = tamanio;
  }

  aniadirContacto(contacto) {
    if (this.agendaLlena()) {
      alert("La agenda está llena. No se puede añadir más contactos.");
      return;
    }
    if (this.existeContacto(contacto)) {
      alert("El contacto ya existe.");
      return;
    }
    this.contactos.push(contacto);
    alert("Contacto añadido correctamente.");
  }

  existeContacto(contacto) {
    for (let i = 0; i < this.contactos.length; i++) {
      let contactoExistente = this.contactos[i];
      if (contactoExistente.nombre.toLowerCase() === contacto.nombre.toLowerCase()) {
        return true;
      }
    }
    return false;
  }

  listarContactos() {
    if (this.contactos.length === 0) {
      alert("La agenda está vacía.");
    } else {
      let lista = "Contactos:<br>";
      this.contactos.forEach(contactoExistente => {
        lista += `Nombre: ${contactoExistente.nombre}, Teléfono: ${contactoExistente.telefono}<br>`;
      });
      document.writeln(lista);
      console.log(lista);
    }
  }

  buscarContacto(nombre) {
    const contactoEncontrado = this.contactos.find(contactoExistente =>
      contactoExistente.nombre.toLowerCase() === nombre.toLowerCase()
    );
    if (contactoEncontrado) {
      alert(`Teléfono de ${contactoEncontrado.nombre}: ${contactoEncontrado.telefono}`);
    } else {
      alert("Contacto no encontrado.");
    }
  }

  eliminarContacto(contacto) {
    const index = this.contactos.findIndex(contactoExistente =>
      contactoExistente.nombre.toLowerCase() === contacto.nombre.toLowerCase()
    );
    if (index !== -1) {
      this.contactos.splice(index, 1);
      alert("Contacto eliminado correctamente.");
    } else {
      alert("No se pudo eliminar el contacto (no existe).");
    }
  }

  agendaLlena() {
    return this.contactos.length >= this.tamanio;
  }

  huecosLibres() {
    return this.tamanio - this.contactos.length;
  }
}

function menu() {
  const agenda = new Agenda();

  let opcion;
  do {
    opcion = prompt(
      "Agenda Telefónica\n\n" +
      "1. Añadir contacto\n" +
      "2. Ver si un contacto existe\n" +
      "3. Listar contactos\n" +
      "4. Buscar contacto por nombre\n" +
      "5. Eliminar contacto\n" +
      "6. ¿La agenda está llena?\n" +
      "7. Ver huecos libres\n" +
      "8. Salir\n\n" +
      "Seleccione una opción:"
    );

    switch (opcion) {
      case "1":
        let nombre = prompt("Ingrese el nombre:");
        let telefono = prompt("Ingrese el teléfono:");
        let nuevoContacto = new Contacto(nombre, telefono);
        agenda.aniadirContacto(nuevoContacto);
        break;

      case "2":
        nombre = prompt("Ingrese el nombre del contacto:");
        let temporal = new Contacto(nombre, "");
        if (agenda.existeContacto(temporal)) {
          alert("El contacto existe.");
        } else {
          alert("El contacto no existe.");
        }
        break;

      case "3":
        agenda.listarContactos();
        break;

      case "4":
        nombre = prompt("Ingrese el nombre del contacto:");
        agenda.buscarContacto(nombre);
        break;

      case "5":
        nombre = prompt("Ingrese el nombre del contacto a eliminar:");
        let eliminar = new Contacto(nombre, "");
        agenda.eliminarContacto(eliminar);
        break;

      case "6":
        if (agenda.agendaLlena()) {
          alert("La agenda está llena.");
        } else {
          alert("Aún hay espacio.");
        }
        break;

      case "7":
        alert("Huecos libres: " + agenda.huecosLibres());
        break;

      case "8":
        alert("Saliendo de la agenda.");
        break;

      default:
        alert("Opción no válida.");
    }
  } while (opcion !== "8");
}

menu();