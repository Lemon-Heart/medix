// libs
import LazyLoad from 'vanilla-lazyload';

// modules
import './modules/hamb';
import './modules/responseMenu';
import './modules/header';
import './modules/sliders';
import './modules/textWrap';
import './modules/observer';
import './modules/map';
import './modules/svgAnim';
import './modules/servicesList';

$(function() {
    setTimeout(function() {
        $('.page-wrapper').addClass('page-loaded');
    }, 100);

    let myLazyLoad = new LazyLoad({
        elements_selector: ".lazy",
    });
});


$(function() {
    $(document).on('click', '.overlay', function(){
        setTimeout(function(){
            $('.overlay').removeClass('open');
        }, 300);
        // header
        if ($('.header').hasClass('open')){
            $('.contacts').delay(300).slideUp();
            $('.search').delay(200).slideUp();
            $('.appointment').delay(200).slideUp();
            $('.menu').slideUp();
            $('body').removeClass('fixed');
            setTimeout(function(){
                $('.overlay').removeClass('open');
                $('.header').removeClass('highIndex');
            }, 600);
            $('.header').removeAttr('style');
            $('.header').removeClass('open');
            $('.menu-icon').removeClass('clicked');
        }
        // modal
        $('.modal').fadeOut(300);
    });

    $(window).on('resize', function(){
        if (!$('.header').hasClass('open')){
            if ($(window).width() > 600){
                $('.contacts-head').show();
                $('.search').show();
                $('.appointment').show();
            }
            else {
                $('.contacts-head').hide();
                $('.search').hide();
                $('.appointment').hide();
            }
        }
    });
});

$(function() {
    $(document).on('click', '[data-modal]', function(){
        let modal = $(this).attr('data-modal');
        $('.'+ modal +'').fadeIn(300)
        $('.overlay').addClass('open');
    });

    $(document).on('click', '.close', function(){
        $(this).parent().fadeOut(300);
        setTimeout(function(){
            $('.overlay').removeClass('open');
        }, 300);
    });
});