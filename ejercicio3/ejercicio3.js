
//----------------------------- EJERCICIO 3 ------------------------

let persona = {
  nombre: "Carlos",
  
  edad: 25,
  
  estaEmpleado: true,
  
  aficiones: ["lectura", "fútbol", "programación"],
  
  direccion: {
    ciudad: "Madrid",
    codigoPostal: 28001
  }
};

console.log("--- Salida con console.log ---");
console.log(persona);

console.log("--- Salida con console.table ---");
console.table(persona);