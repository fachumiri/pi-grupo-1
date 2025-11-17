// 1. Recuperar el QS ?busqueda=algo
let qs = location.search;
let qsObj = new URLSearchParams(qs);

let termino = qsObj.get("busqueda");
console.log("Término buscado:", termino);

// 2. Validación
if (termino == "" || termino == null) {
    alert("Debe ingresar un término para buscar.");
    location.href = "./home.html";
}

// 3. Mostrar el título dinámico
let titulo = document.querySelector(".titulo-resultado");
titulo.innerHTML = `Resultados de búsqueda para: <strong>${termino}</strong>`;

// 4. Armar URL de la API
let URL_SEARCH = `https://dummyjson.com/products/search?q=${termino}`;

// 5. Capturar contenedor donde mostraremos los productos
let contenedor = document.querySelector(".resultados");

// 6. Fetch a la API
fetch(URL_SEARCH)
.then(function(res){
    return res.json();
})
.then(function(data){
    console.log(data);

    let contenido = "";

    // SI NO ENCUENTRA RESULTADOS
    if (data.products.length === 0) {
        contenido = `
            <p>No hay resultados para el término: <strong>${termino}</strong></p>
        `;
        contenedor.innerHTML = contenido;
        return;
    }

    // SI ENCUENTRA RESULTADOS
    for (let i = 0; i < data.products.length; i++) {
        let producto = data.products[i];

        contenido += `
            <article class="item">
                <img src="${producto.thumbnail}">
                <h3>${producto.title}</h3>
                <p class="precio">$${producto.price}</p>
                
                <a class="boton" href="./detalle.html?id=${producto.id}">
                    Ver detalle
                </a>
            </article>
        `;
    }

    contenedor.innerHTML = contenido;
})
.catch(function(error){
    console.log("Error búsqueda:", error);
});


