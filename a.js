$(document).ready(function(){

    $("#images img").click(function(){
        $(this).css("visibility", "hidden");
    });

    $("button").click(function(){
        $("#images img").css("visibility", "visible")
    });

});