let modal      = document.getElementById("modal-sign-up");
let btnStart   = document.querySelector(".btn-start");
let btnClose   = document.querySelector(".btn-close-modal");
let gotoSignUp = document.querySelector("#goto-sign-up");
let gotoSignIn = document.querySelector("#goto-sign-in");
let signUpForm = document.querySelector("#sign-up-form");
let signInForm = document.querySelector("#sign-in-form");

btnStart.addEventListener('click', () => {
    modal.style.display = 'block';
});

btnClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

gotoSignIn.addEventListener('click', () => {
    signUpForm.style.display = 'none';
    signInForm.style.display = 'block';
});

gotoSignUp.addEventListener('click', () => {
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
});

window.addEventListener('click', (e) => {
    if(e.target == modal){
        modal.style.display = 'none';
    }
})