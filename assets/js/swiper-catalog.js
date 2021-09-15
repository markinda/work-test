function swiperCatalog () {
    const containerBrand = document.querySelector('.swiper.swiper__catalog');
    const btnCatalogPrev = document.querySelector('.catalog__arrow-prev');
    const btnCatalogNext = document.querySelector('.catalog__arrow-next');

    return new Swiper(containerBrand, {

        slidesPerView: 'auto',
        freeMode: true,
        navigation: {
            nextEl: btnCatalogNext,
            prevEl: btnCatalogPrev,
        },
    });
}

swiperCatalog();