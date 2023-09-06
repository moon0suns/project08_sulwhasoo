
const mainSlide = new Swiper('.main_slide', {
    loop: true,
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


$('#MainVisual .arrows .left').on('click', function () {
    mainSlide.slidePrev();
});

$('#MainVisual .arrows .right').on('click', function () {
    mainSlide.slideNext();
});




const bestSlide = new Swiper('.best_l_slide', {
    loop: true,
    slidesPerView: 1,
    speed: 700,


    breakpoints: {
        768: {
            slidesPerView: 1,
        },

    },
});


const bestSlide2 = new Swiper('.best_r_slide', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 700,
    effect: "fade",

    breakpoints: {
        768: {
            slidesPerView: 1,
        },

    },
});


bestSlide2.controller.control = bestSlide;
bestSlide.controller.control = bestSlide2;


$('#MainBest .arrows .left').on('click', function () {
    bestSlide.slidePrev();
});

$('#MainBest .arrows .right').on('click', function () {
    bestSlide.slideNext();
});


const proSlide = new Swiper('.pro_slide', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".pbar",
        type: "progressbar",
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
        },

    },
})

$('#MainProduct .arrows .left').on('click', function () {
    proSlide.slidePrev();
});

$('#MainProduct .arrows .right').on('click', function () {
    proSlide.slideNext();
});




$('.tab_link li').on('click', function (event) {
    event.preventDefault();
    let idx = ($(this).index()) //0,1,2


    $(this).addClass('on')
        .siblings().removeClass('on');

    $('.tab_area .content').eq(idx).addClass('on')
        .siblings().removeClass('on');

    console.log(event, event.target, event.currentTarget, $(this), $(this).index())

});




// 1 북촌 탭

$('.tab_slide01').on('init afterChange', function (e, s, c) {
    console.log(c);
    $('.tab_content .itm').eq(c).addClass('on')
        .siblings().removeClass('on')
});


$('.tab_slide01').slick({
    centerMode: true,
    centerPadding: "300px",

    arrows: false,
    dots: true
});

$('.tab_content .tab_arrows01 .left').on('click', function () {
    $('.tab_slide01').slick('slickPrev');
})

$('.tab_content .tab_arrows01 .right').on('click', function () {
    $('.tab_slide01').slick('slickNext');
})




// 2 도산 탭

$('.tab_slide02').on('init afterChange', function (e, s, c) {
    console.log(c);
    $('.tab_content02 .itm').eq(c).addClass('on')
        .siblings().removeClass('on')
});


$('.tab_slide02').slick({
    centerMode: true,
    centerPadding: "300px",

    arrows: false,
    dots: true
});

$('.tab_content02 .tab_arrows02 .left').on('click', function () {
    $('.tab_slide02').slick('slickPrev');
})

$('.tab_content02 .tab_arrows02 .right').on('click', function () {
    $('.tab_slide02').slick('slickNext');
})




$('.to_top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600)
});

$(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    sct > 2000 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
})




$('.mobile_btn').on('click', function () {
    $('.gnb').toggleClass('on');
    $(this).toggleClass('on');
    $('#Header').toggleClass('oo');
});


$('.gnb .main_menu>li>a').on('click', function (e) {
    if ($('.gnb').hasClass('on')) {
        e.preventDefault();
        $(this)
            .next()
            .stop()
            .slideToggle();

        $(this)
            .parent()
            .siblings()
            .find('.sub')
            .stop()
            .slideUp();
    }
});

$(window).on('resize', function () {
    $('.gnb').removeClass('on')
});

$('.gnb').on('wheel', function (e) {
    if ($('.gnb').hasClass('on')) {
        e.preventDefault();
    }
});