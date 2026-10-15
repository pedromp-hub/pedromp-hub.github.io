
//------------------------------- EJERCICIO 2 -----------------------------

let numeros = [];

for (let i = 0; i < 100; i++) {
  // Generamos un número al azar entre 1 y 100
  let numeroAzar = Math.floor(Math.random() * 100) + 1;
  
  numeros.push(numeroAzar);
}

console.log("--- TODOS LOS NÚMEROS ---");
console.table(numeros);

let numerosFiltrados = numeros.filter(function(numero) {
  return numero >= 20 && numero <= 40;
});

console.log("--- SOLO LOS NÚMEROS ENTRE 20 Y 40 ---");
console.table(numerosFiltrados);