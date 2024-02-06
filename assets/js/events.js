$(document).ready(function () {
    $('#enviarinfo').click(function () {
        //alert('¡El correo electrónico ha sido enviado!');
        console.log("Llegue a esta funcion");
        /* $('#login')[0].reset(); */
        window.location.href = "administrativo/addseries.html"
        /* setTimeout(function(){
            // Recargar la página después de 5 segundos
            console.log("ya pasaron los 5 segundos");
            location.reload();
        }, 5000); // 5000 milisegundos = 5 segundos */
    });
});