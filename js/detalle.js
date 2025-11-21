// URL de los detalles
let queryString = location.search;
let qs = new URLSearchParams(queryString);
let producto = qs.get("id");

console.log("producto seleccionado", producto);

let urlId = `https://dummyjson.com/products/${producto}`;

let contenedor = document.querySelector(".rev");
let detalle = document.querySelector(".det");

// Sección 
fetch(urlId)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);



        let detalleproducto = `
             <div class="detalle-producto">
                <img class="producto.detalle img" src="${data.images[0]}" alt="${data.title}">
                <h2 class="h2.detalle">${data.title}</h2>
                <p class="productos.detalle"><strong>Marca:</strong> ${data.brand}</p>
                <p class="productos.detalle"><strong>Descripción:</strong> ${data.description}</p>
                <p class="productos.detalle"><strong>Precio:</strong>${data.price}</p>
                <p class="productos.detalle"><strong>Categoría:</strong> <a href="./category.html?cat=${data.category}">${data.category}</a></p>
                <p class="productos.detalle"><strong>Stock:</strong> ${data.stock} unidades disponibles</p>
                <p class="productos.detalle"><strong>Tags:</strong> ${data.tags}</p>
            </div>
            
        
        `

        detalle.innerHTML += detalleproducto;

        //comentarios
        let comentarios = data.reviews;
        console.log(comentarios);

        let contenido = "";

        for (let i = 0; i < comentarios.length; i++) {
            let review = comentarios[i];

            contenido += `
              <div class="review">
                <p><strong> ${review.reviewerName} — ${review.date} </strong></p>
                <p>${review.rating}/5</p>
                <p>${review.comment}</p>
              </div>
            <hr>    
        `;

        }
        detalle.innerHTML += contenido

    })
