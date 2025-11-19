

let urlCategorias = "https://dummyjson.com/products/category-list";

let listaCategorias = document.querySelector(".lista-categorias");

fetch(urlCategorias)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("Categorías:", data);

        for(let i = 0; i < data.length; i++){
            let categoria = data[i];

            let item = `
                <li>
                    <a href="./category.html?cat=${categoria}">
                        ${categoria}
                    </a>
                </li>
            `;

            listaCategorias.innerHTML += item;
        }
    })
    .catch(function(error){
        console.log("Error categorías:", error);
    });
