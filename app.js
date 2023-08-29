//---- Control del idioma del navegador del cliente ----
/*
window.onload = function () {

    var ln = navigator.language || navigator.userLanguage;
    // Validar que no se encuentre en la pagina correspondiente a su idioma 
    let pagActual = window.location.pathname;

    console.log(ln,pagActual)
    
    if (ln == ('en-US'||'en-EN') && !pagActual.includes("en/index.html"))
        window.location.href = 'en/index.html';  

}
*/

// ---- Selección de idioma ----
const selectLang = document.querySelectorAll(".lang__select");

selectLang.forEach((v, i) => {
  selectLang[i].addEventListener("change", () => {
    console.log(selectLang[i].value);
    if (selectLang[i].value == "es-ES") window.location.href = "../index.html";
    else if (selectLang[i].value == "en-EN")
      window.location.href = "en/index.html";
  });
});

//---- Control del acordeón de FAQ ----

const btnFaq = document.querySelectorAll(".faq__btn");
const liFaq = document.querySelectorAll(".faq__li");

btnFaq.forEach((v, i) => {
  btnFaq[i].addEventListener("click", () => {
    if (liFaq[i].classList.value == "faq__li active")
      liFaq[i].classList.remove("active");
    else {
      liFaq.forEach((v, i) => liFaq[i].classList.remove("active"));
      liFaq[i].classList.add("active");
    }
  });
});

//---- Validación y mensajes del input de registro ----

const inputVal = document.querySelectorAll(".register__input");
const labelVal = document.querySelectorAll(".register__label");
const validation = document.querySelectorAll(".register__validation");
const btnVal = document.querySelectorAll(".register__btn");
const valMessage= document.querySelectorAll(".register__valMessage");

let email = "";
let change = false;
const regexEmail = /^([\da-zA-Z_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/;

btnVal.forEach((v, i) => {
  btnVal[i].addEventListener("click", (event) => {
    event.preventDefault();
    !/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.exec(email)
      ? inputVal[i].focus()
      : alert("Esta es solamente una página de practicas de Ramon Estol");
    labelVal[i].classList.add("active");
  });
});

inputVal.forEach((v, i) => {
  inputVal[i].addEventListener("click", () =>
    labelVal[i].classList.add("active")
  );

  inputVal[i].addEventListener("change", () => {
    change = true;
    labelVal[i].classList.add("active");
  });

  inputVal[i].addEventListener("keyup", () => {
    email = inputVal[i].value;
    if (/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.exec(email)) {
      inputVal[i].classList.add("valTrue");
      inputVal[i].classList.remove("valFalse");
      validation[i].classList.remove("valError");
    } else {
      inputVal[i].classList.add("valFalse");
      inputVal[i].classList.remove("valTrue");
      validation[i].classList.add("valError");
    }
    let message =
      email == ""
        ? "La dirección de correo es obligatoria."
        : "Escribe una dirección válida de correo electrónico.";
    valMessage[i].innerHTML = message;
  });

  inputVal[i].addEventListener("blur", () => {
    if (change == false || email == "") labelVal[i].classList.remove("active");
  });
});
