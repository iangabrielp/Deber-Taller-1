let productos = [];

const agregarProducto = (id, producto, precio) => {
    let productoExistente = productos.find(p => p.id == id && p.producto == producto);

    if (productoExistente) {
        productoExistente.cantidad++;
        putJson(productoExistente);  // Actualiza la cantidad en el servidor
    } else {
        postJson({
            id: id,
            producto: producto,
            precio: precio,
            cantidad: 1
        });
    }
    console.log(productos);
    actualizarTabla();
}
 
const actualizarTabla = () =>{
    let tbody = document.getElementById('tbody');
    let total= 0;
 
    tbody.innerHTML = '';
    for(let item of productos){
        let fila = tbody.insertRow();
 
        let celdaProducto = fila.insertCell(0);
        let celdaCantidad = fila.insertCell(1);
        let celdaPrecio = fila.insertCell(2);
        let celdaTotal = fila.insertCell(3);
        let celdaBoton = fila.insertCell(4);
 
        celdaPrecio.textContent = item.precio;
        celdaCantidad.textContent = item.cantidad;
        celdaProducto.textContent = item.producto;
        celdaTotal.textContent = item.precio * item.cantidad;
 
        let boton = document.createElement('button');
        boton.textContent = 'Borrar';
        celdaBoton.append(boton);
 
        boton.addEventListener('click', function(){
            eliminar(item.id);
        } );
        total = total + item.precio * item.cantidad;
    }
 
    document.getElementById('total').textContent=total;
}

// Aplicar estilos a las filas impares
const rows = tbody.querySelectorAll('tr');
rows.forEach((row, index) => {
    if (index % 2 === 1) {
        row.style.backgroundColor = '#f2f2f2'; 
    } else {
        row.style.backgroundColor = '#ffffff'; 
    }
});

 
const eliminar = (id) =>{
    let indice = productos.findIndex(p => p.id == id);
    console.log(indice);
    if(indice != -1){
        productos.splice(indice, 1);
        actualizarTabla();
        deleteJson(id)
    }
}
 
 
async function putJson(data) {
    try {
        const response = await fetch(`http://localhost:3000/productos/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log("Exitoso", result);
    } catch (error) {
        console.error("Error", error);
    }
}
 
async function postJson(data){
    try {
        const response = await fetch("http://localhost:3000/productos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log("Exitoso", result);
    } catch (error) {
        console.error("Error", error);
    }
}
 
async function deleteJson(data){
    try {
        const response = await fetch(`http://localhost:3000/productos/${data}`, {
            method: "DELETE",
 
        });
        const result = await response.json();
        console.log("Exitoso", result);
    } catch (error) {
        console.error("Error", error);
    }
}
 
async function getJson(data){
    try {
        const response = await fetch("http://localhost:3000/productos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log("Exitoso", result);
 
        productos = result
        actualizarTabla()
 
    } catch (error) {
        console.error("Error", error);
    }
}
 
window.onload = function(){
    getJson();
};

// Amagenes estaticas
document.addEventListener('DOMContentLoaded', (event) => {
    let productLink = document.getElementById('product-link');

    productLink.addEventListener('click', function(event) {
        event.preventDefault();
        // Aquí puedes añadir cualquier otra lógica que desees que ocurra cuando se haga clic en el enlace
        console.log('Enlace clicado, pero la pantalla no se mueve hacia arriba');
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    let tarjetasMate = document.getElementById('tarjetas-mate');

    tarjetasMate.addEventListener('click', function(event) {
        event.preventDefault();
        // Aquí puedes añadir cualquier otra lógica que desees que ocurra cuando se haga clic en el enlace
        console.log('Enlace clicado, pero la pantalla no se mueve hacia arriba');
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    let tarjetasSerigrafia = document.getElementById('tarjetas-serigrafia');

    tarjetasSerigrafia.addEventListener('click', function(event) {
        event.preventDefault();
        // Aquí puedes añadir cualquier otra lógica que desees que ocurra cuando se haga clic en el enlace
        console.log('Enlace clicado, pero la pantalla no se mueve hacia arriba');
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    let tarjetasSelectivas = document.getElementById('tarjetas-selectivas');

    tarjetasSelectivas.addEventListener('click', function(event) {
        event.preventDefault();
        // Aquí puedes añadir cualquier otra lógica que desees que ocurra cuando se haga clic en el enlace
        console.log('Enlace clicado, pero la pantalla no se mueve hacia arriba');
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    let lonasBanners = document.getElementById('lonas-banners');

    lonasBanners.addEventListener('click', function(event) {
        event.preventDefault();
        // Aquí puedes añadir cualquier otra lógica que desees que ocurra cuando se haga clic en el enlace
        console.log('Enlace clicado, pero la pantalla no se mueve hacia arriba');
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    let menusDesechables = document.getElementById('menus-desechables');

    menusDesechables.addEventListener('click', function(event) {
        event.preventDefault();
        // Aquí puedes añadir cualquier otra lógica que desees que ocurra cuando se haga clic en el enlace
        console.log('Enlace clicado, pero la pantalla no se mueve hacia arriba');
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    let foldersFlyers = document.getElementById('folders-flyers');

    foldersFlyers.addEventListener('click', function(event) {
        event.preventDefault();
        // Aquí puedes añadir cualquier otra lógica que desees que ocurra cuando se haga clic en el enlace
        console.log('Enlace clicado, pero la pantalla no se mueve hacia arriba');
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    let hojasMembretadas = document.getElementById('hojas-membretadas');

    hojasMembretadas.addEventListener('click', function(event) {
        event.preventDefault();
        // Aquí puedes añadir cualquier otra lógica que desees que ocurra cuando se haga clic en el enlace
        console.log('Enlace clicado, pero la pantalla no se mueve hacia arriba');
    });
});

