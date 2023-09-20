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

    const SERVICESLIDE = new Swiper('.service_slide', {
        // loop: true,
        slidesPerView: 8,
        navigation: {
            nextEl: ".service_arrows .right",
            prevEl: ".service_arrows .left",
        },
    })

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
        on: {
            slideChangeTransitionStart: function () {
                // console.log(idx, this.activeIndex)
                $('.center_tit li')
                    .eq(this.activeIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on')
            }
        }
    });

    $('.center_tit li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        // console.log(idx, CENTERSLIDE.realIndex);
        $(this).addClass('on').siblings().removeClass('on')
        CENTERSLIDE.slideTo(idx);
    })

    const TEXTSLIDE = new Swiper('.text_slide', {
        // loop: true,
    });

    CENTERSLIDE.controller.control = TEXTSLIDE;
    TEXTSLIDE.controller.control = CENTERSLIDE;



    const RESLIDE = new Swiper('.research_slide', {
        slidesPerView: 3,
        spaceBetween: 20,
    })

    const HEALTHSLIDE = new Swiper('.health_slide', {
        slidesPerView: 1,
    });


    // 탭메뉴 - main board
    $('#main_board .notice_tab li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('#main_board .content .swiper').eq(idx).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    });

    const SCHSLIDE = new Swiper('.schedule_slide', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: "#main_board .arrows .right",
            prevEl: "#main_board .arrows .left",
        },
    });
    const SRYSLIDE = new Swiper('.story_slide', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: "#main_board .arrows .right",
            prevEl: "#main_board .arrows .left",
        },
    });
    const NOTICESLIDE = new Swiper('.notice_slide', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: "#main_board .arrows .right",
            prevEl: "#main_board .arrows .left",
        },
    });
    const NEWSSLIDE = new Swiper('.news_slide', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: "#main_board .arrows .right",
            prevEl: "#main_board .arrows .left",
        },
    });

    const TVSLIDE = new Swiper('.tv_slide', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: ".health_tv .arrows .right",
            prevEl: ".health_tv  .arrows .left",
        },
    });


    $(window).on('resize', function () {
        $('#header .gnb').removeClass('on');
        // $('.sub').reomoveArrt('style');
    })

    $('#header .gnb button').on('click', function (e) {
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

