function revertirCadenaUsuario() {
    let cadena = prompt("Introduce una cadena o palabra:");

    if (cadena === null || cadena.trim() === "") {
        console.log("No ingresaste ninguna cadena válida.");
        return;
    }

    let cadenaInvertida = cadena.split('').reverse().join('');

    console.log(`La cadena invertida es: "${cadenaInvertida}"`);
}

revertirCadenaUsuario();