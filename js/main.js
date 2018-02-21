$(document).ready(function(){
    //Menú hamburguesa index
    $(".burger").click(function(){
        $(".menu").animate({width:"toggle"},500);
    });
    $(".cerrar").click(function(){
        $(".menu").animate({width:"toggle"},500);
    });
    //Menú hamburguesa contacto
    $(".burger2").click(function(){
        $(".burger2").toggleClass("abierto");
        $(".menu2").animate({width:"toggle"},500);
        $(".menu2 a").toggleClass("aparicion");
    });
    //Scroll suave
    $("a").on("click", function(){
        if (this.hash !== "") {
            var hash = this.hash;
            $("html, body").animate({
                //Objeto con propiedad y valor (no necesita ;)
                scrollTop: $(hash).offset().top
            }, 1500);
        }
    });
    //Ventana modal
    $("#open").click(function(){
        $(".modal, .overlay").addClass("visible");
    });
    $("#close, .overlay").click(function(){
        $(".modal, .overlay").removeClass("visible");
    });

    //Ventana modal imagen 1
    $("#open1").click(function(){
        $(".modal1, .overlay").addClass("visible");
    });
    $("#close1, .overlay").click(function(){
        $(".modal1, .overlay").removeClass("visible");
    });
    //Ventana modal imagen 2
    $("#open2").click(function(){
        $(".modal2, .overlay").addClass("visible");
    });
    $("#close2, .overlay").click(function(){
        $(".modal2, .overlay").removeClass("visible");
    });
    //Ventana modal imagen 3
    $("#open3").click(function(){
        $(".modal3, .overlay").addClass("visible");
    });
    $("#close3, .overlay").click(function(){
        $(".modal3, .overlay").removeClass("visible");
    });
    //Ventana modal imagen 4
    $("#open4").click(function(){
        $(".modal4, .overlay").addClass("visible");
    });
    $("#close4, .overlay").click(function(){
        $(".modal4, .overlay").removeClass("visible");
    });
    //Ventana modal imagen 5
    $("#open5").click(function(){
        $(".modal5, .overlay").addClass("visible");
    });
    $("#close5, .overlay").click(function(){
        $(".modal5, .overlay").removeClass("visible");
    });
    //Ventana modal imagen 6
    $("#open6").click(function(){
        $(".modal6, .overlay").addClass("visible");
    });
    $("#close6, .overlay").click(function(){
        $(".modal6, .overlay").removeClass("visible");
    });
});