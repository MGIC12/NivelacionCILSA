const nombre = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const birthday = document.getElementById("birthday");
const country = document.getElementById("country");
const parrafo = document.getElementById("parrafo");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let warnings = "";
  let validation = false;

  // Validación de campos
  if (
    nombre.value === "" &&
    surname.value === "" &&
    email.value === "" &&
    birthday.value === "" &&
    country.value === ""
  ) {
    warnings += "Todos los campos son obligatorios <br>";
    nombre.style.border = "1px solid red";
    surname.style.border = "1px solid red";
    email.style.border = "1px solid red";
    birthday.style.border = "1px solid red";
    country.style.border = "1px solid red";
    validation = true;
  }

  // Validar nombre
  if (nombre.value.trim() === "") {
    warnings += "El nombre no puede quedar vacío <br>";
    nombre.style.border = "1px solid red";
    validation = true;
  } else if (!regexName.test(nombre.value)) {
    warnings += "El nombre solo acepta letras<br>";
    nombre.style.border = "1px solid red";
    validation = true;
  } else if (nombre.value.length < 3) {
    warnings += "El nombre debe tener al menos 3 letras<br>";
    nombre.style.border = "1px solid red";
    validation = true;
  } else {
    nombre.style.border = "1px solid green";
  }

  // Validar apellido
  if (surname.value.trim() === "") {
    warnings += "El apellido no puede quedar vacío <br>";
    surname.style.border = "1px solid red";
    validation = true;
  } else if (!regexName.test(surname.value)) {
    warnings += "El apellido solo acepta letras<br>";
    surname.style.border = "1px solid red";
    validation = true;
  } else if (surname.value.length < 3) {
    warnings += "El apellido debe tener al menos 3 letras<br>";
    surname.style.border = "1px solid red";
    validation = true;
  } else {
    surname.style.border = "1px solid green";
  }

  // Validar email
  if (!regexEmail.test(email.value) || email.value.trim() === "") {
    email.style.border = "2px solid red";
    warnings += "Introduce un email correcto <br>";
    validation = true;
  } else if (email.value !== email.value.trim()) {
    email.style.border = "2px solid red";
    warnings += "El email no debe contener espacios al inicio o final <br>";
    validation = true;
  } else {
    email.style.border = "2px solid green";
  }

  // Validar fecha de nacimiento
  if (birthday.value === "") {
    warnings += "La fecha de nacimiento es obligatoria <br>";
    birthday.style.border = "1px solid red";
    validation = true;
  } else {
    birthday.style.border = "1px solid green";
  }

  // Validar país
  if (country.value === "") {
    warnings += "El país es obligatorio <br>";
    country.style.border = "1px solid red";
    validation = true;
  } else {
    country.style.border = "1px solid green";
  }
  if (!validation) {
    parrafo.innerHTML = "";
    alert("Formulario enviado");
    form.reset();
  } else {
    parrafo.innerHTML = warnings;
  }
});
