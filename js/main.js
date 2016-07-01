$(function(){
    // nav
    $('#navbar-close').click(function() {closeMenu()});

    $('#navbar-click').click(function() {
        if (!$('.nav').hasClass('open')) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    $('.nav-languages ul li#pt').click(function(){
        $('.nav-languages ul li#en').removeClass('active');
        $('.nav-languages ul li#pt').addClass('active');
        $('#curriculo-en').hide('clip', 300);
        $('#curriculo-pt').show('clip', 500);
    });

    $('.nav-languages ul li#en').click(function(){
        $('.nav-languages ul li#pt').removeClass('active');
        $('.nav-languages ul li#en').addClass('active');
        $('#curriculo-pt').hide('clip', 300);
        $('#curriculo-en').show('clip', 500);
    });
});
function openMenu(){
    $(function(){
        // console.log('click');
        $('.nav').addClass('open').show('drop', 300);
    });
}
function closeMenu(){
    $(function(){
        // console.log('click');
        $('.nav').removeClass('open').hide('drop', 300);
    });
}