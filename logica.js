function inicializarPagina() {
    const btnHora = document.querySelector("#btnObtenerHora");
    btnHora.addEventListener("click", handleClick);
}

function handleClick(){
    const url = "http://localhost/test/hora.php?nombre=Diego&apellido=Linares";
    doPetAJAX(url);
}

function doPetAJAX(url) {
    const objXHR = obtainXMLHttpRequest();

<<<<<<< HEAD
    // Definimos el comportamiendo del evento onreadystatechange
    objXHR.onreadystatechange = () => {
        // Si el estado es uno, la capa cambia a CARGANDO
        if (objXHR.readyState === 1) {
            console.log("cargando");
            document.getElementById('capa').innerHTML = "CARGANDO...";
        }
        // Si el estado es 4 y se ha hecho la conexion correcta, se muestra en la capa la respuesta recibida
        if (objXHR.readyState === 4) {
            if (objXHR.status === 200) {
=======
     // Definimos el comportamiendo del evento onreadystatechange
    objXHR.onreadystatechange= () => 
    {
		// Si el estado es uno, la capa cambia a CARGANDO
		if (objXHR.readyState===1) {
                console.log("cargando");
		     	document.getElementById('capa').innerHTML="<img src='./media/hourglass.gif'/>";
		}
		// Si el estado es 4 y se ha hecho la conexion correcta, se muestra en la capa la respuesta recibida
		if (objXHR.readyState===4) 
		{
		    if (objXHR.status===200)
		     {
>>>>>>> 6a7812f57da4261b28aa2eb6f57f18c3eb9d3d68
                console.log("realizado");
                document.getElementById('capa').innerHTML = objXHR.responseText;
            }
        }
    }

    //En la funcionalidad Open establecemos el método de envío, la url, y
    //false = síncrona, true = asíncrona
    objXHR.open("GET", url, false);

    //Establecemos parámetros que irán en la cabecera
    //En las peticiones POST tenemos que enviar los datos en la cabecera el COntent-Type
    //ya que los datos se envían formando parte de la cabecera
<<<<<<< HEAD
    objXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded",);
=======
    //objXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", );   
>>>>>>> 6a7812f57da4261b28aa2eb6f57f18c3eb9d3d68

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