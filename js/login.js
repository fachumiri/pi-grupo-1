let formulariolog = document.querySelector(".form-login") // recuperar formulario
let inputemail = document.querySelector(".inputlogin")
let inputcontra = document.querySelector (".contraseña")

//agregar evento al formulario de tipo enviar 
formulariolog.addEventListener("submit",function (e) { 
    //recupero los valores de los campos del form, los covnierto en string para poder guardar en LS 
   let email = inputemail.value;
   let password = inputcontra.value;

   if (email === "" || password === ""){
    e.preventDefault()
    alert("Debe completar los campos");
   } else if (email === ""){
     e.preventDefault() 
    alert("Debe completar el campo Email")
   } else if (password === ""){
    e.preventDefault()
    alert("Debe completar el campo Contraseña")
   }else if (password.length > 0 && password.length < 6){
    e.preventDefault()
    alert("La contraseña debe tener al menos 6 caracteres")
   }else{
     //Guardar el email del usuario en el local storage y redirigir a la pagina
    localStorage.setItem("emailUsuario", email);
   }
    // No es necesario crear un objeto literal (solo nos pide el email) ni convertirlo a string(ya lo es en el value)
})

 //Redirigir a pagina principal: lo hacemos desde el html 


