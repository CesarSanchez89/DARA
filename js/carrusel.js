var imagenes = ["assets/banner-3.png", "assets/banner-2.png", "assets/banner-1.png" ]
var cont = 0;

function carrusel(contenedor){
    contenedor.addEventListener("click", e =>{
        var atras = contenedor.querySelector(".atras");
        var adelante = contenedor.querySelector(".adelante");
        var img = contenedor.querySelector("#imagen");
        var tgt = e.target;

        if (tgt == atras){
            if(cont > 0){
                img.src = imagenes[cont-1];
                cont--;
            }else{
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }
        }else if (tgt == adelante){
            if(cont < imagenes.length-1){
                img.src = imagenes[cont+1];
                cont++;
            }else{
                img.src = imagenes[0];
                cont = 0;
            }
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    var contenedor = document.querySelector(".banner");
    carrusel(contenedor);
});