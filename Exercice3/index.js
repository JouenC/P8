// Créez votre fonction ici

function calculateAverage(tableau) {
    if(!tableau || tableau.length === 0) {
      return "No numbers to calculate average"
    } else {
      let somme = 0;
    tableau.forEach((number) =>
      somme += number);
    return somme / tableau.length;
    }
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
