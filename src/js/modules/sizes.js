document.addEventListener('DOMContentLoaded', ()=> {
    let sizeArray = document.querySelectorAll('.js-size-item');

    function hiddenAllSizes() {
        sizeArray.forEach(item => {
            item.classList.remove('_active');
        });
    }

    sizeArray.forEach(item => {
        item.addEventListener('click', ()=> {
            hiddenAllSizes();
            item.classList.add('_active')
        });
    });

    function animationSizes() {
        sizeArray.forEach(item => {
            item.classList.add('_active');
            setTimeout(() => {
                item.classList.remove('_active');
            }, 800)
        });
    }
})