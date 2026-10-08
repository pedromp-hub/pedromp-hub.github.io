
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

//----------------------------- EJERCICIO 3 ------------------------

// let persona = {
//   nombre: "Carlos",
  
//   edad: 25,
  
//   estaEmpleado: true,
  
//   aficiones: ["lectura", "fútbol", "programación"],
  
//   direccion: {
//     ciudad: "Madrid",
//     codigoPostal: 28001
//   }
// };

// console.log("--- Salida con console.log ---");
// console.log(persona);

// console.log("--- Salida con console.table ---");
// console.table(persona);

//------------------------------- EJERCICIO 4 --------------------

// let entrada1 = prompt("Ingresa el primer número:");

// let entrada2 = prompt("Ingresa el segundo número:");

// let numero1 = Number(entrada1);
// let numero2 = Number(entrada2);

// // 4. Sumamos los dos números
// let suma = numero1 + numero2;

// console.log("La suma de los dos números es:", suma);

//----------------------------- EJERCICIO 5 -------------------

// let entrada = prompt("Ingresa un número:")

// let numero = Number(entrada);

// if (numero % 2 === 0){
//     console.log(numero, "es un número par");
// } else {
//     console.log(numero, "es un número impar")
// }

//-------------------------------- EJERCICIO 6 --------------------

// function comprobarNumero() {
//             let valorInput = document.getElementById("numeroInput").value;

//             let numero = Number(valorInput);

//             if (valorInput === "") {
//                 document.getElementById("resultado").innerText = "Por favor, escribe un número.";
//                 return;
//             }

//             if (numero % 2 === 0) {
//                 console.log("El número " + numero + " es PAR");
//                 document.getElementById("resultado").innerText = "El número " + numero + " es PAR.";
//             } else {
//                 console.log("El número " + numero + " es IMPAR");
//                 document.getElementById("resultado").innerText = "El número " + numero + " es IMPAR.";
//             }
//         }
