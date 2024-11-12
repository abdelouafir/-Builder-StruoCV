/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}






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
  cvmodirn.classList.remove("hidden");
  FormSkille.classList.add('hidden');
}