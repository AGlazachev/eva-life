document.addEventListener('DOMContentLoaded', () => {
    let orderItem = document.querySelectorAll('.js-order');
    let orderItemCompleted = document.querySelectorAll('.p-history__order-list._completed .js-order');
    orderItem.forEach(item => {
        item.addEventListener('click', ()=> {
            item.querySelector('.js-order-body').classList.toggle('hidden');
        });
    });
    orderItemCompleted.forEach(item => {
        item.querySelector('.js-order-body').classList.toggle('hidden');
    });
})