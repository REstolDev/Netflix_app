const btnFaq = document.querySelectorAll('.faq__btn');
const liFaq = document.querySelectorAll('.faq__li');

btnFaq.forEach( (v , i) => {
    btnFaq[i].addEventListener( 'click',()=>{

        if(liFaq[i].classList.value=='faq__li active') 
            liFaq[i].classList.remove('active');
        else{
            liFaq.forEach((v,i)=> liFaq[i].classList.remove('active'));
            liFaq[i].classList.add('active');
            }
        })  
    })


const inputVal = document.querySelectorAll('.register__input');
const labelVal = document.querySelectorAll('.register__label');
const validation = document.querySelectorAll('.register__validation');
const btnVal = document.querySelectorAll('.register__btn');
let email='';
let change = false;

btnVal.forEach( (v , i) => {
    btnVal[i].addEventListener( 'click',()=>{

        if(/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.exec(email)) inputVal[i].focus();

        })  
    })

inputVal.forEach( (v , i) => {
    inputVal[i].addEventListener( 'click',()=>labelVal[i].classList.add('active'));
    
    inputVal[i].addEventListener( 'change',()=>{
        
        change=true;
        labeVal[i].classList.add('active');
        
    });
        
    inputVal[i].addEventListener( 'keyup',()=>{
        email= inputVal[i].value;
         if (/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.exec(email)){
             inputVal[i].classList.add('valTrue');
             inputVal[i].classList.remove('valFalse');
             validation[i].classList.remove('valError');
         } else {
             inputVal[i].classList.add('valFalse');
             inputVal[i].classList.remove('valTrue');
             validation[i].classList.add('valError');
         }
        let message = email=="" ? 'La dirección de correo es obligatoria.' : 'Escribe una dirección válida de correo electrónico.';
        document.getElementById('valMessage').innerHTML = message;
    });
    
    inputVal[i].addEventListener( 'blur',()=>{
        if(change==false)
            labelVal[i].classList.remove('active');
        });
        
});