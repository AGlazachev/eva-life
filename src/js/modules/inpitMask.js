import Inputmask from "inputmask";

document.addEventListener('DOMContentLoaded', () => {
    Inputmask({ regex: "^(\\+7|8)\\ \\([\\d]{2,3}\\)\\ [\\d]{2,3}-[\\d]{2}-[\\d]{2}$" }).mask('.phone');
});