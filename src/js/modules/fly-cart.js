import Inputmask from "inputmask";

document.addEventListener('DOMContentLoaded', () => {
    let flyCartBtn = document.querySelector('.js-cart-btn'),
        flyCartClose = document.querySelector('.js-close-fly-cart'),
        flyCart = document.querySelector('.fly-cart');

    function visibleFlyCart() {
        flyCart.classList.toggle('hidden');
        document.querySelector('.body').classList.toggle('_no-scroll');
    }

    flyCartBtn.addEventListener('click', () => {
        visibleFlyCart();
    });

    flyCartClose.addEventListener('click', () => {
        visibleFlyCart();
    })
});