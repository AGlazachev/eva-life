document.addEventListener("DOMContentLoaded", ()=> {
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function setCookie(name, value, options = {}) {
        options = {
            path: '/',
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }
        document.cookie = updatedCookie;
    }

    let cookieNoticeAccept = document.querySelector(".js-accept-age-control"),
        cookieNoticeDisabled = document.querySelector(".js-close-age-control"),
        overlay = document.querySelector(".js-overlay"),
        cookieNotice = document.querySelector(".js-age-control");

    //Добавляем cookie при клике
    cookieNoticeAccept.addEventListener("click", function (e) {
        e.preventDefault();
        cookieNotice.classList.add("hidden");
        overlay.classList.remove('_active-age-control');
        setCookie("ageControl", true, { secure: true, "max-age": 2592000 });
    });
    cookieNoticeDisabled.addEventListener("click", function (e) {
    });


    //Показываем баннер если нет соответствующей cookie
    if (getCookie("ageControl") === undefined) {
        cookieNotice.classList.remove("hidden");
        cookieNotice.style.display = 'grid';
        overlay.classList.add('_active-age-control');
    }
});
