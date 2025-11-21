// URL de los detalles
let queryString = location.search; 
let qs = new URLSearchParams(queryString);
let producto = qs.get("id");  

console.log("producto seleccionado", producto);

let urlId = `https://dummyjson.com/products/${producto}`;

// Sección 
fetch(urlId)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let detalle = document.querySelector(".det");

        let detalleproducto = `
             <div class="detalle-producto">
                <img class="producto.detalle img" src="${data.images[0]}" alt="${data.title}">
                <h2 class="h2.detalle">${data.title}</h2>
                <p class="productos.detalle"><strong>Marca:</strong> ${data.brand}</p>
                <p class="productos.detalle"><strong>Descripción:</strong> ${data.description}</p>
                <p class="productos.detalle"><strong>Precio:</strong>${data.price}</p>
                <p class="productos.detalle"><strong>Categoría:</strong> ${data.category}</p>
                <p class="productos.detalle"><strong>Stock:</strong> ${data.stock} unidades disponibles</p>
                <p class="productos.detalle"><strong>Tags:</strong> ${data.tags}</p>
            </div>
            
        
        `

        detalle.innerHTML += detalleproducto;

        let resenas = document.querySelector(".rev")

    
    //falta reseña

    // 1. Recuperar ID del producto desde el QS
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let productId = qsObj.get("id");

console.log("Producto ID:", productId);

// 2. URL de reviews del producto
let urlReviews = "⁠https://dummyjson.com/comments/post/${productId}"

// 3. Capturar contenedor
let contenedorReviews = document.querySelector(".lista-reviews");

// 4. Fetch para reviews
fetch(urlReviews)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("Reviews:", data);

        let comentarios = data.comments;
        let html = "";

        if(comentarios.length === 0){
            html = "<p>No hay reviews para este producto.</p>";
        }

        for(let i = 0; i < comentarios.length; i++){
            let rev = comentarios[i];

            html += `
                <article class="review">
                    <p>Rating: ${rev.rating}</p>
                    <p>Comentario: ${rev.body}</p>
                    <p>Fecha: ${rev.date}</p>
                    <p>Usuario: ${rev.user.username}</p>
                </article>
            
            `;
        }

        contenedorReviews.innerHTML = html;
    })
    .catch(function(error){
        console.log("Error en reviews:", error);
    });
       
    })
    .catch(function(error){
        console.log("Error categoría 1: " + error);
    });