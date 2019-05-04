$(function(){
    $('.QandA-wrapper').click(function(){
        var $answer = $(this).find('.answer');
        if ($answer.hasClass('answer-open')) {
            $answer.removeClass('answer-open');
            $answer.slideUp(250);
            $(this).find('h3').css('text-decoration','none');
        } else {
            $answer.addClass('answer-open');
            $answer.slideDown(250);
            $(this).find('h3').css('text-decoration','underline');
        }
    });

    $('.scrollTop-btn').click(function(){
        $('html,body').animate({
            'scrollTop':0
        },500);
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollTop-btn').fadeIn();
        } else {
            $('.scrollTop-btn').fadeOut();
        }
    });
});