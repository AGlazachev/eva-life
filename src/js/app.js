import Vue from 'vue/dist/vue.js';
Vue.config.devtools = true

import cookies from './custom/cookies';

import autoHeight from './modules/autoHeight';
import lazyLoad from './modules/lazyLoad';
import mobileSide from './modules/mobileSide';
import inputMask from './modules/inpitMask';
import accordion from './modules/accordion';
import popup from './modules/popup';
import sliders from './modules/sliders';
import fly_cart from './modules/fly-cart';
import select2 from './modules/select2';
import customOrder from './modules/customOrder';
import order from './modules/order';
import sizes from './modules/sizes';
import modal from './modules/modal';

require('./scripts');

document.addEventListener('DOMContentLoaded', ()=> {
    let themeSwitchers = document.querySelectorAll('.themes-switcher__btn');

    themeSwitchers.forEach(item => {
        item.addEventListener('click', ()=> {
            switch(item.getAttribute('data-type')) {
                case 'theme-white':
                    document.body.classList.remove('_bg');
                    document.body.classList.remove('_bg-light');
                    break;
                case 'theme-grad':
                    document.body.classList.add('_bg');
                    document.body.classList.remove('_bg-light');
                    break;
                case 'theme-grad-light':
                    document.body.classList.add('_bg-light');
                    document.body.classList.remove('_bg');
                    break;
            }
        })
    })
})
