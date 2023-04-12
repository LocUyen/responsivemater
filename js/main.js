$(document).ready(function () {
    $('#navbar-toggle').click(function () {
        $('#responsive-menu').slideToggle();
    });
    $(window).resize(function () {
        $('#responsive-menu').slideUp();
    });
    $(window).scroll(function () {
        $('#responsive-menu').slideUp();
    });

    $('.responsive-menu-toggle').click(function () {
        $(this).toggleClass('open');
        $(this).next('ul.sub-menu').slideToggle();
    })
});