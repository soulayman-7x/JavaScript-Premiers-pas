
let autoformation = [
    {name: "1.1 - comprendre le maquettage", code: "C1"},
    {name: "2.1 - Structurer le HTML", code: "C2"},
    {name: "2.2 - Styliser avec CSS", code: "C2"},
    {name: "3.1 - JavaScript premiers pas", code: "C3"},
    {name: "4.1 - Demarrer avec WordPress", code: "C4"},
    {name: "5.1 - Consevoir une base relationnele", code: "C5"},
    {name: "6.1 - Connecter une aplication a une base de donnees", code: "C6"},
    {name: "7.1 - Bases et logique PHP", code: "C7"},
    {name: "8.1 - Decouvrir React", code: "C8"}
];

//compteur de bonne reponse
let score = 0;

//Nombre total des qustions
let totalQuestions = autoformation.length;

//boucle pour poser chaque qustion
for (let i = 0; i < totalQuestions; i++) {
    let qustion = autoformation[i];
    let reponse = prompt(`Quelle est la competence de : ${qustion.name} ?`);

    // virefication de reponse
    if (reponse && reponse.toUpperCase() === qustion.code) {
        alert("✅ Bonne reponse!");
        score++;
    } else {
        alert("❌ Mouvise reponse. la bonne reponse est : " + qustion.code);
    }
}
alert("🎯 Ton score final est : " + score + "/" + totalQuestions);