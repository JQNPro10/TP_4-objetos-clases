/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene xxx páginas"

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
    constructor(isbn, titulo, autor, numPaginas) {
        this._isbn = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._numPaginas = numPaginas;
    }

    get isbn() {
        return this._isbn;
    }

    set isbn(nuevoIsbn) {
        this._isbn = nuevoIsbn;
    }

    get titulo() {
        return this._titulo;
    }

    set titulo(nuevoTitulo) {
        this._titulo = nuevoTitulo;
    }

    get autor() {
        return this._autor;
    }

    set autor(nuevoAutor) {
        this._autor = nuevoAutor;
    }

    get numPaginas() {
        return this._numPaginas;
    }

    set numPaginas(nuevoNumPaginas) {
        this._numPaginas = nuevoNumPaginas;
    }

    mostrarLibro() {
        document.writeln(`El libro "${this._titulo}" con ISBN ${this._isbn}, creado por el autor ${this._autor}, tiene ${this._numPaginas} páginas.<br>`);
    }
}

let libro1 = new Libro("978-987-1234567", "El Guardián entre el Centeno", "J.D. Salinger", 277);
let libro2 = new Libro("978-987-7654321", "Cien Años de Soledad", "Gabriel García Márquez", 417);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.numPaginas > libro2.numPaginas) {
    document.writeln(`El libro con más páginas es "${libro1.titulo}".`);
} else if (libro2.numPaginas > libro1.numPaginas) {
    document.writeln(`El libro con más páginas es "${libro2.titulo}".`);
} else {
    document.writeln("Ambos libros tienen la misma cantidad de páginas.");
}
