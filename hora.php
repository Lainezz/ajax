<?php
// Esta cabecera la ponemos para que peticiones AJAX se acepten desde fuera del dominio.
// Sin ella, no funcionaria las peticiones al hosting hispabyte.
// Esta cabecera NO debe estar si haceis peticiones AJAX entre un mismo dominio
header("Access-Control-Allow-Origin: *");
// Para que el navegador no haga cache de los datos devueltos por la página PHP.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
// retrasamos 2 segundos la ejecución de esta página PHP.
sleep(2);

if(isset($_GET["nombre"])){
    echo "Saludos desde el servidor: hola {$_GET["nombre"]}";
    echo nl2br("\r\n");
}

// Mostramos la fecha y hora del servidor web.
echo "La fecha y hora del Servidor Web: ";
echo date("j/n/Y G:i:s.");

?>