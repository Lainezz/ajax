function inicializarPagina2(){
    const btnAumentarVotos = document.querySelector("#btnAumentarVotos");
    btnAumentarVotos.addEventListener("click", handleClick);
}

function handleClick(e){

    const url = "http://localhost/test/votos.php";
    let accion;

    if(e.target.id = "btnAumentarVotos"){
        accion = "accion=votar";
    } else if(e.target.id = "btnMostrarVotos"){
        accion = "accion=nVotos";
    } else {
        accion = "accion=error";
    }


    doPetAJAX2(url, accion);
}

function doPetAJAX2(url, data){

    const objXHR2 = obtainXMLHttpRequest2();

    objXHR2.onreadystatechange = () => {
        if(objXHR2.readyState === 1){
            console.log("cargando");
            document.querySelector("#capa").innerHTML = "<img src='./media/loading.gif' alt='cargando'>";
        }
        if(objXHR2.readyState === 4){
            console.log("realizado");
            document.querySelector("#capa").innerHTML = objXHR2.responseText;
        }
    };
    //True = asíncrono
    objXHR2.open("POST", url, true);

    objXHR2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    objXHR2.send(data); //accion=nvotos
}

/*
Función que usamos para obtener el objeto XMLHttpRequest independientemente del navegador en el que estemos
*/
function obtainXMLHttpRequest2() {
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



window.onload = inicializarPagina2();