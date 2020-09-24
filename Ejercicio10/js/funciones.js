function suma() {
    var numero1;
    var numero2;
    var numero3;
    var resultado;

    numero1 = parseInt(prompt("Dime un numero: "));
    numero2 = parseInt(prompt("Dime otro numero"));
    resultado = (numero1 + numero2);
    alert(resultado);

    while (resultado != 0) {
        numero3 = prompt("Dime un numero: ");

        if (isNaN(numero3)) {
            throw (new Error(error()));
        } else {
            resultado += parseInt(numero3);
            alert(resultado);
        }
    }
}

function error() {
    alert("Ese no era un numero")
}