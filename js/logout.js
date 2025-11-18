// Recuperar elementos
let homeReg = document.querySelector(".Reg");
let homeLog = document.querySelector(".Log");
let homeBienvenida = document.querySelector(".Bien");
let homeLogout = document.querySelector("#logout");

// EVENTO DEL LOGOUT
homeLogout.addEventListener("click", function(e) {
    e.preventDefault();
    
    // eliminar dato del LS
    localStorage.removeItem("emailUsuario");

    // ocultar saludo y logout
    homeBienvenida.style.display = "none";
    homeLogout.style.display = "none";

    // mostrar login y registro
    homeLog.style.display = "inline-block";
    homeReg.style.display = "inline-block";

    //refrescar para que saludo.js no vuelva a ejecutarse
    window.location.reload();
});
