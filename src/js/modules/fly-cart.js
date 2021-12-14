import Inputmask from "inputmask";

document.addEventListener('DOMContentLoaded', () => {
    let flyCartBtn = document.querySelector('.js-cart-btn'),
        overlay = document.querySelector('.js-overlay'),
        flyCartClose = document.querySelector('.js-close-fly-cart'),
        flyCart = document.querySelector('.fly-cart');

    function visibleFlyCart() {
        flyCart.classList.toggle('hidden');
        overlay.classList.toggle('_active');
        document.querySelector('.body').classList.toggle('_no-scroll');
    }

    flyCartBtn.addEventListener('click', () => {
        visibleFlyCart();
    });

    flyCartClose.addEventListener('click', () => {
        visibleFlyCart();
    })

    overlay.addEventListener('click', () => {
        visibleFlyCart();
        overlay.classList.remove('_active');
    })
});