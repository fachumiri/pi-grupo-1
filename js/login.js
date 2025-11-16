let formulariolog = document.querySelector(".form-login")
let inputemail = document.querySelector(".inputlogin")
let inputcontra = document.querySelector (".contraseña")

formulariolog.addEventListener("submit",function (e) { 
    e.preventDefault() // prevenir un comportamiento por defecto
    //recupero los valores de los campos del form 
   let email = inputemail.value;
   let password = inputcontra.value;


   if (email === "" || password === ""){
    e.preventDefault()
    alert("Debe completar los campos");
   } else if (email === ""){
    alert("Debe completar el campo Email")
   } else if (password === ""){
    alert("Debe completar el campo Contraseña")
   }else if (password.length > 0 && password.length < 6){
    alert("La contraseña debe tener al menos 6 caracteres")
   }else{

   }
   
})
//Guardar el email del usuario en el local storage y redirigir a la pagina
