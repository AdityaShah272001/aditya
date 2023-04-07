$('.feedback-slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
});


$('#tabs-nav li:first-child').addClass('Hello');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function () {
    $('#tabs-nav li').removeClass('Hello');
    $(this).addClass('Hello');
    $('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});



$(document).ready(function () {
    $("#menu-icon").on('click', function () {
        $(this).toggleClass("menu-close")
        $(".nav-menu").toggleClass("menu-open")
        $('body').toggleClass("open_menu")
    })
})
// function myfunction() {
//     var element = document.getElementById("myinfo");
//     var menuIcon = document.getElementById('menu-icon');


//     element.classList.toggle("menu-open");

//     menuIcon.classList.toggle("menu-close");
//


// }
// $('.nav-menu.menu-close').addClass("result");