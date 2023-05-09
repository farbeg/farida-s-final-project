$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 3,
        loop: true,
        dots: false
    });
    // Go to the next item
    $('.customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    $('ul.menu-tabs__caption').on('click', 'li:not(.menu-tabs__btn_active)', function () {
        $(this)
            .addClass('menu-tabs__btn_active').siblings().removeClass('menu-tabs__btn_active')
            .closest('div.menu-tabs').find('div.menu-tabs__content').removeClass('menu-tabs__content_active').eq($(this).index()).addClass('menu-tabs__content_active');
    });
});

