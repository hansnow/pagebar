$(document).ready(function(){
    // init
    $("div[id^=page]").filter(function(){
        return $(this).attr("id") !== "page1";
    }).hide().attr("status","hide");
    $("#page1").attr("status","show");
    $("#first").addClass("disabled");
    $("[page]:first").addClass("active");

    // core function!
    // we add an attr called "status" to mark  page(div)'s status
    // the page(div) that has been showed  is marked as status="show"
    // so, the others are marked as status="hide"
    // a pagebar button is clicked, the following will happen
    // 1. the current page will be hide and marked as "hide"
    // 2. the related page will show and marked as "show"
    // 3. the old active button will be normal, and the clicked buttion will be activited
    // 4. process the "<<" button and ">>" button
    $("[page]").click(function(){
        $("[status=show]").hide().attr("status","hide");
        pagenum = $(this).attr("page").trim();
        $("div").filter(function(){
            return $(this).attr("id") == "page"+pagenum;
        }).show().attr("status","show");
        $("[page].active").removeClass("active");
        $(this).addClass("active");
        if($(this).attr("page") == $("[page]:first").attr("page")){
            $("#first").addClass("disabled");
            $("#last").removeClass("disabled");
        }else if($(this).attr("page") == $("[page]:last").attr("page")){
            $("#last").addClass("disabled");
            $("#first").removeClass("disabled");
        }else{
            $("#first").removeClass("disabled");
            $("#last").removeClass("disabled");
        }
            
    });

    // a common process of "<<" button

    $("#first").click(function(){
        $("[status=show]").hide().attr("status","hide");
        $("div[id^=page]:first").show().attr("status","show");
        $(this).addClass("disabled");
        $("#last").removeClass("disabled");
        $("[page].active").removeClass("active");
        $("[page]:first").addClass("active");
    });

    // same as "<<" button
    $("#last").click(function(){
        $("[status=show]").hide().attr("status","hide");
        $("div[id^=page]:last").show().attr("status","show");
        $(this).addClass("disabled");
        $("#first").removeClass("disabled");
        $("[page].active").removeClass("active");
        $("[page]:last").addClass("active");
    });


});