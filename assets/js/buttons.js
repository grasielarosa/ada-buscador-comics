"use strict";
var firstPage = document.querySelector('#firstPage');
var prevPage = document.querySelector('#prevPage');
var nextPage = document.querySelector('#nextPage');
var lastPage = document.querySelector('#lastPage');
var offset = 0;
var limit = 20;
var count = 1;
firstPage.addEventListener('click', function (e) {
    if (count === 1) {
        firstPage.disabled = true;
    }
    console.log("firstPage");
});
prevPage.addEventListener('click', function (e) {
    console.log("prevPage");
});
nextPage.addEventListener('click', function (e) {
    console.log("nextPage");
});
lastPage.addEventListener('click', function (e) {
    if (count === numPages()) {
        lastPage.setAttribute = 'disabled';
    }
    ;
});
var offsetParam = function () {
    return 10;
};
var numPages = function (totalResults) {
    console.log(Math.ceil(totalResults / limit));
};
