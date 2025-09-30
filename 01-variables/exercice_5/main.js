// Exercice 5
// Écrivez votre code ici

// Définir la fonction
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Tester avec une valeur fixe
let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(celsius + "°C équivaut à " + celsiusToFahrenheit(celsius) + "°F");

// Exporter la fonction pour les tests
module.exports = {celsiusToFahrenheit};