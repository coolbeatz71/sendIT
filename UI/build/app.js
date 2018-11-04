"use strict";

var modal = document.querySelector("#modal-sign-up");
var btnStart = document.querySelector(".btn-start");
var btnClose = document.querySelector(".btn-close-modal");
var gotoSignUp = document.querySelector("#goto-sign-up");
var gotoSignIn = document.querySelector("#goto-sign-in");
var signUpForm = document.querySelector("#sign-up-form");
var signInForm = document.querySelector("#sign-in-form");
var signInLink = document.querySelector("#sign-in-link");
var btnCreateParcel = document.querySelector(".btn-create");

var linkAllParcels = document.getElementById('link-all-parcels');
var linkTransitParcels = document.getElementById('link-transit-parcels');
var linkDeliveredParcels = document.getElementById('link-delivered-parcels');
var linkCancelledParcels = document.getElementById('link-cancelled-parcels');

var allParcels = document.getElementById('all-parcels');
var transitParcels = document.getElementById('transit-parcels');
var deliveredParcels = document.getElementById('delivered-parcels');
var cancelledParcels = document.getElementById('cancelled-parcels');

var signInAdmin = document.querySelector("#sign-in-admin");
var signInFormAdmin = document.querySelector("#sign-in-form-admin");

/*
    check if an element is in the DOM
    @params element
    @params callback
 */
var isElementExist = function isElementExist(element, callback) {
    if (typeof element != 'undefined' && element != null) {
        callback();
    }
};

/**
 * change the display of an HTML element 
 * @param  DOM element 
 * @param  string value
 */
var setDisplay = function setDisplay(element, value) {
    element.style.display = value;
};

/*
    * open a modal page
 */
var openModal = function openModal() {
    setDisplay(modal, 'block');
};

/**
 * display the sign up modal page
 */
var _gotoSignUp = function _gotoSignUp() {
    setDisplay(signUpForm, 'block');
    setDisplay(signInForm, 'none');
};

/**
 * display the sign in modal page
 */
var _gotoSignIn = function _gotoSignIn() {
    setDisplay(signInForm, 'block');
    setDisplay(signUpForm, 'none');
};

var _gotoSignInAdmin = function _gotoSignInAdmin() {
    setDisplay(signInFormAdmin, 'block');
    setDisplay(signInForm, 'none');
    setDisplay(signUpForm, 'none');
};

isElementExist(btnCreateParcel, function () {
    btnCreateParcel.addEventListener('click', openModal());
});

isElementExist(linkAllParcels, function () {
    linkAllParcels.addEventListener('click', function () {

        setDisplay(allParcels, 'block');
        setDisplay(transitParcels, 'none');
        setDisplay(deliveredParcels, 'none');
        setDisplay(cancelledParcels, 'none');
    });
});

window.addEventListener('load', function () {
    isElementExist(allParcels, function () {
        setDisplay(allParcels, 'block');
    });
    isElementExist(transitParcels, function () {
        setDisplay(transitParcels, 'none');
    });
    isElementExist(deliveredParcels, function () {
        setDisplay(deliveredParcels, 'none');
    });
    isElementExist(cancelledParcels, function () {
        setDisplay(cancelledParcels, 'none');
    });
});

isElementExist(linkTransitParcels, function () {
    linkTransitParcels.addEventListener('click', function () {
        setDisplay(allParcels, 'none');
        setDisplay(transitParcels, 'block');
        setDisplay(deliveredParcels, 'none');
        setDisplay(cancelledParcels, 'none');
    });
});

isElementExist(linkDeliveredParcels, function () {
    linkDeliveredParcels.addEventListener('click', function () {
        setDisplay(allParcels, 'none');
        setDisplay(transitParcels, 'none');
        setDisplay(deliveredParcels, 'block');
        setDisplay(cancelledParcels, 'none');
    });
});

isElementExist(linkCancelledParcels, function () {
    linkCancelledParcels.addEventListener('click', function () {
        setDisplay(allParcels, 'none');
        setDisplay(transitParcels, 'none');
        setDisplay(deliveredParcels, 'none');
        setDisplay(cancelledParcels, 'block');
    });
});

isElementExist(btnStart, function () {
    btnStart.addEventListener('click', function () {
        //open the modal
        openModal();

        //and the signUp form
        _gotoSignUp();
    });
});

isElementExist(btnClose, function () {
    btnClose.addEventListener('click', function () {
        setDisplay(modal, 'none');
    });
});

isElementExist(signInLink, function () {
    signInLink.addEventListener('click', function () {
        //open the modal
        openModal();

        //and the signIn form
        _gotoSignIn();
    });
});

isElementExist(gotoSignIn, function () {
    gotoSignIn.addEventListener('click', _gotoSignIn());
});

isElementExist(gotoSignUp, function () {
    gotoSignUp.addEventListener('click', _gotoSignUp());
});

window.addEventListener('click', function (e) {
    isElementExist(modal, function () {
        if (e.target == modal) {
            setDisplay(modal, 'none');
        }
    });
});

isElementExist(signInAdmin, function () {
    signInAdmin.addEventListener('click', function () {
        //open the modal
        openModal();

        //and the signIn form admin
        _gotoSignInAdmin();
    });
});