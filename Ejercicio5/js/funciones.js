function fecha() {
    var dia;
    var mes;
    var año;

    dia = prompt("Dime el dia: ");
    mes = prompt("Dime el mes: ")
    año = prompt("Dime el año: ");

    alert("Dia: " + dia + " " + "Mes: " + mes + " " + "Año: " + año)
}

function operaciones() {
    var numero1;
    var numero2;

    numero1 = prompt("Dime un numero: ");
    numero2 = prompt("Dime otro numero: ");

    alert(numero1 * numero2);

    if (numero2 != 0) {
        alert(numero1 / numero2);
    }
    alert(numero1 - numero2);
    alert((numero1 * numero1) - (numero2 * numero2));

    if (numero2 > 0) {
        alert(numero2);
    }

    if (numero1 > 0) {
        alert(numero1);
    }
}