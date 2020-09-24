function primero() {
    for (let index = 1; index <= 35; index++) {
        if (index % 2 == 0) {
            alert(index);
        }

    }
}

function segunda() {
    var index = 1;
    do {
        if (index % 2 == 0) {
            alert(index);

        }
        index++;
    } while (index <= 35);
}