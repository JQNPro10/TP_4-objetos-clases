// Ejercicio 1: Crea un objeto persona que contenga las propiedades nombre, edad y hobbies (un array de strings). 
// Luego, escribe una función que reciba un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies de la persona. 
// Finalmente, imprime los hobbies de la persona usando un bucle. 
// Usa prompt para ingresar los datos de la persona y el nuevo hobby.

const persona = {
    nombre: "",
    edad: "",
    hobbies: [],

    recibir_datos: function (nombre, edad, hobbies) {
        this.nombre = nombre;
        this.edad = edad;
        this.hobbies = hobbies;
    },

    agregar_hobby: function (nuevoHobby) {
        this.hobbies.push(nuevoHobby);
    },

    mostrar_hobbies: function () {
        document.writeln(`<h3>Hobbies de ${this.nombre}:</h3>`);
        for (let i = 0; i < this.hobbies.length; i++) {
            document.writeln(`- ${this.hobbies[i]} <br>`);
        }
    },

    mostrar_todo_consola: function () {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log("Hobbies:");
        for (let i = 0; i < this.hobbies.length; i++) {
            console.log(`- ${this.hobbies[i]}`);
        }
    }
};

let nombre = prompt("Ingresa el nombre de la persona:");
let edad = prompt("Ingresa la edad de la persona:");

let cantidad = parseInt(prompt("¿Cuántos hobbies iniciales querés ingresar?"));
let hobbiesArray = [];

for (let i = 0; i < cantidad; i++) {
    let hob = prompt("Escribí un hobby:");
    hobbiesArray.push(hob);
}

persona.recibir_datos(nombre, edad, hobbiesArray);

let continuar;
do {
    let nuevoHobby = prompt("Ingresa un nuevo hobby para añadir:");
    persona.agregar_hobby(nuevoHobby);

    continuar = confirm("¿Querés agregar otro hobby?");
} while (continuar);

persona.mostrar_todo_consola();

persona.mostrar_hobbies();
