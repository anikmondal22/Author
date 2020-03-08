$(document).ready(function(){
    
    $(".navbar").sticky({topSpacing:0});

    $("a").on("click",function(o){if(""!==this.hash){o.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},800,function(){window.location.hash=t})}});

    $("#banner .owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
    });

    $("#testimonials .owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
    });

    $("#mobile-menu span").click(function(){
        $("#mobile-menu-item").slideToggle();
    });

    $("#mobile-menu-item li a").click(function(){
        $("#mobile-menu-item").slideToggle();
    });

});