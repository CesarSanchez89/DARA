$(document).ready(function(){
    var altura = $(".menu").offset().top;

    $(window).on("scroll", function(){
        if ($(window).scrollTop() > altura){
            $(".menu__header").addClass("menu__scroll");
        }else{
            $(".menu__header").removeClass("menu__scroll");
        }
    });
});