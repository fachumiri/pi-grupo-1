let formulariolog = document.querySelector(".form-login"); 
let inputemail = document.querySelector(".inputlogin");
let inputcontra = document.querySelector(".contraseña");
let erroringreso = document.querySelector(".errorLogin");

// evento submit
formulariolog.addEventListener("submit", function (e) {

    // recuperar valores
    let email = inputemail.value;
    let password = inputcontra.value;

    // limpiar error previo
    erroringreso.innerText = "";

    // estilo rojo hecho desde JS
    erroringreso.style.color = "red";
    erroringreso.style.fontSize = "14px";
    erroringreso.style.marginTop = "10px";
    erroringreso.style.textAlign = "center";


   
    let hayErrores = false;

    // VALIDACIONES 
    if (email === "" || password === "") {
        hayErrores = true;
        erroringreso.innerText = "Debe completar los campos.";
    }
    else if (email === "") {
        hayErrores = true;
        erroringreso.innerText = "Debe completar el campo Email.";
    }
    else if (password === "") {
        hayErrores = true;
        erroringreso.innerText = "Debe completar el campo Contraseña.";
    }
    else if (password.length > 0 && password.length < 6) {
        hayErrores = true;
        erroringreso.innerText = "La contraseña debe tener al menos 6 caracteres.";
    }

    // si hay errores → cancelar envío
    if (hayErrores) {
        e.preventDefault();
    } else {
        // si NO hay errores → guardar email y continuar
        localStorage.setItem("emailUsuario", email);
        // redireccionamiento en el HTML 
    }
});
