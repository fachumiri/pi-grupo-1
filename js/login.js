let formulariolog = document.querySelector(".form-login")
let inputemail = document.querySelector(".inputlogin")
let inputcontra = document.querySelector (".contraseña")

formulariolog.addEventListener("submit",function (e) { 
    e.preventDefault() // prevenir un comportamiento por defecto
    //recupero los valores de los campos del form 
   let email = this.inputemail.value;
   let password = this.inputcontra.value;


   if (email === 0 || password === 0){
    e.preventDefault()
    alert("Debe completar los campos");
   } else if (email === 0){
    alert("Debe completar el campo Email")
   } else if (password === 0){
    alert("Debe completar el campo Contraseña")
   }else if (password.length > 0 && password < 6){
    alert("La contraseña debe tener al menos 6 caracteres")
   }else{

   }
   
})
//Guardar el email del usuario en el local storage y redirigir a la pagina
