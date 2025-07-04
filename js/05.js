/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
*/

class Persona {
    constructor(nombre, edad, DNI, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
    }

    mostrarGeneracion() {
        let generacion = "";
        let rasgo = "";

        if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            generacion = "Generación Z";
            rasgo = "Irreverencia";
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            generacion = "Generación Y (Millennials)";
            rasgo = "Frustración";
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            generacion = "Generación X";
            rasgo = "Obsesión por el éxito";
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            generacion = "Baby Boom";
            rasgo = "Ambición";
        } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            generacion = "Silent Generation (los niños de la posguerra)";
            rasgo = "Austeridad";
        } else {
            generacion = "Generación no identificada";
            rasgo = "Sin información";
        }

        document.writeln(`${this.nombre} pertenece a la ${generacion}.<br>`);
        document.writeln(`Rasgo característico: ${rasgo}.<br>`);
    }

    mostrarDatos() {
        document.writeln(`<br>Datos de la persona:<br>`);
        document.writeln(`Nombre: ${this.nombre}<br>`);
        document.writeln(`Edad: ${this.edad}<br>`);
        document.writeln(`DNI: ${this.DNI}<br>`);
        document.writeln(`Sexo: ${this.sexo}<br>`);
        document.writeln(`Peso: ${this.peso.toFixed(2)} kg<br>`);
        document.writeln(`Altura: ${this.altura.toFixed(2)} m<br>`);
        document.writeln(`Año de nacimiento: ${this.anioNacimiento}<br><br>`);
    }
}

let persona1 = new Persona("Mateo", 25, "40123456", "H", 70, 1.75, 1999);
persona1.mostrarDatos();
persona1.mostrarGeneracion();

let nombre = prompt("Ingrese el nombre:");
let edad = parseInt(prompt("Ingrese la edad:"));
let DNI = prompt("Ingrese el DNI:");
let sexo = prompt("Ingrese el sexo (H/M):");
let peso = parseFloat(prompt("Ingrese el peso en kg:"));
let altura = parseFloat(prompt("Ingrese la altura en metros:"));
let anioNacimiento = parseInt(prompt("Ingrese el año de nacimiento:"));

let persona2 = new Persona(nombre, edad, DNI, sexo, peso, altura, anioNacimiento);
persona2.mostrarDatos();
persona2.mostrarGeneracion();
