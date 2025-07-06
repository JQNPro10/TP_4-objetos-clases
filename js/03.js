/* 
3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
con las propiedades de alto y ancho, 
mas los métodos necesarios para modificar y mostrar sus propiedades, 
calcular el perímetro y el área
*/

class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    setAlto(nuevoAlto) {
        this.alto = nuevoAlto;
    }

    setAncho(nuevoAncho) {
        this.ancho = nuevoAncho;
    }

    calcularPerimetro() {
        return 2 * (this.alto + this.ancho);
    }

    calcularArea() {
        return this.alto * this.ancho;
    }

    mostrar() {
        document.writeln(`<div class="card text-center m-3 p-3 border-primary">`);
        document.writeln(`<h4 class="text-primary">Rectángulo</h4>`);
        document.writeln(`Alto: ${this.alto}<br>`);
        document.writeln(`Ancho: ${this.ancho}<br>`);
        document.writeln(`Perímetro: ${this.calcularPerimetro()}<br>`);
        document.writeln(`Área: ${this.calcularArea()}<br><br>`);
        document.writeln(`<div style="
      width: ${this.ancho * 10}px;
      height: ${this.alto * 10}px;
      background-color: lightblue;
      border: 2px solid #007bff;
      margin: 0 auto;
    "></div>`);
        document.writeln(`<div style="margin-top: 5px; font-weight: bold;">
      (${this.ancho * 10}px x ${this.alto * 10}px)
    </div>`);
        document.writeln(`</div>`);
    }
}

let alto = parseFloat(prompt("Ingresa el alto del rectángulo:"));
let ancho = parseFloat(prompt("Ingresa el ancho del rectángulo:"));

let modificar = confirm("¿Querés modificar el rectángulo antes de mostrarlo?");

if (modificar) {
    let nuevoAlto = parseFloat(prompt("Nuevo alto:"));
    let nuevoAncho = parseFloat(prompt("Nuevo ancho:"));
    alto = !isNaN(nuevoAlto) ? nuevoAlto : alto;
    ancho = !isNaN(nuevoAncho) ? nuevoAncho : ancho;
}

const rect = new Rectangulo(alto, ancho);
rect.mostrar();
