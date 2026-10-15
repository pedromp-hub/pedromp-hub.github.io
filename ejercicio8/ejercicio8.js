function azarUsuario() {
    let minInput = prompt("Introduce el número mínimo:");
    let maxInput = prompt("Introduce el número máximo:");

    let min = parseInt(minInput);
    let max = parseInt(maxInput);

    if (isNaN(min) || isNaN(max)) {
        console.log("Por favor, ingresa números válidos.");
        return;
    }

    if (min > max) {
        console.log("El número mínimo no puede ser mayor que el máximo.");
        return;
    }

    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log(`Número aleatorio entre ${min} y ${max}: ${numeroAleatorio}`);
}

azarUsuario();