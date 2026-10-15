function contarVocalesUsuario() {
    let palabra = prompt("Introduce una palabra:");
    
    if (!palabra) {
        console.log("No ingresaste ninguna palabra.");
        return;
    }

    let palabraMinuscula = palabra.toLowerCase();
    const vocales = "aeiouáéíóú";
    let contador = 0;

    for (let i = 0; i < palabraMinuscula.length; i++) {
        let caracter = palabraMinuscula[i];
        
        if (vocales.includes(caracter)) {
            contador++;
        }
    }

    console.log(`La palabra "${palabra}" tiene ${contador} vocales.`);
}

contarVocalesUsuario();