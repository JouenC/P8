const affichage = document.getElementById("decimalInput");
const resultat = document.getElementById("binaryResult");

function convertToBinary() {
  let decimal = parseInt(affichage.value);
  let binary = decimal.toString(2);
  resultat.innerHTML = "Le nombre binaire est : " + binary;
}