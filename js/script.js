//<-------------navbar-links color change------------->

$(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        $('nav').addClass('nav-fixed');
    } else {
        $('nav').removeClass('nav-fixed');
    }
});


// ,<-------------nav-header color change-------------->

$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 100) {
            $('.nav-header').css('color', '#000');
        } else {
            $('.nav-header').css('color', '#fff');
        }
    });
});


//filter gallery

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});


//<-----------carouserl slider------------->

$('.autoplay').owlCarousel({
    loop:true,
    margin:10,
    
    dots: true,
    autoplay: true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


//top to scroll button

/*scroll to top*/
$(document).ready(function(){
$(window).scroll(function(){
    if($(this).scrollTop() > 100) {
        $("#arrow i").fadeIn();
}
    else {
        $("#arrow i").fadeOut();
}

});
$("#arrow i").on('click',function(){
$("html,body").animate({
    scrollTop: 0
}, 600);
    return false;
});

});

