
//les stocker les form don les vzariabel 

// les informasion pirsonelle variabel
let FormPirsonelle = document.getElementById("FormPirsonelle");
let FirstName = document.getElementById("first-name") ;
let LastName = document.getElementById("last-name") ;
let email = document.getElementById ("email");
let city = document.getElementById ("city");
let Phone = document.getElementById ("Phone");
let BtnPrsonelNext = document.getElementById ("InfoPrsonel");//button pirsonillle next

let default_radio_1 = document.getElementById("default-radio-1");
let default_radio_2 = document.getElementById("default-radio-2");
let btnchoix = document.getElementById("CChoix");


// btnchoix.addEventListener('click',() => {
//   console.log(default_radio_1.value,default_radio_2.value)
// })
let conteur = 1 ;
let conteur1 = 1 ;
let conteur2 = 1 ;
//pronder un choix 
let Formchoix = document.getElementById("choix"); //le premer form 
let BtnChoix = document.getElementById("BtnChoix");//le button choix 
btnchoix.addEventListener('click',() => {
  // let radioselected = document.querySelector('input[name="default-radio"]:checked');
    
    Formchoix.classList.add('hidden');
    FormPirsonelle.classList.remove("hidden");
 
})

// les tablau global 
let infoexperince = [] ;
let infoscole = [];
let infoskils = [];
// BtnChoix.addEventListener('click',() => {
//     Formchoix.classList.add('hidden');
//     FormPirsonelle.classList.remove("hidden");
// })

//les expirience form
let BtnExpirienceNext = document.getElementById("btn-expieince");//button expirince next 
let FormExpirience = document.getElementById("FormExpirience"); //form expirince
let FormExpirienceadd = document.getElementById("FormExpirienceadd");
// let copyFormex =  FormExpirienceadd.cloneNode(true);
BtnPrsonelNext.addEventListener('click',() => {
    let AddWork = document.getElementById("AddWork"); // button ajoutee un new work 
    let validNome = /\w+\s\w+/;
    let Email = /\w+@gmail.com/;
    let cityV = /\w+/;
    let PhoneV = /\d{10}/
    
    let validName = validNome.test(FirstName.value);
    let validemeil = Email.test(email.value);
    let validcity = cityV.test(city.value);
    let validPhone = PhoneV.test(Phone.value)
    //les message erore 
    let messagename = document.getElementById("messagename");
    let messageemele = document.getElementById("messageemele");
    let messagecity = document.getElementById("messagecity");
    let messagephone = document.getElementById("messagephone");

    
    if( validName === false ||
      validemeil === false ||
      validcity === false ||
      validPhone === false
    ){
      if(validName === false){
        messagename.textContent = 'entrez la nome et leprinome ex (nome prenome)'
        messagename.style.color ="red";
      }
      if(validemeil === false) {
        messageemele.textContent = 'entrez la emile complit ex (nome@gmail.com)';
        messageemele.style.color = "red"
      }
      if(validcity === false){
        messagecity.textContent = 'entrez city corct'
        messagecity.style.color = 'red'
      }
      if(validPhone === false){
        messagephone.textContent = 'entre number de telephon corct (0666865432)'
        messagephone.style.color = 'red'
      }
      
    }

  else{
    FormPirsonelle.classList.add("hidden");
    FormExpirience.classList.remove("hidden");
  }
   

  //event de add neveu work expieince 
    AddWork.addEventListener('click',() => {
      conteur++ ;
      const nodoOriginal = document.getElementById("formcopy");
      const nodoClonado = nodoOriginal.cloneNode(true);
       FormExpirienceadd.appendChild(nodoClonado);
       
       
    }) 


        let Nom = document.getElementById("Nom");
        let namemodirn = document.getElementById("namemodirn");
        let gimaille = document.getElementById("gimaille");
        let telephone = document.getElementById("telephone");

        let gmailModirn = document.getElementById("gmailModirn");
        let telModirn = document.getElementById("telModirn");

        Nom.innerHTML = FirstName.value ; 
        namemodirn.innerHTML = FirstName.value;
        gimaille.innerHTML = email.value;
        gmailModirn.innerHTML = email.value;
        telephone.innerHTML = Phone.value ; 
        telModirn.innerHTML = Phone.value;   

    // console.log(FirstName.value,LastName.value,email.value,city.value,Phone.value);
})

//LES education form
let FormEtudientAdd = document.getElementById("FormEtudientAdd")
let AddNewEtudent = document.getElementById("AddNewEtudent")
let FormEtudient = document.getElementById("FormEtudient"); //form etudent 

// event next 
BtnExpirienceNext.addEventListener('click' , () => {

  let JobTitle = document.querySelectorAll(".Job-Title");
  let  Employer = document.querySelectorAll(".Employer");
  let Location = document.querySelectorAll(".Location");
  let workSom = document.querySelectorAll(".workSom");
  let StartDate = document.querySelectorAll(".Start-date");
  let EndDate = document.querySelectorAll(".End-date");
  
   
  


  let info = {}

  for (let i = 0 ; i< conteur;i++){
    infoexperince.push(info = {
      JobTitle : JobTitle[i].value,
      Employer : Employer[i].value,
      Location : Location[i].value,
      workSom : workSom[i].value,
      StartDate : StartDate[i].value,
      EndDate : EndDate[i].value,
     })
  }
  console.log(infoexperince)


  

  
  let jobjob = document = document.getElementById("jobjob") //coller
  

  for(let i = 0 ;i< conteur;i++){
  let NewWorkExpirence = document.createElement("div");
   NewWorkExpirence.innerHTML = `
   <div id="jobContent">
       <h3 id="title-job" class="text-lg font-semibold text-gray-800">${JobTitle[i].value} </h3>
       <p  id="jobex" class="text-gray-600">intitue de post ${Employer[i].value} lieu de entreperise , ${Employer[i].value},</p>
       <p  id="jobex" class="text-gray-600">De ${StartDate[i].value} a ${EndDate[i].value} </p>
       <p  id="jobex" class="text-gray-600">pendant mon travill cher ${Employer[i].value} j'ai divloppe  mes compitence en ${JobTitle[i].value}</p>
   </div>
   `
   jobjob.appendChild(NewWorkExpirence);
  }
  


  // let jobex = document.getElementById("jobex");
  // let entrepriseName= document.getElementById("entrepriseName")
  // let title_job = document.getElementById("title-job");
  // let jobModirn = document.getElementById("jobModirn");
  // let jobexpirnceMod = document.getElementById("jobexpirnceMod");
  // let dateEta = document.getElementById("date-eta");
  // let workSommm = document.getElementById("workSommm");
  
  let job = /\w+\s\w+/;
  let loc = /\w+/;
  let sommary = /\w+/;


//message erore 
let messageerorejob = document.getElementById("messageerorejob");
let Emploessage = document.getElementById("Emploessage");
let LocationMessage = document.getElementById("LocationMessage");
let wormessage = document.getElementById("wormessage")


  let validName = loc.test(JobTitle.value);
  let validemployer = loc.test(Employer.value);
  let validLocation = loc.test(Location.value);
  let validsommerwork = sommary.test(workSommm.value)

   if(validName === false || 
    validemployer === false  ||
    validLocation === false ||
    validsommerwork === false 
    // StartDate.value < 2023 ||
    // EndDate.value < StartDate
   )
    {
     if(validName === false){
      messageerorejob.textContent = 'entrer title de job corct ex (divloper wp)'
      messageerorejob.style.color = 'red';
     }
     if(validemployer === false){
      Emploessage.textContent = 'entrer un mo corict +5 carcter'
      Emploessage.style.color = 'red'
     }
     if(validLocation === false ){
      LocationMessage.textContent = 'entrer un mo corict +5 carcter'
      LocationMessage.style.color = 'red'
     }
     if(validsommerwork === false ){
      wormessage.textContent = 'entrer discrption plus 10 mos'
      wormessage.style.color = 'red'
     }
   }
   else{
    FormExpirience.classList.add("hidden");
    FormEtudient.classList.remove("hidden");
   }
  

    
    // event ajout new new etudent 
    AddNewEtudent.addEventListener('click',() => {
      const nodoOriginal = document.getElementById("FormEtudientcopy");
      const nodoClonado = nodoOriginal.cloneNode(true);
      FormEtudientAdd.appendChild(nodoClonado);
      conteur1++;

    })
    
     

    // title_job.innerHTML = JobTitle.value; 
    // jobModirn.innerHTML = JobTitle.value;
    // jobexpirnceMod.innerHTML = JobTitle.value;
    // jobex.innerHTML=`
    // ${JobTitle.value} at ${Employer.value} a ${Location.value}<br>
    // fubryari ${StartDate.value} - match ${EndDate.value}
    // `
    // entrepriseName.innerHTML = Employer.value;
    // dateEta.innerHTML = `Aug ${StartDate.value} - Present - ${EndDate.value}, ${Location.value}`
    // workSommm.innerHTML = workSom.value ;
    
    // // Emplo.innerHTML = Employer.value;
    // discr.innerHTML = workSom.value



})

// les skille form
let btnAddSkils = document.getElementById("btnAddSkils")
let BtnetudentNext = document.getElementById("BtnetudentNext"); //button etudent next  
let FormSkille = document.getElementById("FormSkille"); //form skille
let FormSkilleAdd = document.getElementById("FormSkilleAdd");
//event next
BtnetudentNext.addEventListener('click',() => {
    FormSkille.classList.remove('hidden');
    FormEtudient.classList.add("hidden");
    //event de ajout new experince
    btnAddSkils.addEventListener('click', () => {
      const nodoOriginal = document.getElementById("skillCopy");
      const nodoClonado = nodoOriginal.cloneNode(true);
      conteur2++;
      FormSkilleAdd.appendChild(nodoClonado);
       
    })
    // let etud = document.getElementById("etud");
    let SchoolName = document.querySelectorAll(".School-Name");
    let  SchoolLocation = document.querySelectorAll(".School-Location");
    let FieldOfStudy = document.querySelectorAll(".Field-of-Study");
    let StartDate = document.querySelectorAll(".start-date");
    let EndDate = document.querySelectorAll(".end-date");
    let etudDiscription = document.querySelectorAll(".etudDiscription");



  let info = {}

  for (let i = 0 ; i< conteur1;i++){
    infoscole.push(info = {
      SchoolName : SchoolName[i].value,
      SchoolLocation : SchoolLocation[i].value,
      FieldOfStudy : FieldOfStudy[i].value,
      StartDate : StartDate[i].value,
      EndDate : EndDate[i].value,
      etudDiscription : etudDiscription[i].value,
     })
  }
  console.log(StartDate.value)





  
  
  let scolsc = document = document.getElementById("scolsc") //coller
  
  console.log(conteur1);
  for(let i = 0 ;i< conteur1;i++){
  let NewWorkExpirence = document.createElement("div");
   NewWorkExpirence.innerHTML = `
     <div id="scolcoppy">
        <h3class="mt-4 text-lg font-semibold text-gray-800"> Spécialité - ${SchoolName[i].value}, ${SchoolLocation[i].value} </h3>
         <p id="etud" class="text-gray-600> De ${StartDate[i].value} à ${EndDate[i].value}</p>
         <p clsse="class="text-gray-600"> J'ai terminé mes études ${SchoolName[i].value} à  dans la spécialité ${FieldOfStudy[i].value}, ce qui m'a fourni une base solide en ${FieldOfStudy[i].value},</p>
    </div>
   `
   scolsc.appendChild(NewWorkExpirence);
  }


    // let bronch = document.getElementById("bronch");
    // let icoule = document.getElementById("icoule");
    // let stareTud = document.getElementById("stareTud");
    // let endEtud = document.getElementById("endEtud");

    //  etud.innerHTML= `
    //  <p> ${SchoolName.value} - ${SchoolLocation.value} <br> 
    //  ${FieldOfStudy.value} <br>
    //  ${StartDate.value} to ${EndDate.value} </p>
    //  `
    //  bronch.innerHTML = FieldOfStudy.value;
    //  icoule.innerHTML = SchoolLocation.value;
    //  stareTud.innerHTML = `Aug ${StartDate.value} - Present - ${EndDate.value}, ${SchoolLocation.value}` ;
    //  endEtud.innerHTML = etudDiscription.value;
     
     

    // Bachelor of Science in Computer Science
    // University of Technology - 2013 to 2017
   
})

let btnSkillNext = document.getElementById("btnSkillNext"); //button skille next 
let FormSomary = document.getElementById("FormSomary"); //form de somary
let cvmodirn = document.getElementById("cvmodirn");
btnSkillNext.addEventListener('click',() => {

  let Skill_1 = document.querySelectorAll(".Skill") ;



  let info = {}

  for (let i = 0 ; i< conteur2;i++){
    infoskils.push(info = {
      Skill_1 : Skill_1[i].value,
      
     })
  }




  let skillskill = document = document.getElementById("skilscopy") //coller
  
  console.log(conteur2);
  for(let i = 0 ;i< conteur2;i++){
  let NewWorkExpirence = document.createElement("div");
   NewWorkExpirence.innerHTML = `
    <div id="skilss">
        <ul class=" mt-4 text-gray-700">
            <li id="sk1">${Skill_1[i].value}</li>
        </ul>
     </div>
   `
   skillskill.appendChild(NewWorkExpirence);
  }

  // // let Skill_2  = document.getElementById("Skill-2");
  // // let Skill_3  = document.getElementById("Skill-3");
  // // let Skill_4  = document.getElementById("Skill-4");
  // // console.log(Skill_1.value,Skill_2.value,Skill_3.value,Skill_4.value);
  // let sk1 = document.getElementById("sk1");
  // let sk2 = document.getElementById("sk2");
  // let sk3 = document.getElementById("sk3");
  // let sk4 = document.getElementById("sk4");
  // let SK1 = document.getElementById("SK1");
  // let SK2 = document.getElementById("SK2");
  // let SK3 = document.getElementById("SK3");
  // let SK4 = document.getElementById("SK4");


  //message erore 
  let skillmessage = document.getElementById("skillmessage")
  // let skillmessage2 = document.getElementById("skillmessage2")
  // let skillmessage3= document.getElementById("skillmessage3")
  // let skillmessage4 = document.getElementById("skillmessage4")

  let loc = /\w+/;

  
  let eroreskill = loc.test(Skill_1.value);
  // let eroreskill2 = loc.test(Skill_2.value);
  // let eroreskill3 = loc.test(Skill_3.value);
  // let eroreskill4 = loc.test(Skill_4.value)
 
  let radioselected = document.querySelector('input[name="default-radio"]:checked');
 if(radioselected.value === 'clasic'){
  if( eroreskill === false 
    // eroreskill2 === false ||
    // eroreskill3 === false ||
    // eroreskill4 === false
    
  ){
    if(eroreskill === false){
      skillmessage.textContent ='entrez cette skille en corict'
      skillmessage.style.color = 'red'
    }
    // if( eroreskill2 === false ){
    //   skillmessage2.textContent ='entrez cette skille en corict'
    //   skillmessage2.style.color = 'red'
    // }
    // if( eroreskill3 === false ){
    //   skillmessage3.textContent ='entrez cette skille en corict'
    //   skillmessage3.style.color = 'red'
    // }
    // if(eroreskill4 === false){
    //   skillmessage4.textContent ='entrez cette skille en corict'
    //   skillmessage4.style.color = 'red'
    // }

  }
  else{
    FormSomary.classList.remove("hidden");
    FormSkille.classList.add('hidden');}
}
else if (radioselected.value === 'modirn'){
  if( eroreskill === false 
    
    
  ){
    if(eroreskill === false){
      skillmessage.textContent ='entrez cette skille en corict'
      skillmessage.style.color = 'red'
    }
    // if( eroreskill2 === false ){
    //   skillmessage2.textContent ='entrez cette skille en corict'
    //   skillmessage2.style.color = 'red'
    // }
    // if( eroreskill3 === false ){
    //   skillmessage3.textContent ='entrez cette skille en corict'
    //   skillmessage3.style.color = 'red'
    // }
    // if(eroreskill4 === false){
    //   skillmessage4.textContent ='entrez cette skille en corict'
    //   skillmessage4.style.color = 'red'
    // }

  }
  else{
    cvmodirn.classList.remove("hidden");
    FormSkille.classList.add('hidden');;}
 
}



  

  sk1.innerHTML = Skill_1.value;
  // sk2.innerHTML = Skill_2.value;
  // sk3.innerHTML = Skill_3.value;
  // sk4.innerHTML = Skill_4.value;

    let btndwlond = document.getElementById("btndwlond");
    let btndwlondclss = document.getElementById("btndwlondclss")




    btndwlondclss.addEventListener('click', async function () {
        const content = document.getElementById('cvmodirn'); 
        const filename = 'my-cv.pdf';
    
        const options = {
            margin: 1,
            filename: filename,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        try {
            await html2pdf().set(options).from(content).save();
        } catch (error) {
            console.error('false:', error.message);
        }
    });


    btndwlond.addEventListener('click', async function () {
      const content = document.getElementById('FormSomary'); 
      const filename = 'my-cv.pdf';
  
      const options = {
          margin: 1,
          filename: filename,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      try {
          await html2pdf().set(options).from(content).save();
      } catch (error) {
          console.error('false:', error.message);
      }
  });
})





