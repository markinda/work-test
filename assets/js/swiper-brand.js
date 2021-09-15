function swiperBrand () {
    const containerBrand = document.querySelector('.swiper.swiper__brand');

    return new Swiper(containerBrand, {

        slidesPerView: 'auto',
        freeMode: true,
    });
}

swiperBrand();
