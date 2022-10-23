const inputn = document.querySelectorAll("#input_name");

inputn.forEach(input => {
    input.addEventListener("blur", (evento)=>{
        evento.preventDefault();
        validar(evento.target);
    })
});

const inputt = document.querySelectorAll("#input_txt");

inputt.forEach(input => {
    input.addEventListener("blur", (evento)=>{
        evento.preventDefault();
        validar(evento.target);
    })
});


const inputm = document.querySelectorAll("#input_mail");

inputm.forEach(input => {
    input.addEventListener("blur", (evento)=>{
        evento.preventDefault();
        validar(evento.target);
    })
});

function validar(input) {
    
    let mensaje = "";

    if(input.value == ""){
        mensaje = "El campo no puede estar vacío";
    };

    input.setCustomValidity(mensaje);

    if(input.validity.valid){
        input.parentElement.classList.remove("formcontacto__form--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else {
        input.parentElement.classList.add("formcontacto__form--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "El campo no puede estar vacío";
    }

    const enviar = document.querySelector(".foot__form__boton");
    enviar.addEventListener("click", ()=>{
        if( input.value != ""){
            modal.show();
        }     
    });

};

//const botonEntrar = document.querySelector("#btnEnter");

//botonEntrar.addEventListener("click", () =>{
    //const correo = document.querySelector(".login__user__email");
    //const correowrite = correo.value;

    //const contrasena = document.querySelector(".login__user__password");
    //const contrasenawrite = contrasena.value;

    //if (correowrite == "sancheztienda@hotmail.com" && contrasenawrite == "19891989"){
        //window.location.href="productos.html";
    //}else{
        //alert("Correo o Contraseña incorrecta");
    //}
//})
