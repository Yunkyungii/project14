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
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 80,
    });
})