document.addEventListener('DOMContentLoaded', () => {
    let accordionItem = document.querySelectorAll('.accordion__item'),
        panel;

    //Управление анимацией
    function accordionPlusAnimation(btnItem) {
        if (btnItem.classList.contains('_inactive')) {
            btnItem.classList.remove('_inactive');
            btnItem.classList.remove('_active');
            btnItem.classList.add('_active');
        } else if (btnItem.classList.contains('_active')) {
            btnItem.classList.add('_inactive');
        } else {
            btnItem.classList.add('_active');
            btnItem.classList.remove('_inactive');
        }
    }

    //Закрытие всех элементов при открытии нового
    function accordionCloseAll(itemIndex) {
        accordionItem.forEach((item, index) => {
            panel = item.querySelector('.accordion__text');
            if (index !== itemIndex) {
                item.classList.remove('_active');
                panel.style.maxHeight = null;
            }
        })
    }

    accordionItem.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            accordionCloseAll(index);
            panel = item.querySelector('.accordion__text');
            item.classList.toggle('_active');

            //Открытие и закрытие аккордеона
            if (!item.classList.contains('_active')) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
            accordionPlusAnimation(item.querySelector('.btn-plus'));
        });
    })
});
