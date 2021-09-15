function accordion() {

    // Ищем все элементы с классом accordion__btn
    const items = document.querySelectorAll('.accordion__btn');

    // Перебераем массив items
    items.forEach(item => {

        // Навешиваем событие клик
        item.addEventListener('click', () => {

            // В переменную записывает родителя класса .accordion__btn
            const parent = item.closest('.accordion');

            /*
            * условный оперватор if else
            * если условие выполнилось, вызывает метод close() если нет open()
            */
            contains(parent) ? close(parent) : open(parent);
        })
    });

    function contains(parent) {
        /*
        * Функция возвращает true or false
        * Существует ли класс accordion--active у родителя?
        */
        return parent.classList.contains('accordion--active');
    }

    function open(parent) {
        // Вызываем метод
        removeActive();

        // К родителю добавляем класс accordion--active
        parent.classList.add('accordion--active');
    }

    function close(parent) {
        // У родителю удаляем класс accordion--active
        parent.classList.remove('accordion--active');
    }

    // Функция нужна чтобы закрыть предыдущий открытый accordion
    function removeActive() {
        // Находим все элементы с классами .accordion.accordion--active
        let itemsActive = document.querySelectorAll('.accordion.accordion--active');

        // Перебираем массив всех элементов
        itemsActive.forEach(active => {

            // Удаляем у всех класс accordion--active
            active.classList.remove('accordion--active');
        });
    }
}

accordion();