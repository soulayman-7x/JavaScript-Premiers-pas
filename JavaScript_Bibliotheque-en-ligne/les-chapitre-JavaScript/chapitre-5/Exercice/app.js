let livres = [
    {titre: "JavaScript livre", auteur:"ahmed", prix:40},
    {titre: "Apprendre le HTML & CSS", auteur:"imane", prix:130},
    {titre: "la logique de programmation", auteur:"Omar id", prix:35},
    {titre: "Introdaction a python", auteur:"Sara amina", prix:120},
    {titre: "Introdaction a Algorithmique", auteur:"ali omar", prix:80},
];

// Affiche la liste complète
console.log("######## La liste complète ===>")
livres.forEach(livre => {
    console.log("livre nome : " + livre.titre + " | Auteur : " + livre.auteur + " | Prix : " + livre.prix);
});

// Affiche uniquement les titres des livres
console.log("######## les titres des livres ===>")
livres.forEach(livre => {
    console.log(livre.titre)
})

// Total prix
let total = 0;
livres.forEach(livre => {
    total += livre.prix;
})
console.log(" ####### Le total est : " + total);

//  les livres dont le prix est supérieur à 100 DH
let LivresVedette = [];

console.log(" ### les livres dont le prix est supérieur à 100 DH : ");

for(let i = 0; i < livres.length; i++) {
    let L = livres[i];
    if (L.prix >= 100) {
        LivresVedette.push(L);
    }
}
console.log(LivresVedette)

// ajoute un nouveau livre dans le tableau à l’aide de push().
livres.push({titre: "Introdaction a PHP", auteur:"issam", prix:280});
console.log(livres)