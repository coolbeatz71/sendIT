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

var isElementExist = function isElementExist(element, callback) {
    if (typeof element != 'undefined' && element != null) {
        callback();
    }
};

isElementExist(btnCreateParcel, function () {
    btnCreateParcel.addEventListener('click', function () {
        //open the modal
        modal.style.display = 'block';
    });
});

isElementExist(linkAllParcels, function () {
    linkAllParcels.addEventListener('click', function () {
        allParcels.style.display = 'block';
        transitParcels.style.display = 'none';
        deliveredParcels.style.display = 'none';
        cancelledParcels.style.display = 'none';
    });
});

window.addEventListener('load', function () {
    isElementExist(allParcels, function () {
        allParcels.style.display = 'block';
    });
    isElementExist(transitParcels, function () {
        transitParcels.style.display = 'none';
    });
    isElementExist(deliveredParcels, function () {
        deliveredParcels.style.display = 'none';
    });
    isElementExist(cancelledParcels, function () {
        cancelledParcels.style.display = 'none';
    });
});

isElementExist(linkTransitParcels, function () {
    linkTransitParcels.addEventListener('click', function () {
        allParcels.style.display = 'none';
        transitParcels.style.display = 'block';
        deliveredParcels.style.display = 'none';
        cancelledParcels.style.display = 'none';
    });
});

isElementExist(linkDeliveredParcels, function () {
    linkDeliveredParcels.addEventListener('click', function () {
        allParcels.style.display = 'none';
        transitParcels.style.display = 'none';
        deliveredParcels.style.display = 'block';
        cancelledParcels.style.display = 'none';
    });
});

isElementExist(linkCancelledParcels, function () {
    linkCancelledParcels.addEventListener('click', function () {
        allParcels.style.display = 'none';
        transitParcels.style.display = 'none';
        deliveredParcels.style.display = 'none';
        cancelledParcels.style.display = 'block';
    });
});

isElementExist(btnStart, function () {
    btnStart.addEventListener('click', function () {
        //open the modal
        modal.style.display = 'block';

        //and the signUp form
        signInForm.style.display = 'none';
        signUpForm.style.display = 'block';
    });
});

isElementExist(btnClose, function () {
    btnClose.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});

isElementExist(signInLink, function () {
    signInLink.addEventListener('click', function () {
        //open the modal
        modal.style.display = 'block';

        //and the signIn form
        signUpForm.style.display = 'none';
        signInForm.style.display = 'block';
    });
});

isElementExist(gotoSignIn, function () {
    gotoSignIn.addEventListener('click', function () {
        signUpForm.style.display = 'none';
        signInForm.style.display = 'block';
    });
});

isElementExist(gotoSignUp, function () {
    gotoSignUp.addEventListener('click', function () {
        signInForm.style.display = 'none';
        signUpForm.style.display = 'block';
    });
});

window.addEventListener('click', function (e) {
    isElementExist(modal, function () {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});