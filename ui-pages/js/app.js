let modal      = document.querySelector("#modal-sign-up");
let btnStart   = document.querySelector(".btn-start");
let btnClose   = document.querySelector(".btn-close-modal");
let gotoSignUp = document.querySelector("#goto-sign-up");
let gotoSignIn = document.querySelector("#goto-sign-in");
let signUpForm = document.querySelector("#sign-up-form");
let signInForm = document.querySelector("#sign-in-form");
let signInLink = document.querySelector("#sign-in-link");
let btnCreateParcel = document.querySelector(".btn-create");

let linkAllParcels       = document.getElementById('link-all-parcels');
let linkTransitParcels   = document.getElementById('link-transit-parcels');
let linkDeliveredParcels = document.getElementById('link-delivered-parcels');
let linkCancelledParcels = document.getElementById('link-cancelled-parcels');

let allParcels       = document.getElementById('all-parcels');
let transitParcels   = document.getElementById('transit-parcels');
let deliveredParcels = document.getElementById('delivered-parcels');
let cancelledParcels = document.getElementById('cancelled-parcels');

let isElementExist = (element, callback) =>{
    if(typeof(element) != 'undefined' && element != null){
        callback();
    }
}

isElementExist(btnCreateParcel, () => {
    btnCreateParcel.addEventListener('click', () => {
       //open the modal
        modal.style.display = 'block'; 
    });
});

isElementExist(linkAllParcels, () => {
    linkAllParcels.addEventListener('click', () => {
        allParcels.style.display = 'block';
        transitParcels.style.display = 'none';
        deliveredParcels.style.display = 'none';
        cancelledParcels.style.display = 'none';
    });
});

window.addEventListener('load', () => {
    isElementExist(allParcels, () => { allParcels.style.display = 'block' });
    isElementExist(transitParcels, () => { transitParcels.style.display = 'none' });
    isElementExist(deliveredParcels, () => { deliveredParcels.style.display = 'none' });
    isElementExist(cancelledParcels, () => { cancelledParcels.style.display = 'none' });
});

isElementExist(linkTransitParcels, () => {
    linkTransitParcels.addEventListener('click', () => {
        allParcels.style.display = 'none';
        transitParcels.style.display = 'block';
        deliveredParcels.style.display = 'none';
        cancelledParcels.style.display = 'none';
    });
});

isElementExist(linkDeliveredParcels, () => {
    linkDeliveredParcels.addEventListener('click', () => {
        allParcels.style.display = 'none';
        transitParcels.style.display = 'none';
        deliveredParcels.style.display = 'block';
        cancelledParcels.style.display = 'none';
    });    
});

isElementExist(linkCancelledParcels, () => {
    linkCancelledParcels.addEventListener('click', () => {
        allParcels.style.display = 'none';
        transitParcels.style.display = 'none';
        deliveredParcels.style.display = 'none';
        cancelledParcels.style.display = 'block';
    });
});

isElementExist(btnStart, () => {
    btnStart.addEventListener('click', () => {
        //open the modal
        modal.style.display = 'block';

        //and the signUp form
        signInForm.style.display = 'none';
        signUpForm.style.display = 'block';
    });
});

isElementExist(btnClose, () => {
    btnClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});

isElementExist(signInLink, () => {
    signInLink.addEventListener('click', () => {
        //open the modal
        modal.style.display = 'block';

        //and the signIn form
        signUpForm.style.display = 'none';
        signInForm.style.display = 'block';

    });
});

isElementExist(gotoSignIn, () => {
    gotoSignIn.addEventListener('click', () => {
        signUpForm.style.display = 'none';
        signInForm.style.display = 'block';
    });
});

isElementExist(gotoSignUp, () => {
    gotoSignUp.addEventListener('click', () => {
        signInForm.style.display = 'none';
        signUpForm.style.display = 'block';
    });
});

window.addEventListener('click', (e) => {
    isElementExist(modal, () => {
        if(e.target == modal){
            modal.style.display = 'none';
        }
    });
})