const btnEnvio = document.getElementById("enviarCorreo");

btnEnvio.addEventListener("click", function(e){
    e.preventDefault();

    const nombre = document.getElementById("input_name").value;
    const email = document.getElementById("input_mail").value;
    const mensaje = document.getElementById("input_txt").value;

    window.location.href=`mailto:cesar.sanchez@grupoaprok.com?subject=Solicitud de Cotización&body=Nombre%3A${nombre}
    %0ACorreo%3A${email}%0AMensaje%3A${mensaje}`;

});