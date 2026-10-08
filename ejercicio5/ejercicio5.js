
//----------------------------- EJERCICIO 5 -------------------

let entrada = prompt("Ingresa un número:")

let numero = Number(entrada);

if (numero % 2 === 0){
    console.log(numero, "es un número par");
} else {
    console.log(numero, "es un número impar")
}

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
