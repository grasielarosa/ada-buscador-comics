"use strict";
var btnPages = document.querySelector("#btnPages");
var firstPage = document.querySelector("#firstPage");
var prevPage = document.querySelector("#prevPage");
var nextPage = document.querySelector("#nextPage");
var lastPage = document.querySelector("#lastPage");
var offset = 0;
var limit = 20;
var total;
var offsetParam = function (e) {
    var el = e.target;
    if (el == firstPage) {
        offset = 0;
        onChangeHandle(e);
    }
    else if (el === prevPage) {
        offset -= 20;
        onChangeHandle(e);
    }
    else if (el == nextPage) {
        offset += 20;
        onChangeHandle(e);
    }
    else if (el === lastPage) {
        offset = total - limit;
        onChangeHandle(e);
    }
    else {
        return (offset = 20);
    }
};
var buttons = function (total) {
    if (offset <= 0) {
        prevPage.disabled = true;
        prevPage.setAttribute("aria-disabled", "true");
        firstPage.disabled = true;
        firstPage.setAttribute("aria-disabled", "true");
    }
    else {
        prevPage.disabled = false;
        prevPage.setAttribute("aria-disabled", "false");
        firstPage.disabled = false;
        firstPage.setAttribute("aria-disabled", "false");
    }
    if (offset + limit >= total) {
        nextPage.disabled = true;
        nextPage.setAttribute("aria-disabled", "true");
        lastPage.disabled = true;
        lastPage.setAttribute("aria-disabled", "true");
    }
    else {
        nextPage.disabled = false;
        nextPage.setAttribute("aria-disabled", "false");
        lastPage.disabled = false;
        lastPage.setAttribute("aria-disabled", "false");
    }
};
btnPages.addEventListener("click", offsetParam);
