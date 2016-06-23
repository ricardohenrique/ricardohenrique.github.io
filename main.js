$(function(){
    $('#navbar-close').click(function() {
        console.log('click');
        $('.nav').removeClass('open').hide(150);
    });
    $('#navbar-click').click(function() {
        if (!$('.nav').hasClass('open')) {
            $('.nav').addClass('open').show(150);
        } else {
            $('.nav').removeClass('open').hide(150);
        }
    });
});