$(".burger").on("click" , function (){
    $(this).toggleClass("active");
    $(".nav").toggleClass("active");
})


$(".nav-list__item").on("click" , function (){
    $(".burger").toggleClass("active");
    $(".nav").toggleClass("active");
})
