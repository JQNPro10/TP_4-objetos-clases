/*
9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". 
Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". 
Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.
*/

class Animal {
  #name;
  #age;
  constructor(nameParam, ageParam) {
    this.#name = nameParam;
    this.#age = ageParam;
  }

  get name() {
    return this.#name;
  }
  set name(nameString) {
    if (typeof nameString === "string" && nameString !== null) {
      this.#name = nameString;
    } else {
      alert("Ingrese un valor correcto");
    }
  }

  get age() {
    return this.#age;
  }
  set age(ageInt) {
    if (typeof ageInt === "number" && !isNaN(ageInt) && ageInt !== null) {
      this.#age = ageInt;
    } else {
      alert("Ingrese un valor correcto");
    }
  }

  makeSound() {
    document.writeln("-Sonido de animal-");
  }
}

class Dog extends Animal {
  constructor(nameParam, ageParam) {
    super(nameParam, ageParam);
  }
  makeSound() {
    document.writeln("Guau Guau<br>");
  }
}

class Cat extends Animal {
  constructor(nameParam, ageParam) {
    super(nameParam, ageParam);
  }
  makeSound() {
    document.writeln("Miau Miau<br>");
  }
}

const perro = new Dog("Poppy", 10);
const gato = new Cat("Lucy", 10);

perro.makeSound();
gato.makeSound();