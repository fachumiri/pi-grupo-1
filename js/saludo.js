let homeReg = document.querySelector(".Reg");
let homeLog = document.querySelector(".Log");
let homeBienvenida = document.querySelector(".Bien");
let homeLogout = document.querySelector(".Logout");


// obtener email del LS
let data = localStorage.getItem("emailUsuario");

// solo entra si existe un mail real
if (data !== null && data !== "") {
//necesitamos que se fije a ver si existen cada uno de los elementos existen 
    if (homeBienvenida) {
        homeBienvenida.style.display = "inline-block";
        homeBienvenida.innerText = `Bienvenido: ${data}`;
    }

    if (homeLogout) {
        homeLogout.style.display = "inline-block";
    }

    if (homeLog) {
        homeLog.style.display = "none";
    }

    if (homeReg) {
        homeReg.style.display = "none";
    }
}
