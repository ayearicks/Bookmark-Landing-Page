$(document).ready(function(){
    let arrowBlue = "assets/img/icon-arrow.svg";
    let arrowRed = "assets/img/icon-arrowDown.svg";
    let forms = document.getElementsByClassName('needs-validation');


    // Navigation Toggle
    $(".burger").on("click", function(){
        $(this).toggleClass("d-none"); 
        $(".burger-x").toggleClass("d-none");
        $(".navbar-brand").toggleClass("d-none");
        $(".navbar-brand2").toggleClass("d-none");
        $(".navbar").addClass("full-color");
    });

    $(".burger-x").on("click", function(){
        $(this).toggleClass("d-none");
        $(".burger").toggleClass("d-none");
        $(".navbar-brand").toggleClass("d-none");
        $(".navbar-brand2").toggleClass("d-none");
        $(".navbar").removeClass("full-color");
    });

    // Feature Toggle
    $(".bookmark").on("click", function(){
        $(this).toggleClass("current");
        $(".bookmarkImg").removeClass("d-none");
        $("#bookmark").removeClass("d-none");

        $(".search").removeClass("current");
        $(".searchImg").addClass("d-none");
        $("#search").addClass("d-none");

        $(".share").removeClass("current");
        $(".shareImg").addClass("d-none");
        $("#share").addClass("d-none");
    });

    $(".search").on("click", function(){
        $(this).toggleClass("current");
        $(".searchImg").removeClass("d-none");
        $("#search").removeClass("d-none");

        $(".bookmark").removeClass("current");
        $(".bookmarkImg").addClass("d-none");
        $("#bookmark").addClass("d-none");

        $(".share").removeClass("current");
        $(".shareImg").addClass("d-none");
        $("#share").addClass("d-none");
    });

    $(".share").on("click", function(){
        $(this).toggleClass("current");
        $(".shareImg").removeClass("d-none");
        $("#share").removeClass("d-none");

        $(".bookmark").removeClass("current");
        $(".bookmarkImg").addClass("d-none");
        $("#bookmark").addClass("d-none");

        $(".search").removeClass("current");
        $("#search").addClass("d-none");
        $(".searchImg").addClass("d-none");
    });



    // FAQ Toggles
    $(".btn-faq").on("click", function(){
        if ($(this).find(".arrowIcon").attr("src") === arrowBlue) {
            $(this).find(".arrowIcon").attr("src", arrowRed);    
        } else if ($(this).find(".arrowIcon").attr("src") === arrowRed) {
            $(this).find(".arrowIcon").attr("src", arrowBlue);
        }
    });

    
    // Invalid Form Submission Toggles
    let validation = Array.prototype.filter.call(forms, function(form){
        form.addEventListener('submit', function(e){
            if (form.checkValidity() === false){
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    }, false);


});