function swiperNews () {
    const containerNews = document.querySelector('.swiper.swiper__news');
    const btnNewsPrev = document.querySelector('.news__arrow-item-prev');
    const btnNewsNext = document.querySelector('.news__arrow-item-next');

    return new Swiper(containerNews, {

        loop: true,
        speed: 800,
        slidesPerView: 3,

        navigation: {
            nextEl: btnNewsNext,
            prevEl: btnNewsPrev,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
                spaceBetween: 46
            },
            // when window width is >= 640px
            1024: {
                spaceBetween: 56,
                slidesPerView: 3,
            }
          }
    });
}

swiperNews();
