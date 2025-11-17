let formularioreg = document.querySelector(".form-login")
let inputemail = document.querySelector(".inputRemail")
let inputcontra = document.querySelector (".inputRcontra")
let inputrepe = document.querySelector (".inputRrepe")
let inputcheck = document.querySelector (".inputRcheck")

formularioreg.addEventListener("submit",function (e){
    //recupero los valores de los campos del form --> preguntar si es necesario los value
   let email = inputemail.value;
   let password = inputcontra.value;
   let repe = inputrepe.value;
   let check = inputcheck.checked;

   if (email === "" || password === "") {
    e.preventDefault()
    alert("Debe completar los campos")
   }else if (email === "") {
    e.preventDefault()
    alert ("Debe completar el campo Email")
   }else if (password === "") {
    e.preventDefault()
    alert ("Debe completar el campo Contraseña")
   }else if (password.length > 0 && password.length < 6){
    e.preventDefault()
    alert("La contraseña debe tener al menos 6 caracteres")
   }else if (repe === "") {
    e.preventDefault()
    alert ("Debe completar el campo Repetir contraseña")
   }else if (password !== repe) {
    e.preventDefault()
    alert("Las contraseñas no coinciden")
   }else if (!check){
    e.preventDefault()
        alert("Debe aceptar los términos y condiciones");
   }else{

   }
})
