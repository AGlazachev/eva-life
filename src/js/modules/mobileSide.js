let mobileMenuBtn = document.querySelector('.js-mobile-btn'),
    mobileMenu = document.querySelector('.js-mobile-menu'),
    mobileMenuLinks = document.querySelectorAll('.js-mobile-menu a'),
    header = document.querySelector('.header');
    overlay = document.querySelector('.overlay');

function mobileMenuClose() {
    mobileMenu.classList.add('hidden');
    mobileMenuBtn.classList.remove('active');
    overlay.classList.remove('_active');
    document.body.classList.remove('_no-scroll');
}

document.addEventListener("DOMContentLoaded", function () {
    mobileMenuBtn.addEventListener('click', e => {
        e.preventDefault();
        mobileMenuBtn.classList.toggle('active');
        header.classList.toggle('_menuActive');
        mobileMenu.classList.toggle('hidden');
        document.body.classList.toggle('_no-scroll');
        overlay.classList.toggle('_active');
    });

    mobileMenuLinks.forEach(mobileMenuLinks => {
        mobileMenuLinks.addEventListener('click', e => {
            mobileMenuClose();
        });
    })

    overlay.addEventListener('click', e => {
        mobileMenuClose();
        mobileMenuBtn.classList.remove('active');
    });
});
