let formularioreg = document.querySelector(".form-login")
let inputemail = document.querySelector(".inputRemail")
let inputcontra = document.querySelector (".inputRcontra")
let inputrepe = document.querySelector (".inputRrepe")
let inputcheck = document.querySelector (".inputRcheck")

formularioreg.addEventListener("submit",function (e){
    e.preventDefault() // prevenir un comportamiento por defecto
    //recupero los valores de los campos del form 
   let email = inputemail.value;
   let password = inputcontra.value;
   let repe = inputrepe.value;
   let check = inputcheck.checked;

   if (email === "" || password === "") {
    alert("Debe completar los campos")
   }else if (email === "") {
    alert ("Debe completar el campo Email")
   }else if (password === "") {
    alert ("Debe completar el campo Contraseña")
   }else if (password.length > 0 && password.length < 6){
    alert("La contraseña debe tener al menos 6 caracteres")
   }else if (password !== repe) {
    alert("Las contraseñas no coinciden")
   }else if (!check){
        alert("Debe aceptar los términos y condiciones");
   }else{

   }
})
//Redirigir al login