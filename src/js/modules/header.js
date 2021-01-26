$(function () {
    //Настройки шапки
    window.Top = window.pageYOffset;
    window.headH = $('.header').height();
    let flagHeder = true,
        head = $('.header'),
        newTop = 0,
        oldTop = 0,
        heightBox = ($('header').height() * 2);

    $(window).on('scroll', function () {
        Top = window.pageYOffset;
        newTop = Top;

        fixedHeader(head);

        if(Top > heightBox && newTop < oldTop){
            head.addClass('show');
            flagHeder = false;
            oldTop = newTop;
        }else {
            oldTop = newTop;
            if(!flagHeder){
                flagHeder = true;
                head.removeClass('show');
            }
            if(Top <= heightBox ) {
                head.removeClass('show');
            }
        }
    });

    fixedHeader(head);

    function fixedHeader(head) {
        if(Top > headH){
            $('main').css('padding-top', $('.header').height());
            head.addClass('fixed');
            if(Top > heightBox){
                head.addClass('transition');
            }
        }else {
            head.removeClass('fixed');
            $('main').removeAttr('style');
            head.removeClass('transition');
        }
    }
});