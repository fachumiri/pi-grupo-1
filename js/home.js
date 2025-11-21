// URLs de las cat
let urlCat1 = "https://dummyjson.com/products/category/smartphones";
let urlCat2 = "https://dummyjson.com/products/category/laptops";

// Sección 1
fetch(urlCat1)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let lista1 = document.querySelector(".listaCat1");

        // Mostrar SOLO 10 elementos
        let productos = data.products.slice(0, 10);

        for (let i = 0; i < productos.length; i++) {

            let item = `
                <article class="item">
                    <img src="${productos[i].thumbnail}">
                    <h3>${productos[i].title}</h3>
                    <p>${productos[i].description}</p>
                    <p class="precio">$${productos[i].price}</p>
                    
                    <a class="boton" href="detalle.html?id=${productos[i].id}">
                        Ver detalle
                    </a>
                </article>
            `;

            lista1.innerHTML += item;
        }
    })
    .catch(function(error){
        console.log("Error categoría 1: " + error);
    });


// Sección 2
fetch(urlCat2)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let lista2 = document.querySelector(".listaCat2");

        let productos = data.products.slice(0, 10);

        for (let i = 0; i < productos.length; i++) {

            let item = `
                <article class="item">
                    <img src="${productos[i].thumbnail}">
                    <h3>${productos[i].title}</h3>
                    <p>${productos[i].description}</p>
                    <p class="precio">$${productos[i].price}</p>
                    
                    <a class="boton" href="detalle.html?id=${productos[i].id}">
                        Ver detalle
                    </a>
                </article>
            `;

            lista2.innerHTML += item;
        }
    })
    .catch(function(error){
        console.log("Error categoría 2: " + error);
    })

// busqueda

const form = document.querySelector('.barranav form');
const input = document.querySelector('input[name="busqueda"]');

form.addEventListener('submit', function (event) {
    const valor = input.value.trim();


    if (valor === "") {
        event.preventDefault(); 
        alert("El campo de búsqueda no puede estar vacío.");
        return;
    }

    if (valor.length < 3) {
        event.preventDefault();
        alert("La búsqueda debe tener al menos 3 caracteres.");
        return;
    }

    
});







