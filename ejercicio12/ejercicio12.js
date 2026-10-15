function filtrarParesUsuario() {
    let entrada = prompt("Introduce varios números separados por comas (ejemplo: 1, 2, 3, 4, 5, 6):");

    if (!entrada) {
        console.log("No ingresaste ningún número.");
        return;
    }

    let numeros = entrada.split(',').map(Number);

    if (numeros.some(isNaN)) {
        console.log("Por favor, asegúrate de ingresar solo números separados por comas.");
        return;
    }

    let pares = numeros.filter(numero => numero % 2 === 0);

    console.log(`Los números pares del array [${numeros}] son: [${pares}]`);
}

filtrarParesUsuario();