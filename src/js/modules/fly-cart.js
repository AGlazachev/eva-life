document.addEventListener('DOMContentLoaded', () => {
    let flyCartBtn = document.querySelector('.js-cart-btn'),
        overlayCart = document.querySelector('.js-overlay-cart'),
        flyCartClose = document.querySelector('.js-close-fly-cart'),
        flyCart = document.querySelector('.fly-cart');

    function visibleFlyCart() {
        flyCart.classList.toggle('hidden');
        overlayCart.classList.toggle('_active');
        document.querySelector('.body').classList.toggle('_no-scroll');
    }

    flyCartBtn.addEventListener('click', () => {
        visibleFlyCart();
    });

    flyCartClose.addEventListener('click', () => {
        visibleFlyCart();
    })

    overlayCart.addEventListener('click', () => {
        visibleFlyCart();
    })
});