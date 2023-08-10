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
    document.getElementById("valMessage").innerHTML = message;
  });

  inputVal[i].addEventListener("blur", () => {
    if (change == false || email == "") labelVal[i].classList.remove("active");
  });
});

//---- Validación y mensajes del formulario de la página Login ----

const inputLoginVal = document.querySelectorAll(".login__input");
const labelLoginVal = document.querySelectorAll(".login__label");
const validationLogin = document.querySelectorAll(".login__validation");
let inputValue = ["", ""];
let inputValid = [false, false];
let changeLogin = false;
const regexNum = /^\d{4,}$/;
const regexCustom = /^[\w\d\-!@#$%^&*()_+={}[\]:;"'<>,.?\/\\|]{4,60}$/;

// ---Validando el formulario---
document.getElementById("loginBtn").onclick = (event) => {
  //evitar submit
  event.preventDefault();

  if (!(inputValid[0] && inputValid[1])) {
    inputLoginVal[0].focus();
    labelLoginVal[0].classList.add("active");

    inputLoginVal.forEach((v, i) => {
      inputLoginVal[i].classList.add("valFalse");
      validationLogin[i].classList.add("valError");
    });
  } else alert("Esta es solamente una página de practicas de Ramon Estol");
};

inputLoginVal.forEach((v, i) => {
  inputLoginVal[i].addEventListener("click", () =>
    labelLoginVal[i].classList.add("active")
  );
  inputLoginVal[i].addEventListener("change", () => {
    changeLogin = true;
    labelLoginVal[i].classList.add("active");
  });

  /// --- validation de email ---
  inputLoginVal[0].onkeyup = () => {
    inputValue[0] = inputLoginVal[0].value;
    if (regexEmail.exec(inputValue[0]) || regexNum.exec(inputValue[0])) {
      inputLoginVal[0].classList.remove("valFalse");
      validationLogin[0].classList.remove("valError");
      inputValid[0] = true;
    } else {
      inputLoginVal[0].classList.add("valFalse");
      validationLogin[0].classList.add("valError");
      inputValid[0] = false;
    }
  };

  //---- validation de pwd ---
  inputLoginVal[1].onkeyup = () => {
    inputValue[1] = inputLoginVal[1].value;
    if (regexCustom.exec(inputValue[1])) {
      inputLoginVal[1].classList.remove("valFalse");
      validationLogin[1].classList.remove("valError");
      inputValid[1] = true;
    } else {
      inputLoginVal[1].classList.add("valFalse");
      validationLogin[1].classList.add("valError");
      inputValid[1] = false;
    }
  };

  inputLoginVal[i].addEventListener("blur", () => {
    if (changeLogin == false || inputValue[i] == "")
      labelLoginVal[i].classList.remove("active");
  });
});

/// --- Learn More / activar texto extendido ---
const extendedText = document.getElementById("captchaExtendedText");

const toggleVisibility = () => {
  if (extendedText.classList.value.includes("visible"))
    extendedText.classList.remove("visible");
  else extendedText.classList.add("visible");
};

document.getElementById("learnMore").onclick = toggleVisibility;
