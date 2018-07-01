$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        // new todo list from input
        var todoText = $(this).val();
        $(this).val("");
        // new li and add to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});

