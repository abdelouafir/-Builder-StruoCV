
//les stocker les form don les vzariabel 

// les informasion pirsonelle variabel
let FormPirsonelle = document.getElementById("FormPirsonelle");
let FirstName = document.getElementById("first-name") ;
let LastName = document.getElementById("last-name") ;
let email = document.getElementById ("email");
let city = document.getElementById ("city");
let Phone = document.getElementById ("Phone");
let BtnPrsonelNext = document.getElementById ("InfoPrsonel");//button pirsonillle next


//pronder un choix 
let Formchoix = document.getElementById("choix"); //le premer form 
let BtnChoix = document.getElementById("BtnChoix");//le button choix 
BtnChoix.addEventListener('click',() => {
    Formchoix.classList.add('hidden');
    FormPirsonelle.classList.remove("hidden");
})

//les expirience form

BtnExpirienceNext = document.getElementById("btn-expieince");//button expirince next 
let FormExpirience = document.getElementById("FormExpirience"); //form expirince
let FormExpirienceadd = document.getElementById("FormExpirienceadd")
BtnPrsonelNext.addEventListener('click',() => {
    let AddWork = document.getElementById("AddWork"); // button ajoutee un new work 
    FormPirsonelle.classList.add("hidden");
    FormExpirience.classList.remove("hidden");
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
        FormExpirienceadd.appendChild(NewWorkExpirence)
    }) 
})

//LES education form
let FormEtudientAdd = document.getElementById("FormEtudientAdd")
let AddNewEtudent = document.getElementById("AddNewEtudent")
let FormEtudient = document.getElementById("FormEtudient"); //form etudent 
BtnExpirienceNext.addEventListener('click' , () => {
    FormExpirience.classList.add("hidden");
    FormEtudient.classList.remove("hidden");
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

})

// les skille form
let btnAddSkils = document.getElementById("btnAddSkils")
let BtnetudentNext = document.getElementById("BtnetudentNext"); //button etudent next  
let FormSkille = document.getElementById("FormSkille"); //form skille
let FormSkilleAdd = document.getElementById("FormSkilleAdd");
BtnetudentNext.addEventListener('click',() => {
    FormSkille.classList.remove('hidden');
    FormEtudient.classList.add("hidden")
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
})

// let btnSkillNext = document.getElementById("btnSkillNext"); //button skille next 
// let FormSomary = document.getElementById("FormSomary"); //form de somary
// btnSkillNext.addEventListener('click',() => {
//     FormSomary.classList.remove('hidden');
//     FormSkille.classList.add('hidden');
// })



