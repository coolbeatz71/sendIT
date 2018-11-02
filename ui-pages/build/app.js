"use strict";

var modal = document.getElementById("modal-sign-up");
var btnStart = document.querySelector(".btn-start");
var btnClose = document.querySelector(".btn-close-modal");
var gotoSignUp = document.querySelector("#goto-sign-up");
var gotoSignIn = document.querySelector("#goto-sign-in");
var signUpForm = document.querySelector("#sign-up-form");
var signInForm = document.querySelector("#sign-in-form");
var signInLink = document.getElementById("sign-in-link");

console.log(signInLink);

btnStart.addEventListener('click', function () {
    //open the modal
    modal.style.display = 'block';

    //and the signUp form
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
});

btnClose.addEventListener('click', function () {
    modal.style.display = 'none';
});

signInLink.addEventListener('click', function () {
    //open the modal
    modal.style.display = 'block';

    //and the signIn form
    signUpForm.style.display = 'none';
    signInForm.style.display = 'block';
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