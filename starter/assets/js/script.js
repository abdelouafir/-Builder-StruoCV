
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

//pronder un choix 
let Formchoix = document.getElementById("choix"); //le premer form 
let BtnChoix = document.getElementById("BtnChoix");//le button choix 
btnchoix.addEventListener('click',() => {
  // let radioselected = document.querySelector('input[name="default-radio"]:checked');
    
    Formchoix.classList.add('hidden');
    FormPirsonelle.classList.remove("hidden");
 
})


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
   
    AddWork.addEventListener('click',() => {
        let NewWorkExpirence = document.createElement("div");
        NewWorkExpirence.classList.add("new-expirence");
        NewWorkExpirence.innerHTML = `
        <div class="space-y-12 ">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base/7 font-semibold text-gray-900 text-center">Tell us about your experience</h2>
        <p class="mt-1 text-sm/6 text-gray-600 text-center">Start with your most recent experience and work backward.</p>
  
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="Job-Title" class="block text-sm/6 font-medium text-gray-900">Job Title</label>
            <div class="mt-2">
              <input type="text" name="Job-Title" id="Job-Title" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm/6">
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <label for="Employer" class="block text-sm/6 font-medium text-gray-900">Employer</label>
            <div class="mt-2">
              <input type="text" name="Employer" id="Employer" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm/6">
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <label for="Location" class="block text-sm/6 font-medium text-gray-900">Location</label>
            <div class="mt-2">
              <input id="Location" name="Location" type="Location" autocomplete="Location" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm/6">
            </div>
          </div>
  
          <div class="sm:col-span-2 ">
            <label for="Start-date" class="block text-sm/6 font-medium text-gray-900">Start date</label>
            <div class="mt-2">
              <input type="date" name="Start-date" id="Start-date" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm/6">
            </div>
          </div>
          <div class="sm:col-span-1">
            <label for="End-date" class="block text-sm/6 font-medium text-gray-900">End date</label>
            <div class="mt-2">
              <input type="date" name="End-date" id="End-date" autocomplete="End-date" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm/6">
            </div>
          </div>
  
          <div class="sm:col-span-6">
            <label for="Work-Summary" class="block text-sm/6 font-medium text-gray-900">Work Summary</label>
            <div class="mt-2">
              <textarea class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" name="End-date" id="Work-Summary" autocomplete="End-date" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"> hello</textarea> 
            </div>
          </div>
        </div>
      </div>
    </div>
        `
        FormExpirienceadd.appendChild(NewWorkExpirence);
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
BtnExpirienceNext.addEventListener('click' , () => {


  let JobTitle = document.getElementById("Job-Title");
  let  Employer = document.getElementById("Employer");
  let Location = document.getElementById("Location");
  let workSom = document.getElementById("workSom");
  let StartDate = document.getElementById("Start-date");
  let EndDate = document.getElementById("End-date");
  
  let jobex = document.getElementById("jobex");
  let entrepriseName= document.getElementById("entrepriseName")
  let title_job = document.getElementById("title-job");
  let jobModirn = document.getElementById("jobModirn");
  let jobexpirnceMod = document.getElementById("jobexpirnceMod");
  let dateEta = document.getElementById("date-eta");
  let workSommm = document.getElementById("workSommm");
    
  let job = /\w+\s\w+/;
  let loc = /\w+/;
  let sommary = /\w+/


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
  

    
  
    AddNewEtudent.addEventListener('click',() => {
        let NewEtudent = document.createElement('div');
        NewEtudent.classList.add("NewEtuden")
        NewEtudent.innerHTML = `
        <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base/7 font-semibold text-gray-900 text-center">Tell us about your education</h2>
            <p class="mt-1 text-sm/6 text-gray-600 text-center">Enter your education experience so far, even if you have not graduated</p>
      
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label for="School-Name" class="block text-sm/6 font-medium text-gray-900">School Name </label>
                <div class="mt-2">
                  <input type="text" name="School-Name" id="School-Name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm/6">
                </div>
              </div>
      
              <div class="sm:col-span-3">
                <label for="School-Location" class="block text-sm/6 font-medium text-gray-900">School Location</label>
                <div class="mt-2">
                  <input type="text" name="School-Location" id="School-Location" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm/6">
                </div>
              </div>
      
              <div class="sm:col-span-3">
                <label for="Degree" class="block text-sm/6 font-medium text-gray-900">Degree</label>
                <div class="mt-2">
                  <input id="Degree" name="Degree" type="Degree" autocomplete="Degree" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm/6">
                </div>
              </div>
  
              <div class="sm:col-span-3">
                <label for="Field-of-Study" class="block text-sm/6 font-medium text-gray-900">Field of Study</label>
                <div class="mt-2">
                  <input id="Field-of-Study" name="Field-of-Study" type="Field-of-Study" autocomplete="Field-of-Study" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm/6">
                </div>
              </div>
      
              <div class="sm:col-span-2 ">
                <label for="Start-date" class="block text-sm/6 font-medium text-gray-900">Start date</label>
                <div class="mt-2">
                  <input type="date" name="Start-date" id="Start-date" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm/6">
                </div>
              </div>
      
              <div class="sm:col-span-1">
                <label for="End-date" class="block text-sm/6 font-medium text-gray-900">End date</label>
                <div class="mt-2">
                  <input type="date" name="End-date" id="End-date" autocomplete="End-date" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm/6">
                </div>
              </div>
  
              <div class="sm:col-span-6">
                <label for="Work-Summary" class="block text-sm/6 font-medium text-gray-900">Description</label>
                <div class="mt-2">
                  <textarea class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" name="End-date" id="Work-Summary" autocomplete="End-date" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"> </textarea> 
                </div>
              </div>
            </div>
          </div>
        `

        FormEtudientAdd.appendChild(NewEtudent)
    })
   



    title_job.innerHTML = JobTitle.value; 
    jobModirn.innerHTML = JobTitle.value;
    jobexpirnceMod.innerHTML = JobTitle.value;
    jobex.innerHTML=`
    ${JobTitle.value} at ${Employer.value} a ${Location.value}<br>
    fubryari ${StartDate.value} - match ${EndDate.value}
    `
    entrepriseName.innerHTML = Employer.value;
    dateEta.innerHTML = `Aug ${StartDate.value} - Present - ${EndDate.value}, ${Location.value}`
    workSommm.innerHTML = workSom.value ;
    
    // // Emplo.innerHTML = Employer.value;
    // discr.innerHTML = workSom.value


    console.log(workSom.value);
})

// les skille form
let btnAddSkils = document.getElementById("btnAddSkils")
let BtnetudentNext = document.getElementById("BtnetudentNext"); //button etudent next  
let FormSkille = document.getElementById("FormSkille"); //form skille
let FormSkilleAdd = document.getElementById("FormSkilleAdd");
BtnetudentNext.addEventListener('click',() => {
    FormSkille.classList.remove('hidden');
    FormEtudient.classList.add("hidden");
    btnAddSkils.addEventListener('click', () => {
        let newSkils = document.createElement('div');
        newSkils.classList.add("newSkils");
        newSkils.innerHTML = `
        <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base/7 font-semibold text-gray-900 text-center">What skills would you like to highlight?</h2>
        <p class="mt-1 text-sm/6 text-gray-600 text-center">Add relevant professional skills</p>
  
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="Skill-1" class="block text-sm/6 font-medium text-gray-900">Skill 1 </label>
            <div class="mt-2">
              <input type="text" name="Skill-1" id="Skill-1" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm/6">
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <label for="Skill-2" class="block text-sm/6 font-medium text-gray-900">Skill 2</label>
            <div class="mt-2">
              <input type="text" name="Skill-2" id="Skill-2" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm/6">
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <label for="Skill-3" class="block text-sm/6 font-medium text-gray-900">Skill 3</label>
            <div class="mt-2">
              <input type="text" name="Skill-3" id="Skill-3" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm/6">
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <label for="Skill-4" class="block text-sm/6 font-medium text-gray-900">Skill 4</label>
            <div class="mt-2">
              <input type="text" name="Skill-4" id="Skill-4" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm/6">
            </div>
          </div>
      </div>
    </div>
        `
        FormSkilleAdd.appendChild(newSkils)
    })
    let etud = document.getElementById("etud");
    let SchoolName = document.getElementById("School-Name");
    let  SchoolLocation = document.getElementById("School-Location");
    let FieldOfStudy = document.getElementById("Field-of-Study");
    let StartDate = document.getElementById("Start-date");
    let EndDate = document.getElementById("End-date");
    let etudDiscription = document.getElementById("etudDiscription")


    let bronch = document.getElementById("bronch");
    let icoule = document.getElementById("icoule");
    let stareTud = document.getElementById("stareTud");
    let endEtud = document.getElementById("endEtud");

     etud.innerHTML= `
     <p> ${SchoolName.value} - ${SchoolLocation.value} <br> 
     ${FieldOfStudy.value} <br>
     ${StartDate.value} to ${EndDate.value} </p>
     `
     bronch.innerHTML = FieldOfStudy.value;
     icoule.innerHTML = SchoolLocation.value;
     stareTud.innerHTML = `Aug ${StartDate.value} - Present - ${EndDate.value}, ${SchoolLocation.value}` ;
     endEtud.innerHTML = etudDiscription.value;
     
     

    // Bachelor of Science in Computer Science
    // University of Technology - 2013 to 2017
   
})

let btnSkillNext = document.getElementById("btnSkillNext"); //button skille next 
let FormSomary = document.getElementById("FormSomary"); //form de somary
let cvmodirn = document.getElementById("cvmodirn");
btnSkillNext.addEventListener('click',() => {

  let Skill_1 = document.getElementById("Skill-1") ;
  let Skill_2  = document.getElementById("Skill-2");
  let Skill_3  = document.getElementById("Skill-3");
  let Skill_4  = document.getElementById("Skill-4");
  // console.log(Skill_1.value,Skill_2.value,Skill_3.value,Skill_4.value);
  let sk1 = document.getElementById("sk1");
  let sk2 = document.getElementById("sk2");
  let sk3 = document.getElementById("sk3");
  let sk4 = document.getElementById("sk4");

  let SK1 = document.getElementById("SK1");
  let SK2 = document.getElementById("SK2");
  let SK3 = document.getElementById("SK3");
  let SK4 = document.getElementById("SK4");


  //message erore 
  let skillmessage = document.getElementById("skillmessage")
  let skillmessage2 = document.getElementById("skillmessage2")
  let skillmessage3= document.getElementById("skillmessage3")
  let skillmessage4 = document.getElementById("skillmessage4")

  let loc = /\w+/;

  
  let eroreskill = loc.test(Skill_1.value);
  let eroreskill2 = loc.test(Skill_2.value);
  let eroreskill3 = loc.test(Skill_3.value);
  let eroreskill4 = loc.test(Skill_4.value)
 
  let radioselected = document.querySelector('input[name="default-radio"]:checked');
 if(radioselected.value === 'clasic'){
  if( eroreskill === false ||
    eroreskill2 === false ||
    eroreskill3 === false ||
    eroreskill4 === false
    
  ){
    if(eroreskill === false){
      skillmessage.textContent ='entrez cette skille en corict'
      skillmessage.style.color = 'red'
    }
    if( eroreskill2 === false ){
      skillmessage2.textContent ='entrez cette skille en corict'
      skillmessage2.style.color = 'red'
    }
    if( eroreskill3 === false ){
      skillmessage3.textContent ='entrez cette skille en corict'
      skillmessage3.style.color = 'red'
    }
    if(eroreskill4 === false){
      skillmessage4.textContent ='entrez cette skille en corict'
      skillmessage4.style.color = 'red'
    }

  }
  else{
    FormSomary.classList.remove("hidden");
    FormSkille.classList.add('hidden');}
}
else if (radioselected.value === 'modirn'){
  if( eroreskill === false ||
    eroreskill2 === false ||
    eroreskill3 === false ||
    eroreskill4 === false
    
  ){
    if(eroreskill === false){
      skillmessage.textContent ='entrez cette skille en corict'
      skillmessage.style.color = 'red'
    }
    if( eroreskill2 === false ){
      skillmessage2.textContent ='entrez cette skille en corict'
      skillmessage2.style.color = 'red'
    }
    if( eroreskill3 === false ){
      skillmessage3.textContent ='entrez cette skille en corict'
      skillmessage3.style.color = 'red'
    }
    if(eroreskill4 === false){
      skillmessage4.textContent ='entrez cette skille en corict'
      skillmessage4.style.color = 'red'
    }

  }
  else{
    cvmodirn.classList.remove("hidden");
    FormSkille.classList.add('hidden');;}
 
}



  

  sk1.innerHTML = Skill_1.value;
  sk2.innerHTML = Skill_2.value;
  sk3.innerHTML = Skill_3.value;
  sk4.innerHTML = Skill_4.value;

  SK1.innerHTML = Skill_1.value;
  // SK2.innerHTML = Skill_2.value;
  SK3.innerHTML = Skill_3.value;
  SK4.innerHTML = Skill_4.value;


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




