import Swiper from 'swiper';

// Main slider
$(function() {
    var sliderCommon = undefined;
    $(window).on('load resize', function(){
        if(window.location.pathname=='/'){
            if ($(window).width() < 1280) {
                if (sliderCommon == undefined || document.querySelector('.ovf-wr .swiper-container').swiper == null) {
                    sliderCommon = new Swiper('.ovf-wr .swiper-container', {
                        slidesPerView: 'auto',
                        navigation: {
                            nextEl: '.ovf-wr .swiper-button-next',
                            prevEl: '.ovf-wr .swiper-button-prev',
                        },
                        pagination: {
                            el: '.ovf-wr .swiper-pagination',
                            clickable: true,
                        },
                    })
                }
            }
            else {
                if (sliderCommon != undefined) {
                    sliderCommon.destroy();
                }
            }
        }
    });
});
   

// Common sliders
function initSwiper (wrap) {
    $(wrap).each(function() {
        let t = $(this),
            pag = t.find('.swiper-pagination'),
            arPrev = t.find('.swiper-button-prev'),
            arNext = t.find('.swiper-button-next'),
            slider = t.find('.swiper-container');
    
        var sliderCommon = new Swiper(slider, {
            slidesPerView: 'auto',
            navigation: {
                nextEl: arNext,
                prevEl: arPrev,
            },
            pagination: {
                el: pag,
                type: 'fraction',
                clickable: true,
            },
        })
    
    }); 
}

initSwiper ('.ovf-wr--m');

$(function() {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 16,
        slidesPerView: 4,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        grabCursor: true,
        thumbs: {
        swiper: galleryThumbs,
        },
    });
});