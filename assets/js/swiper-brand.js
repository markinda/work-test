function swiperBrand () {
    const containerBrand = document.querySelector('.swiper.swiper__brand');

    return new Swiper(containerBrand, {

        slidesPerView: 'auto',
        freeMode: true,
    });
}

swiperBrand();


function link() {
    const btn = document.querySelector('.brand__btn-text');
    const btnLink = document.querySelectorAll('.brand__name');


    btnLink.forEach(item => {
        item.addEventListener('click', () => {
            btnLink.forEach(p => {
                p.classList.remove('brand__name--active');
            })

            item.classList.add('brand__name--active');

            const value = item.getAttribute("data-link");
            if (!value) return;
            btn.href = value;
        })
    })
}

link();