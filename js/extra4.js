// Ejercicio 4:  Crea un objeto alumno con propiedades nombre, curso y calificaciones (un array de números). 
// Escribe una función que reciba un objeto alumno y un número, y que añada la calificación al array de calificaciones del alumno. 
// Calcula la calificación más alta del alumno y clasifica al alumno según su calificación más alta (A para 9-10, B para 7-8, C para 5-6, D para 0-4).

const alumno = {
    nombre: prompt("Ingresa el nombre del alumno:"),
    curso: prompt("Ingresa el curso del alumno:"),
    calificaciones: []
};

function agregarCalificacion(alumno, nuevaNota) {
    alumno.calificaciones.push(nuevaNota);
}

function mostrarAlumno(alumno) {
    const notaMasAlta = Math.max(...alumno.calificaciones);
    let clasificacion = "";

    if (notaMasAlta >= 9) {
        clasificacion = "A";
    } else if (notaMasAlta >= 7) {
        clasificacion = "B";
    } else if (notaMasAlta >= 5) {
        clasificacion = "C";
    } else {
        clasificacion = "D";
    }

    document.writeln("Nombre: " + alumno.nombre + "<br>");
    document.writeln("Curso: " + alumno.curso + "<br>");
    document.writeln("Calificaciones: " + alumno.calificaciones.join(", ") + "<br>");
    document.writeln("Nota más alta: " + notaMasAlta + "<br>");
    document.writeln("Clasificación: " + clasificacion + "<br><br>");
}

const cantidadNotas = parseInt(prompt("¿Cuántas calificaciones vas a ingresar?"));

for (let i = 0; i < cantidadNotas; i++) {
    const nota = parseFloat(prompt(`Ingresa la calificación ${i + 1}:`));
    agregarCalificacion(alumno, nota);
}

mostrarAlumno(alumno);
