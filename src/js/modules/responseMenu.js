// $(function () {
    
    function responseMenu(){
        $('.dd_menu .dropdown-menu li').appendTo('ul.main-menu');
        var items = $('ul.main-menu li.main-item');
        var max_width = $('ul.main-menu').width() - $('ul.main-menu li.dd_menu').outerWidth() + 20;
        var width = 0;
        var hide_from = 0;
    
        items.each(function(index){
            if (width + $(this).outerWidth() > max_width)
            {
                return false;
            }
            else
            {
                hide_from = index;
                width += $(this).outerWidth();
            }
        });
        if (hide_from < items.length - 1) {
            items.eq(hide_from).nextAll('li').appendTo('.dd_menu .dropdown-menu');
            $('ul.main-menu li.dd_menu').show();
        }
        else
        {
            $('ul.main-menu li.dd_menu').hide();
        }
    }
    
    $('.menu').on('click', '.dropdown-toggle, .hide-menu', function () {
        $('.dd_menu .dropdown-menu').slideToggle();
        $('.hide-menu').toggleClass("open");
    });
    
    $('.menu').on('click', '.second-menu', function () {
        $('.dd_menu-2 .dropdown-menu-2').slideToggle();
        $('.second-menu').toggleClass("open");
    });

    $(window).on('resize', function(){
        if ($(window).width() > 600) {
            responseMenu();
        }
        else {  
            $('.dd_menu .dropdown-menu li').appendTo('ul.main-menu');
        }
    }).trigger('resize');
    
// });