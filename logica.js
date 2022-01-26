/*
* Función que inicializa la página.
*/
async function inicializarPagina() {
    //Añadimos un evento click al botón para gestionar el pedido cuando se hace click
    const btnRealizarPedido = document.querySelector("#btnRealizarPedido");
    btnRealizarPedido.addEventListener("click", handleClick);

    //Añadimos eventos "drag" al input, que es la zona donde el usuario arrastrará su pedido
    const inputPedido = document.querySelector("#inputPedido");
    //dragover para evitar el comportamiento por defecto
    inputPedido.addEventListener("dragover", handleDragOver);
    inputPedido.addEventListener("drop", handleDrop);

    //Necesitamos añadir un evento dragstart a cada uno de los elementos que se pueden arrastrar
    const productos = document.querySelectorAll(".caja");
    for (const prod of productos) {
        prod.addEventListener("dragstart", handleDrag);
    }

}

/*
Promise.
Una constante que tiene asociada una función a la que le pasamos el pedido que vamos a gestionar.
Este pedido puede ser una petición GET/POST que se usará para el acceso a la base de datos
En nuestro pequeño ejercicio, es simplemente un texto que tiene el pedido que se desea.
*/
const gestPedido = (pedido) => new Promise((resolve, reject) => {

    setTimeout(
        () => typeof(pedido) === "number" ? reject(new Error("Pedido Incorrecto")) : resolve(pedido),
        2000
    );
});

/*
Función que obtiene los datos que se han almacenado en drag y que llama a la función handlePRomise para gestionar dicho pedido
*/
function handleDrop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    handlePromise(data);
}

/*
Esta función setea los datos
*/
function handleDrag(event){    
    event.dataTransfer.setData("text", event.target.innerHTML);
}

/*
El evento dragover especifica dónde se soltará el elemento que deseemos.
Por defecto, los datos u otros elementos no pueden ser arrastrados a otros elementos. Para hacer que eso sea posible, tenemos que "deshabilitar" este comportamiento por defecto.
Esto lo conseguimos llamando a la función .preventDefault
*/
function handleDragOver(event){
    event.preventDefault();
}

/*
Función que manejará el click sobre el botón que acompaña al input
*/
function handleClick(event){
    const inputPedido = document.querySelector("#inputPedido");

    handlePromise(inputPedido.value);
}

/*
Función añadida para simplemente gestionar nuestra promise
*/
function handlePromise(data){
    gestPedido(data)
        .then((pedido) => {
            let zonaTexto = document.querySelector("#zonaPedidos");
            let p = document.createElement("p");
            p.classList.add("lead");

            let texto = document.createTextNode(pedido);
            p.appendChild(texto);
            zonaTexto.appendChild(p);
        })
        .catch((error) => window.alert(console.error()));
}


window.onload = inicializarPagina();