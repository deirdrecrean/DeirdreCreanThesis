
$(document).ready(function () {
let itsFriday = false;

if (itsFriday === true){
  console.log("Almost The Weekend!");
} else{
  console.log("A Few More Days!");
}    
$(".show").click(function () {
    $(".about").toggleClass("visible");
    
    if ($(".about").hasClass("visible")) {
        $(".show").html("Show Less");
    } else {
        $(".show").html("Welcome");
    }
});

    $(".titlea").click(function () {
    $(".lyricsa").fadeIn(300);
    });
$(".closea").click(function(){
        $(".lyricsa").fadeOut(300);
    });
    $(".titleb").click(function () {
    $(".lyricsb").fadeIn(300);
    });
$(".closeb").click(function(){
        $(".lyricsb").fadeOut(300);
    }); 
    $(".titlec").click(function () {
    $(".lyricsc").fadeIn(300);
    });
$(".closec").click(function(){
        $(".lyricsc").fadeOut(300);
    }); 
    $(".titled").click(function () {
    $(".lyricsd").fadeIn(300);
    });
$(".closed").click(function(){
        $(".lyricsd").fadeOut(300);
    });
    
    
});

/*  
$(document).ready(function(){
    
    $(".title").click(function(){
       $(".lyrics").slideToggle();
    $(".what button").click(function(){
        $(this).toggleClass("visible");
       $(this).next().toggleClass("visible");
    });
});
*/