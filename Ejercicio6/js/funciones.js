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