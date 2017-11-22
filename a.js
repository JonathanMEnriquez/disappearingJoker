$(document).ready(function(){

    $("#images img").click(function(){
        $(this).css("visibility", "hidden");
    });

    $("#container").mouseleave(function(){
        // $(img).css("visibility", "visible");

        alert("BAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA!!!!!! YOU'LL NEVER BE RID OF ME!");
    });

    $("#container").mouseleave(function(){
        $("img").css("visibility", "visible");
    });

    $("button").click(function(){
        $("#images img").css("visibility", "visible")
    });

});