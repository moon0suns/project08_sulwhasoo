
const mainSlide = new Swiper('.main_slide', {
    loop: true,
    // 💫스와이퍼
    parallax: true,
    speed: 600,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    slideActiveClass: 'on',


    pagination: {
        el: ".sbar",
        type: "progressbar",
    },
});


const leftArrow = document.querySelector('#MainVisual .arrows .left');
leftArrow.addEventListener('click', function () {
    mainSlide.slidePrev()
});

const rightArrow = document.querySelector('#MainVisual .arrows .right');
rightArrow.addEventListener('click', function () {
    mainSlide.slideNext()
});


$(function () {
    $('#MainVisual .pause').on('click', function () {
        $('.#MainVisual .main_slide').trigger('pause');
    });

    $('.#MainVisual .play').on('click', function () {
        $('.#MainVisual .main_slide').trigger('play');
    });
})
