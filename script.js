//12 - Prototype : JS

let codes = ["C2", "C8", "C1", "C3", "C1", "C9", "C1", "C7", "C1"];
let compteurs = {};

for (let i = 0; i < codes.length; i++) {
  let codeActuel = codes[i];
  if (compteurs[codeActuel]) {
    compteurs[codeActuel]++;
  } else {
    compteurs[codeActuel] = 1;
  }
}

// console.log(compteurs)

for (let code in compteurs) {
  console.log("Le code : " + code + " apparit " + compteurs[code] + " fois.");
}

