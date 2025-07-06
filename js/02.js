/* 
Cuenta bancaria - Dificultad:  🟢🟡
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/
const cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar: function (cantidad) {
        if (!isNaN(cantidad) && cantidad > 0) {
            this.saldo += cantidad
            alert("Tarifa ingresada")
        } else {
            alert("Error")        
        }
    },
    extraer: function (cantidad) {
        if (!isNaN(cantidad) && cantidad > 0) {
            if (cantidad <= this.saldo) {
                this.saldo -= cantidad
                alert("Se a extraido " + cantidad)
            } else {
                alert("Saldo insuficiente")
            }
        } else {
            alert("Error")        
        }
    },
    informar: function () {
        alert("El saldo es de: " + this.saldo)
    }
}

while (true) {
    const numero = prompt(`Ingresa "1" para ingresar dinero, "2" para extraer y "3" para ver el saldo`)
    if (numero == 1) {
        const cantidad = parseInt(prompt("¿Cuanto quieres ingresar?"))
        cuenta.ingresar(cantidad)
    }else if (numero == 2) {
        const cantidad = parseInt(prompt("¿Cuanto quieres extraer?"))
        cuenta.extraer(cantidad)
    }else if (numero == 3) {
        cuenta.informar()
    }else{
        alert("Error")    
    }
}