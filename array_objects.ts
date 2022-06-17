var Personas = [
  { nombre: "Pedro", sexo: "M" },
  { nombre: "Josseling", sexo: "F" },
  { nombre: "Jose", sexo: "M" },
  { nombre: "Juana", sexo: "F" },
];

var newPersonas = [];
for (var i = 0; i < Personas.length; i++) {
  if (Personas[i].sexo == "M") {
    newPersonas.push({ nombre: "Sr. " + Personas[i].nombre });
  } else {
    newPersonas.push({ nombre: "Srta. " + Personas[i].nombre });
  }
}

console.log("Mi arreglo", Personas);
console.log("New Array", newPersonas);
