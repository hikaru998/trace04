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

    $('.flow-res-content').click(function(){
        var $clickedIcon = $(this).find('i');
        var $clickedContent = $(this).find('.flow-res-txt');
        if ($clickedContent.hasClass('is-open-txt')) {
            $clickedContent.removeClass('is-open-txt');
            $clickedContent.slideUp(250);
            $clickedIcon.removeClass('fa-angle-up').addClass('fa-angle-down');
        } else {
            $('.is-open-txt').slideUp();
            $('.flow-res-content').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
            $clickedContent.addClass('is-open-txt');
            $clickedContent.slideDown(250);
            $clickedIcon.removeClass('fa-angle-down').addClass('fa-angle-up');
        }
    });

});