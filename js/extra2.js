// Ejercicio 2: Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades nombre y nota. 
// Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes. 
// Usa prompt para ingresar los datos de los estudiantes.

const datos = [];
const numEstudiantes = parseInt(prompt("¿Cuantos alumnos quieres evaluar?"))

for (let i = 0; i < numEstudiantes; i++) {
    let nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
    let nota = parseFloat(prompt(`Ingrese la nota de ${nombre}:`));

    // Creamos el objeto y lo agregamos al array
    console.log (nombre, ":", nota)
    datos.push({
        nombre: nombre,
        nota: nota
    });
}

// Función para calcular el promedio
function calcularPromedio(estudiantes) {
    let suma = 0;
    for (let i = 0; i < estudiantes.length; i++) {
        suma += estudiantes[i].nota;
    }
    return suma / estudiantes.length;
}

const promedio = calcularPromedio(datos);

document.writeln("La nota media de los estudiantes es: ", promedio);
