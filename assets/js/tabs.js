function tabs() {

    const tabs = document.querySelectorAll('.tabs');

    tabs.forEach(itemtabs => {
        if (itemtabs) {

            const btn = itemtabs.querySelectorAll('.tabs__btn')
            const tabsContent = itemtabs.querySelectorAll('.tabs__content')

            btn.forEach(i => {

                i.addEventListener('click', () => {

                    btn.forEach(el => {el.classList.remove('tabs__btn--active')});
                    i.classList.add('tabs__btn--active');
                    const path = i.dataset.tabsPath;

                    tabsContent.forEach(el => {el.classList.remove('tabs__content--active')})

                    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
                });
            });
        }
    });
}

tabs();
