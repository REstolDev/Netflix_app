

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


//---- Validación y mensajes del formulario de la página Login ----

const inputLoginVal = document.querySelectorAll(".login__input");
const labelLoginVal = document.querySelectorAll(".login__label");
const validationLogin = document.querySelectorAll(".login__validation");
let inputValue = ["", ""];
let inputValid = [false, false];
let changeLogin = false;

const regexNum = /^\d{4,}$/;
const regexCustom = /^[\w\d\-!@#$%^&*()_+={}[\]:;"'<>,.?\/\\|]{4,60}$/;
const regexEmail = /^([\da-zA-Z_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/;

// ---Validando el formulario---
document.getElementById("loginBtn").onclick = (event) => {
  //evitar submit
  event.preventDefault();

  //
  if (!(inputValid[0] && inputValid[1])) {
    inputLoginVal[0].focus();
    labelLoginVal[0].classList.add("active");

    inputLoginVal.forEach((v, i) => {
      inputLoginVal[i].classList.add("valFalse");
      validationLogin[i].classList.add("valError");
    });
  } else alert("Esta es solamente una página de practicas de Ramon Estol");
};

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

  //---- control del desplazamiento del label ----
  inputLoginVal.forEach((v, i) => {
    inputLoginVal[i].addEventListener("click", () =>
      labelLoginVal[i].classList.add("active")
    );
    inputLoginVal[i].addEventListener("change", () => {
      changeLogin = true;
      labelLoginVal[i].classList.add("active");
    });

  inputLoginVal[i].addEventListener("blur", () => {
    if (!changeLogin || inputValue[i] == "")
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
