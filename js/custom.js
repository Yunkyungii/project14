$(function () {
    // 스크롤 이벤트
    $(function () {
        $(window).on('scroll', function () {
            let sct = $(window).scrollTop();
            sct > 0
                ? $('#header').addClass('on')
                : $('#header').removeClass('on')
        });
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('.scr').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on')
            }
            else {
                $(this).removeClass('on')
            };

        })
    });

    // 섹션
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
        slidesPerView: 2,
        spaceBetween: 16,
    });

    const HEALTHSLIDE = new Swiper('.health_slide', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 3,
        spaceBetween: 8,
    });

    $('.tab_menu .tab li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.tab_area>*').eq(idx).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    });


    $(window).on('resize', function () {
        $('#header .gnb').removeClass('on');
        $('.sub').reomoveArrt('style');
    })

$('#header .gnb button').on('click', function(e){
    e.preventDefault();
    $('#header .gnb').toggleClass('on')
});

    $('#header .gnb .dth1>li>a').on('click', function (e) {
        if ($('#header .gnb .dth1').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).toggleClass('on');
            // $(this).parent().siblings().find('.sub').slideUp();
        }

    });


});

