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
});