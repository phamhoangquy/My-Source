$(document).ready(function() {
    setBackgroundElement();

    // header
    mappingMenu();
    menuMobile();

    // swiper
    swiperInit();

});

const InsertBd = () => {
    $(".breadcrumb-wrapper").appendTo("#pagebanner .box-text");
};

function height(el) {
    var height = 0;
    $(el).each(function() {
        var thisHeight = $(this).height();
        if (thisHeight > height) {
            height = thisHeight;
        }
        setTimeout(() => {
            $(el).height(height)
        }, 100)
    })
}

let header = {
    scrollActive: function() {
        let height = $('header').height()
        if ($(window).scrollTop() > height) {
            $('header').addClass('active')
        } else {
            $('header').removeClass('active')
        }
    },
}

function setBackgroundElement() {
    $('[setBackground]').each(function() {
        var background = $(this).attr('setBackground')
        $(this).css({
            "background-image": "url(" + background + ")",
            "background-size": "cover",
            "background-position": "center center"
        });
    });
    $('[setBackgroundRepeat]').each(function() {
        var background = $(this).attr('setBackgroundRepeat')
        $(this).css({
            "background-image": "url(" + background + ")",
            "background-repeat": "repeat"
        });
    });
}

function mappingMenu() {
    $('header .bottom-wrapper .list-main-menu').mapping({
        mobileWrapper: 'header .mobile-wrap',
        mobileMethod: 'appendTo',
        desktopWrapper: 'header .bottom-wrapper .right-wrap .main-account',
        desktopMethod: 'insertBefore',
        breakpoint: 1025
    });
}

// function menuMobile() {
//     $('header .button-hambuger').on('click', function() {
//         if ($('header .button-hambuger .burger-bt-inner span').css('opacity') == 1) {
//             $('header .button-hambuger').addClass('close')
//             $('header .mobile-wrap').addClass('active')
//         } else if ($('header .button-hambuger .burger-bt-inner span').css('opacity') == 0) {
//             $('header .button-hambuger').removeClass('close')
//             $('header .mobile-wrap').removeClass('active')
//         }
//     });
// }

function swiperInit() {
    // var homerSwiper = new Swiper(".home-banner .swiper-container", {
    //     // Optional parameters
    //     speed: 1205,
    //     slidesPerView: 1,
    //     autoplay: {
    //         delay: 3000
    //     },
    //     pagination: {
    //         el: ".home-banner-pagination",
    //         type: "bullets",
    //         clickable: "true"
    //     }
    // });
}

$(document).on('scroll', function() {
    header.scrollActive()
});