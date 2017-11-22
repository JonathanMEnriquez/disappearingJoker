$(document).ready(function(){

    $("#images img").click(function(){
        $(this).css("visibility", "hidden");
    });

    $("#container").mouseleave(function(){
        // $(img).css("visibility", "visible");

        alert("HAHAHAHAHA!!! YOU CAN'T GET RID OF ME THAT EASILY");
    });

    $("#container").mouseleave(function(){
        $("img").css("visibility", "visible");
    });

    $("button").click(function(){
        $("#images img").css("visibility", "visible")
    });

});