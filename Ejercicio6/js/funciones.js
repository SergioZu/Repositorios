function mes() {
    var meses = ["enero", "febreo", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octube", "noviembre", "diciembre"];
    for (let index = 0; index < meses.length; index++) {
        alert(meses[index]);

    }
}

function factorial() {
    var numero;

    numero = prompt("Dime un numero: ");
    var resultado = 1;

    for (let index = 1; index <= numero; index++) {
        resultado = index * resultado;
    }
    alert(resultado);
}

function edad() {
    var edad;
    edad = prompt("Dime tu edad: ");

    if (edad < 7) {
        alert("Patrulla Canina");
    } else if (edad > 7 && edad < 13) {
        alert("Alexa y Katie");
    } else if (edad > 14 && edad < 18) {
        alert("Anne with an E");
    } else if (edad > 19 && edad < 35) {
        alert("Stranger Things");
    } else if (edad > 35) {
        alert("Sherlock ");
    }
}

function bucle() {
    var valor;
    do {
        valor = prompt("Dime un numero: ");

    } while (valor != 45 && valor != 72);
}