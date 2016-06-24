$(function(){
    // nav
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

    $('.nav-languages ul li#pt').click(function(){
        $('.nav-languages ul li#en').removeClass('active');
        $('.nav-languages ul li#pt').addClass('active');
        $('#curriculo-en').hide(0);
        $('#curriculo-pt').show(300);
    });

    $('.nav-languages ul li#en').click(function(){
        $('.nav-languages ul li#pt').removeClass('active');
        $('.nav-languages ul li#en').addClass('active');
        $('#curriculo-pt').hide(0);
        $('#curriculo-en').show(300);
    });
});