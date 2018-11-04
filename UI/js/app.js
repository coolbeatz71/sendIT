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

let signInAdmin     = document.querySelector("#sign-in-admin");
let signInFormAdmin = document.querySelector("#sign-in-form-admin");

/*
    check if an element is in the DOM
    @params element
    @params callback
 */
let isElementExist = (element, callback) =>{
    if(typeof(element) != 'undefined' && element != null){
        callback();
    }
}

/**
 * change the display of an HTML element 
 * @param  DOM element 
 * @param  string value
 */
let setDisplay = (element, value) => {
    element.style.display = value;
}

/*
    * open a modal page
 */
let openModal = () => {
    setDisplay(modal, 'block'); 
}

/**
 * display the sign up modal page
 */
let _gotoSignUp = () => {
    setDisplay(signUpForm, 'block');
    setDisplay(signInForm, 'none');
}

/**
 * display the sign in modal page
 */
let _gotoSignIn = () => {
    setDisplay(signInForm, 'block');
    setDisplay(signUpForm, 'none');
}

let _gotoSignInAdmin = () => {
    setDisplay(signInFormAdmin, 'block');
    setDisplay(signInForm, 'none');
    setDisplay(signUpForm, 'none');
}

isElementExist(btnCreateParcel, () => {
    btnCreateParcel.addEventListener('click', openModal());
});

isElementExist(linkAllParcels, () => {
    linkAllParcels.addEventListener('click', () => {

        setDisplay(allParcels, 'block');
        setDisplay(transitParcels, 'none');
        setDisplay(deliveredParcels, 'none');
        setDisplay(cancelledParcels, 'none');

    });
});

window.addEventListener('load', () => {
    isElementExist(allParcels, ()       => { setDisplay(allParcels, 'block'); });
    isElementExist(transitParcels, ()   => { setDisplay(transitParcels, 'none'); });
    isElementExist(deliveredParcels, () => { setDisplay(deliveredParcels, 'none'); });
    isElementExist(cancelledParcels, () => { setDisplay(cancelledParcels, 'none'); });
});

isElementExist(linkTransitParcels, () => {
    linkTransitParcels.addEventListener('click', () => {
        setDisplay(allParcels, 'none');
        setDisplay(transitParcels, 'block');
        setDisplay(deliveredParcels, 'none');
        setDisplay(cancelledParcels, 'none');
    });
});

isElementExist(linkDeliveredParcels, () => {
    linkDeliveredParcels.addEventListener('click', () => {
        setDisplay(allParcels, 'none');
        setDisplay(transitParcels, 'none');
        setDisplay(deliveredParcels, 'block');
        setDisplay(cancelledParcels, 'none');
    });    
});

isElementExist(linkCancelledParcels, () => {
    linkCancelledParcels.addEventListener('click', () => {
        setDisplay(allParcels, 'none');
        setDisplay(transitParcels, 'none');
        setDisplay(deliveredParcels, 'none');
        setDisplay(cancelledParcels, 'block');
    });
});

isElementExist(btnStart, () => {
    btnStart.addEventListener('click', () => {
        //open the modal
        openModal();

        //and the signUp form
        _gotoSignUp();
    });
});

isElementExist(btnClose, () => {
    btnClose.addEventListener('click', () => {
        setDisplay(modal, 'none');
    });
});

isElementExist(signInLink, () => {
    signInLink.addEventListener('click', () => {
        //open the modal
        openModal();

        //and the signIn form
        _gotoSignIn();

    });
});

isElementExist(gotoSignIn, () => {
    gotoSignIn.addEventListener('click', _gotoSignIn());
});

isElementExist(gotoSignUp, () => {
    gotoSignUp.addEventListener('click', _gotoSignUp());
});

window.addEventListener('click', (e) => {
    isElementExist(modal, () => {
        if(e.target == modal){
            setDisplay(modal, 'none');
        }
    });
});

isElementExist(signInAdmin, () => {
    signInAdmin.addEventListener('click', () => {
        //open the modal
        openModal();

        //and the signIn form admin
        _gotoSignInAdmin();
    });
});