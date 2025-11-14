let formularioreg = document.querySelector(".form-login")
let inputemail = document.querySelector(".inputRemail")
let inputcontra = document.querySelector (".inputRcontra")
let inputrepe = document.querySelector (".inputRrepe")
let inputcheck = document.querySelector (".inputRcheck")

formularioreg.addEventListener("submit",function (e){
    e.preventDefault() // prevenir un comportamiento por defecto
    //recupero los valores de los campos del form 
   let email = this.inputemail.value;
   let password = this.inputcontra.value;
   let repe = this.inputrepe.value;
   let check = this.inputcheck.value;

   if (email === 0 || password === 0) {
    alert("Debe completar los campos")
   }else if (email === 0) {
    alert ("Debe completar el campo Email")
   }else if (password === 0) {
    alert ("Debe completar el campo Contraseña")
   }else if (password.length > 0 && password < 6){
    alert("La contraseña debe tener al menos 6 caracteres")
   }else if (password !== repe) {
    alert("Las contraseñas no coinciden")
   }
   else{

   }
})
//Redirigir al login 