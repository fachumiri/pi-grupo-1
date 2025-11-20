// recuperar elementos del DOM
let logoutReg = document.querySelector(".Reg");      // <li> Registro
let logoutLog = document.querySelector(".Log");      // <li> Login
let logoutBienvenida = document.querySelector(".Bien"); // <li> Bienvenido
let logoutli = document.querySelector(".Logout"); // <li> Logout
let logoutEnlace = document.querySelector("#enlace-logout"); // <a> Logout

// si el enlace existe (solo en páginas donde hay logout)
if (logoutEnlace) {
//usamos los if para ver si existen los elementos 
    logoutEnlace.addEventListener("click", function(e) {
// click para que cuando se ejecute el click se cumpla todo lo de abajo 
        e.preventDefault();

        // borrar LS
        localStorage.removeItem("emailUsuario");

        // ocultar saludo y logout
        if (logoutBienvenida) logoutBienvenida.style.display = "none";
        if (logoutli) logoutli.style.display = "none";

        // mostrar login y registro
        if (logoutLog) logoutLog.style.display = "inline-block";
        if (logoutReg) logoutReg.style.display = "inline-block";

    });

}
