function inicializarPagina() {
    const btnHora = document.querySelector("#btnObtenerHora");
    btnHora.addEventListener("click", doPetAJAX);
}

const readyStateComplete = 4;
const readyStateLoading = 3;
const readyStateLoaded = 2;
const readyStateOpen = 1;


function doPetAJAX() {
    //Inicializar el objeto XMLHttpRequest
    const objXHR = obtainXMLHttpRequest();

    // Definimos el comportamiendo del evento onreadystatechange
    objXHR.onreadystatechange = () => {
        // Si el estado es uno, la capa cambia a CARGANDO
        if (objXHR.readyState === readyStateOpen) {
            console.log("cargando");
            document.getElementById('capa').innerHTML = "<img src='./media/loading.gif' alt='cargando'>";
        }
        // Si el estado es 4 y se ha hecho la conexion correcta, se muestra en la capa la respuesta recibida
        if (objXHR.readyState === readyStateComplete) {
            if (objXHR.status === 200) {
                console.log("realizado");
                document.getElementById('capa').innerHTML = 
                    objXHR.responseText;
            }
        }
    }

    //En la funcionalidad Open establecemos el método de envío, la url, y
    //false = síncrona, true = asíncrona
    objXHR.open("GET", "http://localhost/test/hora.php", true);

    //Establecemos parámetros que irán en la cabecera
    //En las peticiones POST tenemos que enviar en la cabecera el COntent-Type
    //ya que los datos se envían formando parte de la cabecera
    objXHR.setRequestHeader("Content-Type", 
        "application/x-www-form-urlencoded");

    // Aqui enviamos la peticion síncrona
    objXHR.send(null);

}

/*
Función que usamos para obtener el objeto XMLHttpRequest independientemente del navegador en el que estemos
*/
function obtainXMLHttpRequest() {
    let httpRequest;
    if (window.XMLHttpRequest) {
        //El explorador implementa la interfaz de forma nativa
        httpRequest = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        //El explorador permite crear objetos ActiveX
        try {
            httpRequest = new ActiveXObject("MSXML2.XMLHTTP");
        } catch (e) {
            try {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) { }
        }
    }
    // Si no se puede crear, devolvemos false. En caso contrario, devolvemos el objeto
    if (!httpRequest) {
        return false;
    } else {
        return httpRequest;
    }
}

window.onload = inicializarPagina();