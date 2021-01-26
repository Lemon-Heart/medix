$(function() {
    $(document).on('click', '.servicesList__head', function(){
        $(this).toggleClass('open');
        $(this).parent('.servicesList__item').children('.servicesList__hide').slideToggle();
    });

    $(document).on('click', '.servicesList h3', function(){
        if ($(window).width() < 1100) {
            $(this).toggleClass('open');
            $('.servicesList .servicesList__item').slideToggle();
            $('.servicesList').toggleClass('highIndex');
        }
    })
});