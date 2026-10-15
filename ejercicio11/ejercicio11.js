function simularNumerosAleatorios() {
    let confirmar = prompt("Presiona Aceptar para generar y analizar los 100 números aleatorios (del 1 al 20):");

    if (confirmar === null) {
        console.log("Operación cancelada.");
        return;
    }

    let numerosGenerados = [];
    let numerosUnicos = new Set();

    for (let i = 0; i < 100; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 20) + 1;
        
        numerosGenerados.push(numeroAleatorio);
        numerosUnicos.add(numeroAleatorio);
    }

    console.log("Lista completa de los 100 números generados:");
    console.log(numerosGenerados);

    console.log(`\n¡Resultado! De los 100 números generados, un total de ${numerosUnicos.size} números diferentes (del 1 al 20) han aparecido al menos una vez.`);
    
    let listaOrdenada = Array.from(numerosUnicos).sort((a, b) => a - b);
    console.log("Números que aparecieron:", listaOrdenada);
}

simularNumerosAleatorios();