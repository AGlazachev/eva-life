import LazyLoad from "vanilla-lazyload";

document.addEventListener("DOMContentLoaded", function () {
    //LazyLoad
    let lazyLoadInstance = new LazyLoad({
        use_native: true,
        elements_selector: '.lazy'
    });
});
