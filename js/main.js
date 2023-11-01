$(".burger").on("click" , function (){
    $(this).toggleClass("active");
    $(".nav").toggleClass("active");
    $("body").toggleClass("no-scroll");
})


$(".nav-list__item").on("click" , function (){
    $(".burger").toggleClass("active");
    $(".nav").toggleClass("active");
    $("body").removeClass("no-scroll");
})
