$(function(){

    $('.menu-icon').click(function(){
        $(this).toggleClass('clicked');
        if ($(this).hasClass('clicked')) {
            $('.contacts-head').slideDown();
            $('.search').delay(100).slideDown();
            $('.appointment').delay(200).slideDown();
            $('.menu').delay(300).slideDown();
            $('body').addClass('fixed');
            $('.overlay').addClass('open');
            $('.header').addClass('highIndex open');
        }
        else {
            $('.contacts-head').delay(300).slideUp();
            $('.search').delay(200).slideUp();
            $('.appointment').delay(200).slideUp();
            $('.menu').slideUp();
            $('body').removeClass('fixed');
            setTimeout(function(){
                $('.overlay').removeClass('open');
                $('.header').removeClass('highIndex open');
            }, 600);
            $('.header').removeAttr('style');
        }
        function calcWidth() {
            let wh = $(window).height();
            let hh = $('.header').height();
            if (wh < hh) {
                $('.header').css({ "height": "100vh", "overflowY": "scroll"})
            }
        }
          
        setTimeout(calcWidth, 800);
    });
    
});