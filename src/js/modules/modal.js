document.addEventListener("DOMContentLoaded", function () {
    let overlay = document.querySelector(".js-overlay"),
        modals = document.querySelectorAll('.modal'),
        modalsLink = document.querySelectorAll("[data-type='modal']"),
        modalClose = document.querySelectorAll(".modal__close");

    //Функция закрытия модалок
    function closeModal() {
        Array.from(modals).forEach((modals) => {
            modals.style.display = 'none';
        });
        overlay.style.display = 'none';
        document.body.style.overflow = 'initial';
    }

    //Открытие модалки
    Array.from(modalsLink).forEach((modalsLink) => {
        modalsLink.addEventListener("click", function (e) {
            e.preventDefault();
            closeModal();
            let modalName = modalsLink.getAttribute('data-modal-link'),
                modalItem = document.querySelector(`[data-modal='${modalName}']`);
            modalItem.style.display = 'block';
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    //Закрытие при клике на Overlay
    overlay.addEventListener("click", function (e) {
        closeModal();
    });

    // Закрытие при клике на кнопку закрытия
    Array.from(modalClose).forEach((modalClose) => {
        modalClose.addEventListener("click", function (e) {
            e.preventDefault();
            closeModal();
        });
    });
});
