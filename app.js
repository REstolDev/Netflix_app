// function active(divId){
//     const arr = ['1','2','3','4','5'];
//     for (var i=0; i < arr.length; i++){
//         let divElem = document.getElementById(arr[i]);
//         if (divId == arr[i]){
//             divElem.classList.add('active')
//         }
//         else{
//             divElem.classList.remove('active')
//         }
//     }
// }

const btn = document.querySelectorAll('.faq__btn');
const li = document.querySelectorAll('.faq__li');

btn.forEach( (v , i) => {
    btn[i].addEventListener( 'click',()=>{

        if(li[i].classList.value=='faq__li active') 
            li[i].classList.remove('active');
        else{
            li.forEach((v,i)=> li[i].classList.remove('active'));
            li[i].classList.add('active');
            }
        })  
    })


const input = document.querySelectorAll('.register__input');
const label = document.querySelectorAll('.register__label');
let change = false;
console.log(change);
    btn.forEach((v , i) => btn[i].addEventListener( 'click',()=>label.classList.add('active')));

    input.forEach( (v , i) => {

        input[i].addEventListener( 'click',()=>label[i].classList.add('active'));
        input[i].addEventListener( 'change',()=>{

            change=true;
            console.log(change);
            label[i].classList.add('active')

        });
        console.log(change);
        
        input[i].addEventListener( 'blur',()=>{

            if(change==false)
                label[i].classList.remove('active')

            });

    })
