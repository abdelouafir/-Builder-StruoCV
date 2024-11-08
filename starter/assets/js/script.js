
//les stocker les form don les vzariabel 

// les informasion pirsonelle 
let FormPirsonelle = document.getElementById("FormPirsonelle");
let FirstName = document.getElementById("first-name") ;
let LastName = document.getElementById("last-name") ;
let email = document.getElementById ("email");
let city = document.getElementById ("city");
let Phone = document.getElementById ("Phone");
let BtnPrsonelNext = document.getElementById ("InfoPrsonel");//button pirsonillle next

//les expirience 
BtnExpirienceNext = document.getElementById("btn-expieince");//button expirince next 
let FormExpirience = document.getElementById("FormExpirience"); //form expirince
BtnPrsonelNext.addEventListener('click',() => {
    FormPirsonelle.classList.add("hidden");
    FormExpirience.classList.remove("hidden");
})

let FormEtudient = document.getElementById("FormEtudient"); //form etudent 
BtnExpirienceNext.addEventListener('click' , () => {
    FormExpirience.classList.add("hidden");
    FormEtudient.classList.remove("hidden");
})

let BtnetudentNext = document.getElementById("BtnetudentNext"); //button etudent next  
let FormSkille = document.getElementById("FormSkille"); //form skille
BtnetudentNext.addEventListener('click',() => {
    FormSkille.classList.remove('hidden');
    FormEtudient.classList.add("hidden")
})

// let btnSkillNext = document.getElementById("btnSkillNext"); //button skille next 
// let FormSomary = document.getElementById("FormSomary"); //form de somary
// btnSkillNext.addEventListener('click',() => {
//     FormSomary.classList.remove('hidden');
//     FormSkille.classList.add('hidden');
// })