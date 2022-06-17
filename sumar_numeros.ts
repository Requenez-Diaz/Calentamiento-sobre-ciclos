let misNumeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let valores = 0;

for (let i = 0; i < misNumeros.length; i++) {
  valores += misNumeros[i];
}
console.log("La suma de mi array es : " + valores);
console.log("Mi arreglo", misNumeros);
//Valores Filtrados

const valoresFiltrados = misNumeros.filter(
  (valorActual: number, index: number, array: number[]) => {
    if (valorActual > 4) {
      return true;
    }
  }
);
console.log("valores filtrados", valoresFiltrados);

console.log(""); //Espacio
//Segunda filtracion

const nextFilter = misNumeros.filter(
  (valorActual: number, index: number, array: number[]) => {
    if (valorActual < 4) {
      return true;
    }
  }
);
console.log("valores filtrados menores de valorActual", nextFilter);
console.log("");

//Ejercicio sumatoria de arreglo y el primer filtrado
for (let i = 0; i < valoresFiltrados.length; i++) {
  valores += valoresFiltrados[i];
}
console.log(
  "La sumatoria del arreglo uno y los valores filtrados es  : " + valores
);
