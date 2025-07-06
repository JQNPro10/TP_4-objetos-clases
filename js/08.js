/*
8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". 
Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
*/

class Person {
  #name;
  #age;
  #profession;
  constructor(nameParam, ageParam, professionParam) {
    this.#name = nameParam;
    this.#age = ageParam;
    this.#profession = professionParam;
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

  get profession() {
    return this.#profession;
  }
  set profession(professionString) {
    if (typeof professionString === "string" && professionString !== null) {
      this.#profession = professionString;
    } else {
      alert("Ingrese un valor correcto");
    }
  }

  saludar(){
    document.writeln(`Hola ${this.name}, ¿como te va?<br>`);
  }
  despedirse(){
    document.writeln(`Tu cumpleaños estubo muy divertido, hasta luego!`);
  }
}

const persona = new Person();
const persona2 = new Person();

persona.name = "Juan";
persona.age = 43;
persona.profession = "Programador";

persona2.name = "Lia";
persona2.age = 19;
persona2.profession = "Doctora";

persona.saludar();
persona.despedirse()

persona2.saludar();
persona2.despedirse()