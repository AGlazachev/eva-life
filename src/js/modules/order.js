document.addEventListener("DOMContentLoaded", function () {
    let btnOrder = document.querySelectorAll('.js-order-tabs-btn button'),
        firstStep = document.querySelector('#firstStep'),
        secondStep = document.querySelector('#secondStep'),
        thirdStep = document.querySelector('#thirdStep'),
        firstPath = document.querySelector('.js-path-first'),
        secondPath = document.querySelector('.js-path-second'),
        thirdPath = document.querySelector('.js-path-third'),
        allPath = document.querySelectorAll('.js-path-all'),
        goFirstStep = document.querySelector('.js-go-first-step'),
        goSecondStep = document.querySelectorAll('.js-go-second-step'),
        goThirdStep = document.querySelector('.js-go-third-step'),
        allSteps = document.querySelectorAll('.js-order-steps');

    function disableBtnActive() {
        btnOrder.forEach(item => {
            item.classList.remove('_active');
        });
    }
    btnOrder.forEach(item => {
        item.addEventListener('click', ()=>{
            disableBtnActive();
            item.classList.add('_active');
        });
    });

    function disableAllSteps() {
        allSteps.forEach(item => {
            item.classList.add('hidden');
        });
        allPath.forEach(item => {
            item.classList.remove('_active');
        });
    }
    function changeToFirstStep() {
        disableAllSteps();
        firstStep.classList.remove('hidden');
        firstPath.classList.add('_active');
    }
    function changeToSecondStep() {
        disableAllSteps();
        secondStep.classList.remove('hidden');
        secondPath.classList.add('_active');
    }
    function changeToThirdStep() {
        disableAllSteps();
        thirdStep.classList.remove('hidden');
        thirdPath.classList.add('_active');
    }

    goFirstStep.addEventListener('click', ()=> {
        changeToFirstStep();
    });
    goSecondStep.forEach(item => {
        item.addEventListener('click', ()=>{
            changeToSecondStep();
        });
    });
    goThirdStep.addEventListener('click', ()=> {
        changeToThirdStep();
    });
});
