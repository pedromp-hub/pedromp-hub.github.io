function encontrarMayorUsuario() {
    let entrada = prompt("Introduce varios números separados por comas (ejemplo: 5, 12, 99, 3):");

    if (!entrada) {
        console.log("No ingresaste ningún número.");
        return;
    }

    let numeros = entrada.split(',').map(Number);

    if (numeros.some(isNaN)) {
        console.log("Por favor, asegúrate de ingresar solo números separados por comas.");
        return;
    }

    let numeroMasGrande = Math.max(...numeros);

    // Mostramos el resultado en la consola
    console.log(`El número más grande del array [${numeros}] es: ${numeroMasGrande}`);
}

encontrarMayorUsuario();