

let queryString = location.search; 
let qs = new URLSearchParams(queryString);
let categoria = qs.get("cat");  

console.log("Categoría seleccionada:", categoria);


let url = `https://dummyjson.com/products/category/${categoria}`;


let contenedor = document.querySelector(".listaCat1");


fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let productos = data.products;  

        for(let i = 0; i < productos.length; i++){
            let item = `
                <article class="item">
                    <img src="${productos[i].thumbnail}">
                    <h3>${productos[i].title}</h3>
                    <p class="precio">$${productos[i].price}</p>

                    <a class="boton" href="./detalle.html?id=${productos[i].id}">
                        Ver detalle
                    </a>
                </article>
            `;

            contenedor.innerHTML += item;
        }
    })
    .catch(function(error){
        console.log("Error categoría:", error);
    });
