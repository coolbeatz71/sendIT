"use strict";

var modal = document.getElementById("modal-sign-up");
var btnStart = document.querySelector(".btn-start");
var btnClose = document.querySelector(".btn-close-modal");
var gotoSignUp = document.querySelector("#goto-sign-up");
var gotoSignIn = document.querySelector("#goto-sign-in");
var signUpForm = document.querySelector("#sign-up-form");
var signInForm = document.querySelector("#sign-in-form");

btnStart.addEventListener('click', function () {
    modal.style.display = 'block';
});

btnClose.addEventListener('click', function () {
    modal.style.display = 'none';
});

gotoSignIn.addEventListener('click', function () {
    signUpForm.style.display = 'none';
    signInForm.style.display = 'block';
});

gotoSignUp.addEventListener('click', function () {
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
});

window.addEventListener('click', function (e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});