let modal    = document.getElementById("modal-sign-up");
let btnStart = document.querySelector(".btn-start");
let btnClose = document.querySelector(".btn-close-modal");

btnStart.addEventListener('click', () => {
    modal.style.display = 'block';
});

btnClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if(e.target == modal){
        modal.style.display = 'none';
    }
})