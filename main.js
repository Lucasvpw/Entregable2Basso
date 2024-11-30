


    productosLibreria.forEach(el => {
        productos.innerHTML += `
                <div class="producto">
                    <h3>${el.nombre}</h3>
                    <div class="img">
                        <img src="${el.img}" alt="">
                    </div>
                    <p>Precio: $<span>${el.precio}</span></p>
                    <p>Categoría: ${el.categoria}</p>
                    <button class="botonesCompra">Comprar</button>
                </div>`}) 