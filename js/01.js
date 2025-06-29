// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. 
// Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
    color: "Blanco",
    marca: "Fiat",
    modelo: "Fire 2012",
    encendido: false, // Estado inicial

    on_off: function () {
        if (confirm("¿Querés encender el auto?\nPresioná ACEPTAR para encender o CANCELAR para apagar.")) {
            this.encendido = ("El auto está encendido.");
        } else {
            this.encendido = ("El auto está apagado.");
        }
    }
};

auto.on_off();

console.log(auto);

document.writeln("<h1>Auto</h1>")
document.writeln(auto.color + "<br>")
document.writeln(auto.marca + "<br>")
document.writeln(auto.modelo + "<br>")
document.writeln(auto.encendido + "<br>")