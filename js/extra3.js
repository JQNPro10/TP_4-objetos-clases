// Ejercicio 3: Crea un objeto libro que tenga propiedades título, autor, año y género. 
// Luego, escribe una función que reciba un array de libros y un género y devuelva un array con los libros de ese género usando filter. 
// Usa prompt para ingresar los datos de los libros y el género.

const libros = [];

const cantidad = parseInt(prompt("¿Cuántos libros querés ingresar?"));
console.log("Cantidad de libros a ingresar:", cantidad);

for (let i = 0; i < cantidad; i++) {
    console.log(`\nIngresando datos del libro ${i + 1}...`);

    const titulo = prompt(`Libro ${i + 1} - Título:`);
    console.log("Título ingresado:", titulo);

    const autor = prompt(`Libro ${i + 1} - Autor:`);
    console.log("Autor ingresado:", autor);

    const año = prompt(`Libro ${i + 1} - Año:`);
    console.log("Año ingresado:", año);

    const genero = prompt(`Libro ${i + 1} - Género:`);
    console.log("Género ingresado:", genero);

    const nuevoLibro = {
        titulo: titulo,
        autor: autor,
        año: año,
        genero: genero
    };

    console.log("Objeto libro creado:", nuevoLibro);

    libros.push(nuevoLibro);
    console.log("Array de libros hasta ahora:", libros);
}

function filtrarPorGenero(librosArray, generoBuscado) {
    console.log("\nFiltrando libros por género...");
    console.log("Género buscado:", generoBuscado);

    const resultadoFiltrado = librosArray.filter(function(libro) {
        console.log(`Comparando "${libro.genero.toLowerCase()}" con "${generoBuscado.toLowerCase()}"`);
        return libro.genero.toLowerCase() === generoBuscado.toLowerCase();
    });

    console.log("Libros que coinciden con el género buscado:", resultadoFiltrado);
    return resultadoFiltrado;
}

const generoIngresado = prompt("¿Qué género querés buscar?");
console.log("\nGénero ingresado para búsqueda:", generoIngresado);

const resultado = filtrarPorGenero(libros, generoIngresado);

document.writeln("<h2>📚 Libros encontrados del género: " + generoIngresado + "</h2>");

if (resultado.length === 0) {
    document.writeln("<p>No se encontraron libros de ese género.</p>");
} else {
    resultado.forEach(function(libro, index) {
        document.writeln(`<p><strong>Libro ${index + 1}</strong><br>`);
        document.writeln(`Título: ${libro.titulo}<br>`);
        document.writeln(`Autor: ${libro.autor}<br>`);
        document.writeln(`Año: ${libro.año}<br>`);
        document.writeln(`Género: ${libro.genero}</p>`);
    });
}
