const textarea = document.getElementById("intotext");
const button_mayuscula = document.querySelector("#upper");
const button_minuscula = document.querySelector("#lower");
const button_Capitalizar = document.querySelector("#cap");

const C_capitalizar = () => textarea.value = textarea.value.charAt(0).toUpperCase() + textarea.value.slice(1);
button_Capitalizar.addEventListener('click', C_capitalizar);

const convertir_mayuscula = () => textarea.value = textarea.value.toUpperCase();
button_mayuscula.addEventListener('click', convertir_mayuscula);

const convertir_minuscula = () => textarea.value = textarea.value.toLowerCase();
button_minuscula.addEventListener('click', convertir_minuscula);

function reset(){
    document.getElementById("input").value = "";
  }
