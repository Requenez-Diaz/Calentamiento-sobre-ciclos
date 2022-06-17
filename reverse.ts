let Word = "AcurrucA";

if (Word == Word.split("").reverse().join("")) {
  console.log("Palabra de atras adelante o vicebersa: ", Word, ": Es correcta");
} else {
  console.log(
    "La palabra que escribio no es la misma alreves : " + Word,
    ": Verifique su escritura😎"
  );
}
