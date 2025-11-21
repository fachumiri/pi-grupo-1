let formularioreg = document.querySelector(".form-login");
let inputemail = document.querySelector(".inputRemail");
let inputcontra = document.querySelector(".inputRcontra");
let inputrepe = document.querySelector(".inputRrepe");
let inputcheck = document.querySelector(".inputRcheck");
let erroringreso = document.querySelector(".errorRegistro");

formularioreg.addEventListener("submit", function (e) {

    // recuperar valores
    let email = inputemail.value;
    let password = inputcontra.value;
    let repe = inputrepe.value;
    let check = inputcheck.checked;

    // limpiar mensaje previo
    erroringreso.innerText = "";

    // estilo rojo desde JS
    erroringreso.style.color = "red";
    erroringreso.style.fontSize = "14px";
    erroringreso.style.marginTop = "10px";
    erroringreso.style.textAlign = "center"


    
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
    else if (repe === "") {
        hayErrores = true;
        erroringreso.innerText = "Debe completar el campo Repetir contraseña.";
    }
    else if (password !== repe) {
        hayErrores = true;
        erroringreso.innerText = "Las contraseñas no coinciden.";
    }
    else if (!check) {
        hayErrores = true;
        erroringreso.innerText = "Debe aceptar los términos y condiciones.";
    }

    // SI HAY ERRORES → CANCELAR EL ENVÍO
    if (hayErrores) {
        e.preventDefault();
    }
});
