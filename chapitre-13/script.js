let autoformations = [
    {name:"HTML", code:"C1"},
    {name:"CSS", code:"C2"},
    {name:"JAVA SCRIPT", code:"C3"},
    {name:"PHP", code:"C4"},
    {name:"NEXT.JS", code:"C5"},
    {name:"MySQL", code:"C6"},
    {name:"PHP", code:"C7"},
    {name:"C++", code:"C8"}
];

//compteur des bonne reponse
let score = 0;

//Nomber total des questions
const totalQuestions = autoformations.length;

//Boucle pour poser chaque question
for(let i = 0; i < totalQuestions; i++) {   
    let question = autoformations[i];
    //Domander une reponse
    let reponse = prompt(`Quelle est la competence de : ${question.name} ? `);

    //Verifier la reponse
    if (reponse && reponse.toUpperCase() === question.code) {
        alert("✅ Bonne reponse!");
        score++;
    } else {
        alert("❌ Mouvais reponse. la bonne reponse est : " + question.code);
    }
}
 alert("🎯 Ton score final est : " + score + "/" + totalQuestions);
