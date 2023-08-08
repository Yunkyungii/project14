$(function () {

    const MAINSLIDE = new Swiper('.main_slide', {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    const CENTERSLIDE = new Swiper('.center_slide', {
        loop: true,
        //slidesPerView: 1.3,
        spaceBetween: 100,
        centeredSlides: true,
        slidesPerView: "auto",
        navigation: {
            nextEl: "#main_center_info .arrows .right",
            prevEl: "#main_center_info .arrows .left",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

    $('.center_tit li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on')
        CENTERSLIDE.slideTo(idx + 2);
    })


    const TVSLIDE = new Swiper('.tv_slide', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    const HEALTHSLIDE = new Swiper('.health_slide', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    $('.tab_menu .tab li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.tab_area>*').eq(idx).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    });
});

