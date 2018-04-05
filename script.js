$(document).ready(function(){
    alert("Hi");
 if($("#about").hasClass("visible")){
            $("#show").html("Show Less");
        } else{
            $("#show").html("Show More");     
   });

$(".close button").click(function(){
        $(".lyrics").fadeOut();
    });
$(".title").click(function(){
    $(this).fadeIn();
})
});


  /*  
$(document).ready(function(){
    $(".close").click(function(){
        $("#overlay").fadeOut();
    });
    $(".title").click(function(){
       $(".lyrics").slideToggle();
    $(".what button").click(function(){
        $(this).toggleClass("visible");
       $(this).next().toggleClass("visible");
    });
});