$(function () {

    /* Modal
    ====================*/

    const modalCall = $('[data-modal]');
    const modalClose = $('[data-close]');


    modalCall.on('click', function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $('body').addClass('no-scroll');

        setTimeout(function () {
            $(modalId).find('.modal__dialog').css({
                transform: 'scale(1)'
            });
        }, 200);
    });

    modalClose.on('click', function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents('.modal');

        $(modalParent).find('.modal__dialog').css({
            transform: 'scale(0)'
        });

        setTimeout(function () {
            modalParent.removeClass('show');
            $('body').removeClass('no-scroll');
        }, 200);
    });

    $('.modal').on('click', function (event) {
        let $this = $(this);
        $this.find('.modal__dialog').css({
            transform: 'scale(0)'
        });

        setTimeout(function () {
            event.preventDefault();
            $this.removeClass('show');
            $('body').removeClass('no-scroll');
        }, 200);
    });

    $('.modal__dialog').on('click', function (event) {
        event.stopPropagation();
    });


    /* Scroll
   ====================*/
    $(function () {
        $('#scroll_bottom__about').click(function () {
            $('html, body').animate({scrollTop: $('#anchor__about').offset().top}, 600);
        });
    });

    $(function () {
        $('#scroll_bottom__products').click(function () {
            $('html, body').animate({scrollTop: $('#anchor__products').offset().top}, 600);
        });
    });

    $(function () {
        $('#scroll_bottom__contacts').click(function () {
            $('html, body').animate({scrollTop: $('#anchor__contacts').offset().top}, 600);
        });
    });

})