"use strict";

var modal = document.getElementById("modal-sign-up");
var btnStart = document.querySelector(".btn-start");
var btnClose = document.querySelector(".btn-close-modal");

btnStart.addEventListener('click', function () {
    modal.style.display = 'block';
});

btnClose.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});