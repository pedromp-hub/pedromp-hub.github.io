function contarPalabrasUsuario() {
    let frase = prompt("Introduce una frase:");

    if (frase === null || frase.trim() === "") {
        console.log("No ingresaste ninguna frase.");
        return;
    }

    let palabras = frase.trim().split(/\s+/);

    let cantidadPalabras = palabras.length;

    console.log(`La frase "${frase}" tiene ${cantidadPalabras} palabras.`);
}

contarPalabrasUsuario();