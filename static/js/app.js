// --------------- Swiper library -------------
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 5,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        }
    }
});


$(document).ready(function(){
    
    $(window).scroll(function(){
        let scrollTop = $(this).scrollTop();
        if(scrollTop > 45){
            $('.banner').addClass('sticky-top');
            $('.nav').css({'border':'none'})
            $('.nav a').css('color', '#000')
            $('.logoLeft').css('color', '#06A3DA')
            $('.fa-bars').css('color', '#06A3DA')
        } else {
            $('.banner').removeClass('sticky-top');
            $('.nav a').css('color', '#EEF9FF')
            $('.logoLeft').css('color', '#EEF9FF')
            $('.fa-bars').css('color', '#EEF9FF')
        }
    })

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times')
        $('.nav ul').toggleClass('active')
    })

    // --------------- Counter Up library -------------
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // --------------- WOW-Animate CSS library -------------
    new WOW().init();

    // --------------- AOS library -------------
    AOS.init({
        duration: 700,
    });
});


var swiper = new Swiper(".swiper-testimoniol", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        }
    }
});




let swiperWrapper = document.querySelector('.mm110')

let imgArray = ["vendor-1.jpg","vendor-2.jpg","vendor-3.jpg",
                "vendor-4.jpg","vendor-5.jpg","vendor-6.jpg",
                "vendor-7.jpg","vendor-8.jpg","vendor-9.jpg"]  
    
    imgArray.forEach(item => {
        let divElem = document.createElement('div')
        let imgElem = document.createElement('img')
        divElem.className = 'swiper-slide'
        imgElem.src = `./images/${item}`
        divElem.append(imgElem)
        swiperWrapper.append(divElem)
    })


    var swiper = new Swiper(".swiper-customer", {
        spaceBetween: 60,
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            578: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 6
            },
            992: {
                slidesPerView: 8
            }
        }
    });