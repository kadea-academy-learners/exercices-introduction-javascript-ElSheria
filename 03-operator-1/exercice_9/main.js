// Exercice 9
// Écrivez votre code ici


let maison = 60000000;
let terrains = 40000000;
let liquidites = 20000000;

let heritageTotal = 120000000;

let partEnfants = heritageTotal * 0.75;
let nbPartsEnfants = 3;
let partParEnfant = partEnfants / nbPartsEnfants;

let paul = partParEnfant;
let marie = partParEnfant;
let eric = partParEnfant / 2;
let clair = partParEnfant / 2;

let partConjointEtFreres = heritageTotal * 0.25;
let nbPartsDeuxiemeCat = 3;

let madameMukuna = partConjointEtFreres / nbPartsDeuxiemeCat;
let joseph = partConjointEtFreres / nbPartsDeuxiemeCat;
let sarah = partConjointEtFreres / nbPartsDeuxiemeCat;


console.log("Répartition de l'héritage :");
console.log("Paul :", paul, "CDF");
console.log("Marie :", marie, "CDF");
console.log("Éric :", eric, "CDF");
console.log("Claire :", clair, "CDF");
console.log("Madame MUKUNA :", madameMukuna, "CDF");
console.log("Joseph :", joseph, "CDF");
console.log("Sarah :", sarah, "CDF");

module.exports = { paul, marie, eric, clair, madameMukuna, joseph, sarah };