let result = 0;

let affichage = document.getElementById("display");

function appendToDisplay(value) {
  affichage.value += value
}

function clearDisplay() {
  affichage.value = "";
}

function calculateResult() {
  result = eval(affichage.value);
  affichage.value = result
}