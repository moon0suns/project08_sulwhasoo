
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


$('#MainVisual .arrows .left').on('click', function () {
    mainSlide.slidePrev();
});

$('#MainVisual .arrows .right').on('click', function () {
    mainSlide.slideNext();
});




const bestSlide = new Swiper('.best_l_slide', {
    loop: true,
    slidesPerView: 1,
    // spaceBetween: 20,
    speed: 700,
    // direction: "vertical",
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },


    // 반응형갔을때
    breakpoints: {
        540: {
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
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },



    breakpoints: {
        540: {
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

    // 반응형갔을때
    breakpoints: {
        540: {
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

    // $('.tab_content02 .con02').eq(idx).addClass('on')
    //     .siblings().removeClass('on');

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

//  화살표
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

//  화살표
$('.tab_content02 .tab_arrows02 .left').on('click', function () {
    $('.tab_slide02').slick('slickPrev');
})

$('.tab_content02 .tab_arrows02 .right').on('click', function () {
    $('.tab_slide02').slick('slickNext');
})




// 스크롤 업
$('.to_top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600)
});

//   스크롤없애는거
$(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    // 첫번째방법 sct > 1000 ? $('.to_top').fadeIn(1000) : $('.to_top').fadeOut();
    sct > 2000 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
})


AOS.init();


// 반응형 모바일 메뉴바 버튼 나오게 하기
$('.mobile_btn').on('click', function () {
    $('.gnb').toggleClass('on');
    $('#Header').toggleClass('oo');
});


$('.gnb .main_menu>li>a').on('click', function (e) {
    if ($('.gnb').hasClass('on')) {
        e.preventDefault();
        // a눌렀을때 새로고침안되게
        $(this)
            .next()
            .stop()
            .slideToggle();
        // slideToggle(); 누르면 상하 왓다갓다

        //🎈부가기능들
        $(this)
            .parent()
            .siblings()
            .find('.sub')
            .stop()
            .slideUp();
    }
});

// 오작동없게하기?
$(window).on('resize', function () {
    $('.gnb').removeClass('on')
});

// 힐작동하지않게 이벤트에 전파 막아버림
$('.gnb').on('wheel', function (e) {
    if ($('.gnb').hasClass('on')) {
        e.preventDefault();
    }
});