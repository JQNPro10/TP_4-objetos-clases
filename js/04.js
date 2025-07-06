/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, 
nombre y precio, además del método imprime datos, 
el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    document.writeln(`<p><strong>Código:</strong> ${this.codigo} <br>`);
    document.writeln(`<strong>Nombre:</strong> ${this.nombre} <br>`);
    document.writeln(`<strong>Precio:</strong> $${this.precio}</p>`);
  }
}

const producto1 = new Producto("001", "Auriculares", 15000);
const producto2 = new Producto("002", "Teclado", 22000);
const producto3 = new Producto("003", "Mouse", 8000);

const productos = [producto1, producto2, producto3];

for (let producto of productos) {
  producto.imprimeDatos();
}
