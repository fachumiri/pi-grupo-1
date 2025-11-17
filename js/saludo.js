// recuperar elemento del DOM: login, registro y lista
let homeReg = document.querySelector(".Reg");
let homeLog = document.querySelector(".Log");
let homeBienvenida = document.querySelector(".Bien");
let homeLogout = document.querySelector(".logout");



//el email usuario sale del nombre guardado en LS
let data = localStorage.getItem("emailUsuario") 

//preguntar si los datos existen --> usuario logeado
if (data !== null && data !== undefined) {
    //Mostrar saludo + logout
    //homeBienvenida.innerText = `Bienvenido: ${data}`;
    homeBienvenida.style.display = "inline-block";
    homeBienvenida.innerText = `Bienvenido: ${data}`;

    // Mostrar logout
    homeLogout.style.display = "inline-block";

    // Ocultar login y registro
    homeLog.style.display = "none";
    homeReg.style.display = "none";



} else {
   // alert ("No se pudo guardar los datos correctamente")
}
